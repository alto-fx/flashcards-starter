const { evaluateGuess } = require('../src/card');

const createRound = (deck) => {
  let round = {
    deck: deck,
    currentCard: deck.cards[0],
    turns: 0,
    incorrectGuesses: []
  }
  return round
}

module.exports = {
  createRound,
}