const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countCards, } = require('../src/card');

describe('card', function () {
  it('should be a function', function () {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function () {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });
});

describe("guess", () => {
  it("should tell user guess is correct", () => {
    const card = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object', 'array', 'function"], "object")
    const userGuess = "object"
    let guessResult = evaluateGuess(userGuess, card.correctAnswer)
    expect(guessResult).to.equal("correct!")
  })

  it("should tell user guess is incorrect", () => {
    const card = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object', 'array', 'function"], "object")
    const userGuess = "array" || "function"
    let guessResult = evaluateGuess(userGuess, card.correctAnswer)
    expect(guessResult).to.equal("incorrect")
  })
});

describe("deck", () => {
  let card1, card2, card3, deck;

  beforeEach(() => {
    card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = createDeck([card1, card2, card3])
  });

  it("should create a deck of cards", () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3])
  });

  it("should count cards", () => {
    const deckLength = countCards(deck)
    expect(deckLength).to.deep.equal(3)
  })
});





