import readlineSync from 'readline-sync';

const mainGreeting = (str) => console.log(str);

const userName = () => readlineSync.question('May I have your name? ', {
  defaultInput: 'User',
});

const userGreeting = (user) => console.log(`Hello, ${user}`);

const game = (rule, questionForRound) => {
  console.log(rule);
  let countOfCorrectAnswer = 0;
  for (let i = 1; i <= 3; i += 1) {
    const expectedAnswer = questionForRound();
    const [question, correctAnswer] = expectedAnswer;
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      const result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      console.log(result);
      break;
    }
    console.log('Correct!');
    countOfCorrectAnswer += 1;
  }
  return countOfCorrectAnswer;
};

const conclusion = (user, count) => {
  if (count !== 3) {
    console.log(`Let's try again, ${user}!`);
  } else {
    console.log(`Congratulations, ${user}!`);
  }
};

export {
  mainGreeting,
  userName,
  userGreeting,
  game,
  conclusion,
};
