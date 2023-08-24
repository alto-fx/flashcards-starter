const createRound = (deck) => {
  let round = {
    deck: deck,
    currentCard: deck[0],
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
  const feedback = evaluateGuess(guess, round.currentCard.correctAnswer)
  if(feedback === "incorrect") {
    round.incorrectGuesses.push(round.currentCard.id)
  }
  round.turns += 1
  round.currentCard = round.deck[round.turns]

  return feedback
}

const calculatePercentCorrect = (round) => {
  let guessTotal = round.turns
  let correctGuesses = (round.turns - round.incorrectGuesses.length)
  let percentageCorrect = (correctGuesses / guessTotal) * 100
  return Math.round(percentageCorrect )
}

const endRound = (round) => {
  let percentageCorrect = calculatePercentCorrect(round)
  console.log(`** Round over! ** You answered ${percentageCorrect}% of the questions correctly!`)
}

module.exports = {
  createRound,
  evaluateGuess,
  takeTurn,
  calculatePercentCorrect,
  endRound
}