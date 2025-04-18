import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ', {
  defaultInput: 'User',
});
const getUserAnswer = () => readlineSync.question('Your answer: ');
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const game = (rule, getGameData) => {
  // greeting
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  console.log(rule);
  // the main game loop with calculating correct answers
  let countOfCorrectAnswer = 0;
  for (let i = 1; i < 4; i += 1) {
    const gameData = getGameData();
    const [question, correctAnswer] = gameData;
    console.log(question);
    const userAnswer = getUserAnswer();

    if (userAnswer !== correctAnswer) {
      const result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      console.log(result);
      break;
    }
    console.log('Correct!');
    countOfCorrectAnswer += 1;
  }
  // conclusion
  if (countOfCorrectAnswer !== 3) {
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};

export { getRandomInt, game };
