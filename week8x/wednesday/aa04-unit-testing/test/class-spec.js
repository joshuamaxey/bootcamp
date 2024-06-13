const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {

      let word = new Word("test")

      expect(word.word).to.equal("test")
      // expect.fail("replace with your code");
    });

    it('should set the "word" property when a new word is created', function () {

      let word = new Word("word")

      expect(word.word).to.equal("word")
      // expect.fail("replace with your code");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {

      let word1 = new Word("Apple");
      let word2 = new Word("Test");
      let word3 = new Word("Orange");

      expect(word1.removeVowels()).to.equal("ppl");
      expect(word2.removeVowels()).to.equal("Tst");
      expect(word3.removeVowels()).to.equal("rng");
      // expect.fail("replace with your code");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {

      let word1 = new Word("Running");
      let word2 = new Word("Triangle");
      let word3 = new Word("JavaScript");

      expect(word1.removeConsonants()).to.equal("ui");
      expect(word2.removeConsonants()).to.equal("iae");
      expect(word3.removeConsonants()).to.equal("aai");
      // expect.fail("replace with your code");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {

      let word1 = new Word("Test");
      let word2 = new Word("JavaScript");
      let word3 = new Word("Apple");

      expect(word1.pigLatin()).to.equal("estTay");
      expect(word2.pigLatin()).to.equal("avaScriptJay");
      expect(word3.pigLatin()).to.equal("Appleyay");
      // expect.fail("replace with your code");
    });
  });
});
