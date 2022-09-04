export default function CreateGame(numbers) {
  let indice = numbers.length;
  while (indice) {
    const indiceAleatorio = Math.floor(Math.random() * indice--);
    [numbers[indice], numbers[indiceAleatorio]] =
      [numbers[indiceAleatorio], numbers[indice]];
  }
  return numbers
}
