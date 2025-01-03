// Sample JavaScript File

// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtractNumbers(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiplyNumbers(a, b) {
    return a * b;
}

// Function to divide two numbers
function divideNumbers(a, b) {
    return b !== 0 ? a / b : "Division by zero is not allowed";
}

// Function to display results
function displayResults() {
    const num1 = 10;
    const num2 = 5;

    console.log(`Addition: ${addNumbers(num1, num2)}`);
    console.log(`Subtraction: ${subtractNumbers(num1, num2)}`);
    console.log(`Multiplication: ${multiplyNumbers(num1, num2)}`);
    console.log(`Division: ${divideNumbers(num1, num2)}`);
}

// Execute the displayResults function
displayResults();
