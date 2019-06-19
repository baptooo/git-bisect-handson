const prompt = require('prompt');
const app = require('./src/app');

prompt.start();

console.log('--- APP (examples) ---');

console.log('some(1,2)');
console.log('sayHello()');
console.log('isPalindrome("laval")');

console.log('---')

function run() {
  prompt.get(['expression'], function(err, result) {
    try {
      console.log(
        eval(`app.${result.expression}`)
      )
    } catch (err) {
      console.error(err.message);
    }

    run();
  });
}

run();
