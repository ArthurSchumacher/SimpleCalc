const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach((button) => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText)
		calculator.updateDisplay()
	})
})

operationButtons.forEach((button) => {
	button.addEventListener('click', () => {
		calculator.chooseOperation(button.innerText)
		calculator.updateDisplay()
	})
})

equalsButton.addEventListener('click', (button) => {
	calculator.compute()
	calculator.updateDisplay()
})

allClearButton.addEventListener('click', (button) => {
	calculator.clear()
	calculator.updateDisplay()
})

deleteButton.addEventListener('click', (button) => {
	calculator.delete()
	calculator.updateDisplay()
})
