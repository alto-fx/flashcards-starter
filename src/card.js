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
  let  deck = {
    cards: allCards
  }
  return deck
}

const countCards = (allCards) => {
  let deckLength = allCards.cards.length
  return deckLength
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
}