import * as _ from '../index.js';

export default () => {
  // greeting
  _.mainGreeting('Welcome to the Brain Games!');
  const user = _.userName();
  _.userGreeting(user);

  // create question for game`s round and correct answer
  const creatingGameData = () => {
    let startingNum = _.getRandomInt(0, 75);
    const difference = _.getRandomInt(2, 7);
    const progression = [];
    progression.push(startingNum);
    while (progression.length !== 10) {
      startingNum += difference;
      progression.push(startingNum);
    }
    const randomIndex = _.getRandomInt(1, 9);
    const correctAnswer = progression[randomIndex].toString();

    progression[randomIndex] = '..';
    const question = `Question: ${progression.join(' ')}`;
    return [question, correctAnswer];
  };

  const rule = 'What number is missing in the progression?';
  const countOfCorrectAnswer = _.game(rule, creatingGameData);

  _.conclusion(user, countOfCorrectAnswer);
};
