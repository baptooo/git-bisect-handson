function some(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }

  return a + b;
}

function sayHello() {
  return 'Hello !';
}

function isPalindrome(word) {
  return word.split('').reverse().join('') === word;
}

module.exports = {
  some,
  sayHello,
  isPalindrome
}
