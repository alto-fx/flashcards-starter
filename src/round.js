
const createRound = (deck) => {
  let round = {
    deck: deck,
    currentCard: deck.cards[0],
    turns: 0,
    incorrectGuesses: []
  }
  return round
}

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return "correct!"
  } else {
    return "incorrect"
  }
}

const takeTurn = (guess, round) => {

}


module.exports = {
  createRound,
  evaluateGuess,
  takeTurn
}