import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Page from '../components/Page';
import GetGame from '../lib/gamesConfig';
import CreateGame from '../lib/shuffle';

export default function Game() {
    const [numbers, setNumbers] = useState([]);
    const [totalNumbers, setTotalNumbers] = useState(6);
    const router = useRouter();
    const game = new GetGame("megasena");

    useEffect(() => {
        if (game.numbers)
            generateNumbers();
    }, [game]);

    const generateNumbers = () => {
        setNumbers(CreateGame(game.numbers).slice(0, totalNumbers).sort((a, b) => a - b));
    };

    return (
        <Page>
            <div className="container mx-auto h-screen">
                <div className="text-center px-3 lg:px-0">
                    <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
                        Confira seus números da sorte
                    </h1>
                    <p className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
                        Você pode gerar quantos números quiser
                    </p>

                    <div className="flex justify-center">

                    <div className="custom-number-input w-32 ">
                        <label htmlFor="custom-input-number"
                               className="w-full text-gray-700 text-sm font-semibold">
                            Quantidade de números
                        </label>

                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                            <button data-action="decrement"
                                    onClick={()=> {setTotalNumbers(()=> totalNumbers - 1)}}
                                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                <span className="m-auto text-2xl font-thin">−</span>
                            </button>
                            <input type="number"
                                   className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                   name="custom-input-number" value={totalNumbers}/>
                            <button data-action="increment"
                                    onClick={()=> {setTotalNumbers(()=> totalNumbers + 1)}}
                                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                <span className="m-auto text-2xl font-thin">+</span>
                            </button>
                        </div>
                    </div>
                    </div>


                    <button
                        onClick={generateNumbers}
                        className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-128">
                        Gerar mais números
                    </button>
                </div>
                <div className="text-center">

                    <div className="container mx-auto ">
                        <div className="flex flex-wrap gap-2 p-16 ">
                            {numbers.map((it => {
                                return <div
                                    className="flex justify-center p-4 text-xl bg-violet-100 rounded text-black shadow-xl">
                                    {it}
                                </div>;
                            }))}
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
}
