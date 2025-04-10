import * as _ from '../index.js';

export default () => {
  // greeting
  _.mainGreeting('Welcome to the Brain Games!');
  const user = _.userName();
  _.userGreeting(user);

  const creatingQuestion = () => {
    const randomNum1 = _.getRandomInt(0, 80);
    const randomNum2 = _.getRandomInt(0, 80);
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

  const rule = `You need to answer 3 questions correctly.
What is result of the expression?`;
  const countOfCorrectAnswer = _.game(rule, creatingQuestion);

  _.conclusion(user, countOfCorrectAnswer);
};
