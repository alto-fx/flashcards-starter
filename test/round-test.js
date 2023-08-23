const chai = require('chai');
const expect = chai.expect;

const { createCard, } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, evaluateGuess} = require('../src/round');

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

describe("guess", () => {
  it("should be a function", () => {
    expect(createCard).to.be.a("function");
  });

  it("should give user feedback if guess is correct", () => {
    const card = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const userGuess = "object";
    let guessResult = evaluateGuess(userGuess, card.correctAnswer);
    expect(guessResult).to.equal("correct!");
  });

  it("should give user feedback if guess is incorrect", () => {
    const card = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const userGuess = ["array", "function"];
    let guessResult = evaluateGuess(userGuess, card.correctAnswer);
    expect(guessResult).to.equal("incorrect");
  });
});

describe("turn", () => {
  
  it("should be a function", () => {
    expect(createCard).to.be.a("function");
  });

  it("should update the turn count")

})
