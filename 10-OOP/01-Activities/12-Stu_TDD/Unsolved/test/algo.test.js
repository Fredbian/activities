const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string

    it('should return a new reversed version of the string', () => {
      const algo = new Algo()
      expect(algo.reverse("Hello World!")).toEqual("!dlroW olleH")
    })
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it('should return the boolean `true` if the provided string is a palindrome.', () => {
      const algo = new Algo()
      expect(algo.isPalindrome("racecar")).toEqual(true)
      expect(algo.isPalindrome("neon")).toEqual(false)
    })
   
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it('should return a new string with the first letter of each word capitalized', () => {
      const algo = new Algo()
      expect(algo.capitalize("capitalize every first word of the string.")).toEqual("Capitalize Every First Word Of The String.")
    })
  });
});
