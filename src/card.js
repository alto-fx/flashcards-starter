const createCard = (id, question, answers, correctAnswer) => {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card
}

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return "correct!"
  } else {
    return "incorrect"
  }
}

const createDeck = (allCards) => {
  let deck = {
    cards: allCards
  }
  return deck
}

const countCards = (allCards) => {
  let deckLength = allCards.cards.length
  return deckLength
}

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
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
}