import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name?', {
  defaultInput: 'User',
});

export default userName;
