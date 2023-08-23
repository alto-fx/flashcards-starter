const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards, } = require('../src/deck');


describe("deck", () => {
  let card1, card2, card3, deck;
  beforeEach(() => {
    card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = createDeck([card1, card2, card3])
  });

  it("should be a function", () => {
    expect(createDeck).to.be.a("function")
  })

  it("should create a deck of cards", () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  });

  it("should count cards", () => {
    const deckLength = countCards(deck)
    expect(deckLength).to.deep.equal(3)
  })
});

