const generateNumbers = (_n, initAtZero = false) => [...Array(_n).keys()].map(it => it + initAtZero ? 0 : 1);

const GamesConfig = {
  megasena: {
    minNumbers: 6,
    maxNumbers: 15,
    numbers: generateNumbers(60)
  },
  lotofacil: {
    minNumbers: 15,
    maxNumbers: 20,
    numbers: generateNumbers(25)
  },
  quina: {
    minNumbers: 5,
    maxNumbers: 15,
    numbers: generateNumbers(80)
  },
  duplasena: {
    minNumbers: 6,
    maxNumbers: 15,
    numbers: generateNumbers(50)
  },
  lotomania: {
    minNumbers: 50,
    maxNumbers: 50,
    numbers: generateNumbers(100, false)
  },
};

const translate = {
  megasena: "Mega Sena",
  lotofacil: "Lotofácil",
  quina: "Quina",
  lotomania: "Lotomania",
  duplasena: "Dupla Sena",
}

export const GetAvailableGames = () => Object.keys(GamesConfig).map(it=> translate[it])

export default function GetGame(game) {
  return GamesConfig[game];
}
