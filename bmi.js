const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter your mass in kg: ", (mass) => {
  rl.question("Enter your height in meters: ", (height) => {
    let BMI = mass / (height * height);
    console.log("Your BMI is: " + BMI.toFixed(2));
    rl.close();
  });
});
