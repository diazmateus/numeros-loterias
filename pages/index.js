import React, { useEffect } from 'react';
import Page from '../components/Page';
import GetGame from '../lib/gamesConfig';
import CreateGame from '../lib/shuffle';

export default function Home() {
  const game = new GetGame('lotofacil');

  const generateNumbers = () => {
    console.log(CreateGame(game.numbers).slice(0, game.minNumbers));
  }

  return (
    <Page>
      <h1>This is the Home page</h1>

      <button onClick={generateNumbers}>GERAR</button>

    </Page>
  );
}
