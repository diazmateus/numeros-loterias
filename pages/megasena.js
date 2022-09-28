import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Page from '../components/Page';
import GetGame from '../lib/gamesConfig';
import CreateGame from '../lib/shuffle';

export default function Game() {
  const [numbers, setNumbers] = useState([]);
  const router = useRouter();
  const game = new GetGame("megasena");

  useEffect(() => {
    if (game.numbers)
      generateNumbers();
  }, [game]);

  const generateNumbers = () => {
    setNumbers(CreateGame(game.numbers).slice(0, game.minNumbers).sort((a, b) => a - b));
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

          <button
            onClick={generateNumbers}
            className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-128">
            Gerar mais números
          </button>
        </div>
        <div className="text-center">

          <div className="container mx-auto">
            <div className="grid grid-cols-10 gap-2 p-32">
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
