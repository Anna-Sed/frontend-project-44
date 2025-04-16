import * as _ from '../index.js';

export default () => {
  // greeting
  _.mainGreeting('Welcome to the Brain Games!');
  const user = _.userName();
  _.userGreeting(user);

  const creatingQuestion = () => {
    const randomNum = _.getRandomInt(2, 29);
    const question = `Question: ${randomNum}`;

    const isPrime = (num) => {
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  const rule = `You need to answer 3 questions correctly.
Answer "yes" if given number is prime. Otherwise answer "no".`;
  const countOfCorrectAnswer = _.game(rule, creatingQuestion);

  _.conclusion(user, countOfCorrectAnswer);
};
