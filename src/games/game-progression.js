import { getRandomInt, game } from '../index.js'

const makeProgression = (start, difference) => {
  let startingNum = start
  const progression = []
  progression.push(startingNum)
  while (progression.length !== 10) {
    startingNum += difference
    progression.push(startingNum)
  }
  return progression
}

// create question for game`s round and correct answer
const createDataGame = () => {
  const startingNum = getRandomInt(0, 75)
  const difference = getRandomInt(2, 7)
  const progression = makeProgression(startingNum, difference)
  const randomIndex = getRandomInt(1, 9)
  const correctAnswer = progression[randomIndex].toString()

  progression[randomIndex] = '..'
  const question = `Question: ${progression.join(' ')}`
  return [question, correctAnswer]
}

export default () => {
  // run the game
  const rule = 'What number is missing in the progression?'
  game(rule, createDataGame)
}
