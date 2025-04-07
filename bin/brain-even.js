#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

// greeting
console.log('Welcome to the Brain Games!');
const userName = name();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// create random number for question
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Run the geme and check user`s and expected answers
let countOfCorrectAnswer = 0;
for (let i = 1; i <= 3; i += 1) {
  const randomNum = getRandomInt(0, 100);
  console.log(`Question: ${randomNum}`);
  const userAnswer = readlineSync.question('Your answer:');

  const isEven = (num) => num % 2 === 0;
  const expectedAnswer = isEven(randomNum) ? 'yes' : 'no';
  if (userAnswer !== expectedAnswer) {
    const result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.
Let's try again, ${userName}!`;
    console.log(result);
    break;
  }
  console.log('Correct!');
  countOfCorrectAnswer += 1;
}

if (countOfCorrectAnswer === 3) {
  console.log(`Congratulations, ${userName}!`);
}
