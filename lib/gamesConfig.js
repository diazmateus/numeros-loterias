const generateNumbers = _n => [...Array(_n).keys()].map(it => it + 1);

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
  }
};

export default function GetGame(game) {
  return GamesConfig[game];
}
