import { getRandomInt, game } from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
export default () => {
  // create question for game`s round and correct answer
  const creatingDataGame = () => {
    const randomNum = getRandomInt(2, 67);
    const question = `Question: ${randomNum}`;
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  // run the game
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(rule, creatingDataGame);
};
