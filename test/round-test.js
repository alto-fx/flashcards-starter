const chai = require('chai');
const expect = chai.expect;

const { createCard, } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, } = require('../src/round');

describe("round", () => {
  let card1, card2, card3, deck, round;
  beforeEach(() => {
    card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = createDeck([card1, card2, card3])
    round = createRound(deck)
  });

  it("should be a function", () => {
    expect(createRound).to.be.a("function")
  })

  it("should create a round", () => {
    expect(round.deck).to.equal(deck)
    expect(round.currentCard).to.equal(deck.cards[0])
    expect(round.turns).to.equal(0)
    expect(round.incorrectGuesses).to.deep.equal([])
  })
});