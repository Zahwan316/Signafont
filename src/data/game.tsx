// data/generateGameCards.ts
const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

export function generateGameCards(length: number, random: boolean = false) {
  let selected: string[];

  if (random) {
    // ambil huruf random sejumlah length
    selected = [...alphabets]
      .sort(() => Math.random() - 0.5) // shuffle array alphabet
      .slice(0, length);
  } else {
    // ambil huruf urut dari a–z
    selected = alphabets.slice(0, length);
  }

  // hasilkan 2 kartu untuk tiap huruf
  const cards = selected.flatMap((char, index) => [
    {
      id: index * 2 + 1,
      name: char,
      image: `/img/${char.toUpperCase()}.png`,
      description: char,
    },
    {
      id: index * 2 + 2,
      name: char,
      image: `/img/${char.toUpperCase()}-Card.png`,
      description: char,
    },
  ]);

  return cards;
}
