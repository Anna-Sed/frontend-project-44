import * as _ from '../index.js';

export default () => {
  // greeting
  _.mainGreeting('Welcome to the Brain Games!');
  const user = _.userName();
  _.userGreeting(user);

  // create question for game`s round and correct answer
  const creatingQuestion = () => {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const randomNum = getRandomInt(0, 100);
    const question = `Question: ${randomNum}`;

    const isEven = (num) => num % 2 === 0;
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const countOfCorrectAnswer = _.game(rule, creatingQuestion);

  _.conclusion(user, countOfCorrectAnswer);
};
