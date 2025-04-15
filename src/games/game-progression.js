import * as _ from '../index.js';

export default () => {
  // greeting
  _.mainGreeting('Welcome to the Brain Games!');
  const user = _.userName();
  _.userGreeting(user);

  // create question for game`s round and correct answer
  const creatingQuestion = () => {
    let startNum = _.getRandomInt(0, 75);
    const differenceNum = _.getRandomInt(2, 7);
    const progression = [];
    progression.push(startNum);
    while (progression.length !== 10) {
      startNum += differenceNum;
      progression.push(startNum);
    }
    const randomIndex = _.getRandomInt(1, 9);
    const correctAnswer = progression[randomIndex].toString();

    progression[randomIndex] = '..';
    const question = `Question: ${progression.join(' ')}`;
    return [question, correctAnswer];
  };

  const rule = `You need to answer 3 questions correctly.
What number is missing in the progression?`;
  const countOfCorrectAnswer = _.game(rule, creatingQuestion);

  _.conclusion(user, countOfCorrectAnswer);
};
