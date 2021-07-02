const resultElement = document.getElementById('result')
const lengthElement = document.getElementById('length')
const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')
const generateButton = document.getElementById('generate')
const clipElement = document.getElementById('clipboard')

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

clipElement.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = resultElement.innerText
  if (!password) return

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password has been copied to the clipboard!')
})

generateButton.addEventListener('click', () => {
  const length = +lengthElement.value
  const hasLower = lowercaseElement.checked
  const hasUpper = uppercaseElement.checked
  const hasNumbers = numbersElement.checked
  const hasSymbols = symbolsElement.checked

  resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols, length)

})

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''
  const typesCount = lower + upper + number + symbol
  const typesArray = [
    {lower},
    {upper},
    {number},
    {symbol}
  ].filter(item => Object.values(item)[0])

  if (typesCount === 0) return ''

  for(let i = 0; i < length; i += typesCount) {
    typesArray.forEach((type) => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunction[funcName]()
    })
  }
  const finalPassword = generatedPassword.slice(0, length)
  return finalPassword
}
