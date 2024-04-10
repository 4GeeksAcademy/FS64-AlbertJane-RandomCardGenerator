const SUIT_LIST = ["", "", "", ""];
const NUMBER_LIST = [
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

class Player {
  constructor(name, points) {
    this.name = name;
    this.points = points;
  }

  getPoints() {
    return this.points;
  }

  setPoints(pointsToAdd) {
    this.points += pointsToAdd;
  }
}

class Dealer {
  constructor(deck) {
    this.deck = deck;
  }
}

class Deck {
  constructor() {
    let count = 0;
    NUMBER_LIST.forEach((number) => {
      count++;
      SUIT_LIST.forEach((suit) => {
        this.deck = { ...this.deck, card: new Card(number, suit, count) };
      });
    });
  }
  getDeck() {
    return this.deck;
  }
}

class Card {
  constructor(number, suit, id) {
    this.number = number;
    this.suit = suit;
    this.id = id;
  }
}

const play = () => {
  const player = new Player(localStorage.getItem("name", 0));
  const croupier = new Player("croupier", 0);
  const deck = new Deck();
  console.log(deck.getDeck());
};
