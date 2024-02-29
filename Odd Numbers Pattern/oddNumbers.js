const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (n) => {
  printOddNumbers(n);
  rl.close();
});

function printOddNumbers(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
