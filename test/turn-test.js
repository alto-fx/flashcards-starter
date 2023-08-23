const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/turn');

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
  it("should update the turn count")

})
