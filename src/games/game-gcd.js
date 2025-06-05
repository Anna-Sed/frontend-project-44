import { getRandomInt, game } from '../index.js'

const calculateGcdResult = (num1, num2) => {
  const divisible = Math.max(num1, num2)
  const divisor = Math.min(num1, num2)
  const remainder = divisible % divisor
  if (remainder > 0) {
    return calculateGcdResult(divisor, remainder)
  }
  return divisor
}

const createGameData = () => {
  const randomNum1 = getRandomInt(1, 40)
  const randomNum2 = getRandomInt(1, 40)
  const question = `Question: ${randomNum1} ${randomNum2}`

  const correctAnswer = calculateGcdResult(randomNum1, randomNum2)
  return [question, `${correctAnswer}`]
}

export default () => {
  const rule = 'Find the greatest common divisor of given numbers.'
  game(rule, createGameData)
}
