import React, { useEffect } from 'react';
import Page from '../components/Page';
import GetGame, { GetAvailableGames } from '../lib/gamesConfig';
import CreateGame from '../lib/shuffle';

export default function Home() {
  const game = new GetGame('lotofacil');

  const generateNumbers = () => {
    document.getElementById('numeros').innerHTML = CreateGame(game.numbers).slice(0, game.minNumbers)
  }

  return (
    <Page>

      <button onClick={generateNumbers}>GERAR</button>

      <div id="numeros"></div>

    </Page>
  );
}
