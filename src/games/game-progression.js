import { getRandomInt, game } from '../index.js';

const makeProgression = () => {
  let startingNum = getRandomInt(0, 75);
  const difference = getRandomInt(2, 7);
  const progression = [];
  progression.push(startingNum);
  while (progression.length !== 10) {
    startingNum += difference;
    progression.push(startingNum);
  }
  return progression;
};
export default () => {
  // create question for game`s round and correct answer
  const creatingDataGame = () => {
    const progression = makeProgression();
    const randomIndex = getRandomInt(1, 9);
    const correctAnswer = progression[randomIndex].toString();

    progression[randomIndex] = '..';
    const question = `Question: ${progression.join(' ')}`;
    return [question, correctAnswer];
  };
  // run the game
  const rule = 'What number is missing in the progression?';
  game(rule, creatingDataGame);
};
