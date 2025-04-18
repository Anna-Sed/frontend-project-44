import * as _ from '../index.js';

export default () => {
  // greeting
  _.mainGreeting('Welcome to the Brain Games!');
  const user = _.userName();
  _.userGreeting(user);

  const creatingGameData = () => {
    const randomNum1 = _.getRandomInt(0, 50);
    const randomNum2 = _.getRandomInt(0, 40);
    const operations = ['+', '-', '*'];
    const currentOperation = operations.at(_.getRandomInt(0, operations.length - 1));
    const question = `Question: ${randomNum1} ${currentOperation} ${randomNum2}`;

    let correctAnswer = 0;
    switch (currentOperation) {
      case '+':
        correctAnswer = randomNum1 + randomNum2;
        break;
      case '-':
        correctAnswer = randomNum1 - randomNum2;
        break;
      case '*':
        correctAnswer = randomNum1 * randomNum2;
        break;
      default:
        correctAnswer = 'We don\'t have this operation';
    }
    return [question, `${correctAnswer}`];
  };

  const rule = 'What is the result of the expression?';
  const countOfCorrectAnswer = _.game(rule, creatingGameData);

  _.conclusion(user, countOfCorrectAnswer);
};
