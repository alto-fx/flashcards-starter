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

module.exports = {
  createDeck,
  countCards,
}