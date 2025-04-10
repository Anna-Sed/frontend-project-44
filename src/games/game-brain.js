import { mainGreeting, userName, userGreeting } from '../index.js';

export default () => {
  mainGreeting('Welcome to the Brain Games!');
  const user = userName();
  userGreeting(user);
};
