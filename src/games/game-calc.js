import { getRandomInt, game } from '../index.js'

const calculateArithmeticResult = (operation, num1, num2) => {
  let result = 0
  switch (operation) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    default:
      result = 'We don\'t have this operation'
  }
  return result.toString()
}

// create question for game`s round and correct answer
const createDataGame = () => {
  const randomNum1 = getRandomInt(0, 50)
  const randomNum2 = getRandomInt(0, 40)
  const operations = ['+', '-', '*']
  const currentOperation = operations.at(getRandomInt(0, operations.length - 1))
  const question = `Question: ${randomNum1} ${currentOperation} ${randomNum2}`

  const correctAnswer = calculateArithmeticResult(currentOperation, randomNum1, randomNum2)
  return [question, correctAnswer]
}

export default () => {
  // run the game
  const rule = 'What is the result of the expression?'
  game(rule, createDataGame)
}
