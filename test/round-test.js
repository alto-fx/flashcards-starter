const chai = require('chai');
const expect = chai.expect;

const { createCard, } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, evaluateGuess, takeTurn, calculatePercentCorrect, endRound} = require('../src/round');

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
    expect(round.currentCard).to.equal(deck[0])
    expect(round.turns).to.equal(0)
    expect(round.incorrectGuesses).to.deep.equal([])
  })
});

describe("turn", () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = createDeck([card1, card2, card3])
    round = createRound(deck)
  });

  it("should be a function", () => {
    expect(createCard).to.be.a("function");
  });

  it("should give user feedback if guess is correct", () => {
    const card = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const userGuess = "object";
    const evaluateAnswer = evaluateGuess(userGuess, card.correctAnswer);
    expect(evaluateAnswer).to.equal("correct!");
  });

  it("should give user feedback if guess is incorrect", () => {
    const card = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const userGuess = ["array", "function"];
    const evaluateAnswer = evaluateGuess(userGuess, card.correctAnswer);
    expect(evaluateAnswer).to.equal("incorrect");
  });

  it("should be a function", () => {
    expect(takeTurn).to.be.a("function");
  });

  it("should show answer is correct", () => {
    const feedback = takeTurn("sea otter", round);
    expect(feedback).to.equal("correct!");
  });

  it("should increase the number of turns", () => {
    takeTurn("sea otter", round)
    expect(round.turns).to.equal(1)
  });

  it("should show answer is incorrect", () => {
    const feedback = takeTurn("spleen", round);
    expect(feedback).to.equal("incorrect");
  });

  it("should store id of incorrect guesses in an array of incorrectGuesses", () => {
    takeTurn("capybara", round)
    expect(round.incorrectGuesses).to.deep.equal([1])
  })

  it("should update the next card to be the current card", () => {
    takeTurn("health is wealth", round)
    expect(round.currentCard).to.equal(deck[1])
    takeTurn("Fitzgerald", round)
    expect(round.currentCard).to.equal(deck[2])
  })
});

describe("calculate guess percentage", () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = createDeck([card1, card2, card3])
    round = createRound(deck)
  });

  it("should show percentage of correct guesses", () => {
    takeTurn("sea otter", round)
    takeTurn("spleen", round)
    takeTurn("Lex", round)
    const percentageCorrect = calculatePercentCorrect(round)
    expect(percentageCorrect).to.equal(33)
  })
  
  it("should show end of round message with percentage of correct guesses", () => {
    takeTurn("sea otter", round)
    takeTurn("spleen", round)
    takeTurn("Lex", round)
    const endRoundMessage = endRound(round)
    expect(endRoundMessage).to.equal(`** Round over! ** You answered 33% of the questions correctly!`)
  })
})

