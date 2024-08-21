const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {

      let word = new Word("test") // create a new instance of the Word class, word, with the '.word' property "test"

      expect(word).to.have.property("word") // Check to see if our new word has a .word property
    });

    it('should set the "word" property when a new word is created', function () {

      let word = new Word("test") // Create a new instance of the Word class, word, with the .word property "test"

      expect(word.word).to.equal("test") // Check to see if the word.word property is "test"
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {

      let word1 = new Word("Apple"); // try word that begins with an Uppercase vowel and has anothr vowel at the end
      let word2 = new Word("Test"); // create a new Word that begins with an uppercase Consonant and has one vowel
      let word3 = new Word("Orange"); // create new Word that begins with an uppercase vowel and has several more vowels throughout

      expect(word1.removeVowels()).to.equal("ppl");
      expect(word2.removeVowels()).to.equal("Tst");
      expect(word3.removeVowels()).to.equal("rng");
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
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {

      let word1 = new Word("Test"); // create new Word taht begins with an uppercase consonant
      let word2 = new Word("JavaScript"); // create new Word that begins with an uppercase consonant, has another uppercase consonant in the middle, and vowels throughout
      let word3 = new Word("Apple"); // create new Word that begins with an uppercase Vowel

      expect(word1.pigLatin()).to.equal("estTay");
      expect(word2.pigLatin()).to.equal("avaScriptJay");
      expect(word3.pigLatin()).to.equal("Appleyay");
    });
  });
});
