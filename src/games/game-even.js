import { getRandomInt, game } from '../index.js'

const isEven = num => num % 2 === 0

// create question for game`s round and correct answer
const createDataGame = () => {
  const randomNum = getRandomInt(0, 100)
  const question = `Question: ${randomNum}`
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no'
  return [question, correctAnswer]
}
export default () => {
  // run the game
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".'
  game(rule, createDataGame)
}
