const readline = require('readline');

// Calculator class implementation in JavaScript


class Calculator {
  // Constructor initializes the calculator
  constructor() {
    console.log('Calculator initialized');
  }

  // Method to add two numbers
  add(a, b) {
    return a + b;
  }

  // Method to subtract the second number from the first
  subtract(a, b) {
    return a - b;
  }

  // Method to multiply two numbers
  multiply(a, b) {
    return a * b;
  }

  // Method to divide the first number by the second
  // Includes verification to prevent division by zero
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }
}

// Function to get user input and perform calculations
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const calculator = new Calculator();

function getNumbersAndOperate() {
  rl.question('Enter the first number: ', (firstInput) => {
    const a = parseFloat(firstInput);
    rl.question('Enter the second number: ', (secondInput) => {
      const b = parseFloat(secondInput);
      rl.question(
        'Choose an operation (add, subtract, multiply, divide): ',
        (operation) => {
          try {
            let result;
            switch (operation.toLowerCase()) {
              case 'add':
                result = calculator.add(a, b);
                break;
              case 'subtract':
                result = calculator.subtract(a, b);
                break;
              case 'multiply':
                result = calculator.multiply(a, b);
                break;
              case 'divide':
                result = calculator.divide(a, b);
                break;
              default:
                console.log('Invalid operation');
                rl.close();
                return;
            }
            console.log(`Result: ${result}`);
          } catch (error) {
            console.error(error.message);
          }
          rl.close();
        }
      );
    });
  });
}

getNumbersAndOperate();
