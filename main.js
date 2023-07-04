const generateCheap = (values, suits) => {
  const cheap = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const card = values[j] + suits[i];
      cheap.push(card);
    }
  }
  return cheap;
};

const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const suits = ["♠️", "♣️", "♦️", "♥️"];

const cheap = generateCheap(values, suits);
console.log(cheap);
