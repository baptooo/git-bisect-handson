/**
 * Some two numbers
 * @param {number} a 
 * @param {number} b 
 */
function some(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }

  if (a === 5) {
    throw new Error('Anarchy !');
  }

  return a + b;
}

/**
 * Say hello
 */
function sayHello() {
  return '**** you I won\'t do what you tell me !';
}

/**
 * Determines if the word is a palindrome
 * @param {string} word 
 */
function isPalindrome(word) {
  return word.split('').reverse().join('') === word;
}

module.exports = {
  some,
  sayHello,
  isPalindrome
}
