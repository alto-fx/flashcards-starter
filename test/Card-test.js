const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

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
  it("should be a function", () => {
    expect(createCard).to.be.a("function");
  });

  it("should tell user guess is correct", () => {
    const card = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const userGuess = "object";
    let guessResult = evaluateGuess(userGuess, card.correctAnswer);
    expect(guessResult).to.equal("correct!");
  });

  it("should tell user guess is incorrect", () => {
    const card = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const userGuess = ["array", "function"];
    let guessResult = evaluateGuess(userGuess, card.correctAnswer);
    expect(guessResult).to.equal("incorrect");
  });
});

module.exports = {
  createCard, 
  evaluateGuess, 
}




