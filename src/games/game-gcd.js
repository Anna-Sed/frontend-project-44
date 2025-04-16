import * as _ from '../index.js';

export default () => {
  // greeting
  _.mainGreeting('Welcome to the Brain Games!');
  const user = _.userName();
  _.userGreeting(user);

  const creatingQuestion = () => {
    const randomNum1 = _.getRandomInt(0, 40);
    const randomNum2 = _.getRandomInt(0, 40);
    const question = `Question: ${randomNum1} and ${randomNum2}`;

    let divisible = Math.max(randomNum1, randomNum2);
    let divisor = Math.min(randomNum1, randomNum2);
    let correctAnswer;
    let remainder = divisible % divisor;
    if (remainder === 0) {
      correctAnswer = divisor;
    } else {
      while (remainder !== 0) {
        divisible = divisor;
        divisor = remainder;
        remainder = divisible % divisor;
      }
      correctAnswer = divisor;
    }
    return [question, `${correctAnswer}`];
  };

  const rule = `You need to answer 3 questions correctly.
Find the greatest common divisor of given numbers.`;
  const countOfCorrectAnswer = _.game(rule, creatingQuestion);

  _.conclusion(user, countOfCorrectAnswer);
};
