// Helper function to calculate the sum of two numbers
function add(a, b) {
  return a + b;
}

// Helper function to calculate the difference of two numbers
function subtract(a, b) {
  return a - b;
}

// Helper function to calculate the product of two numbers
function multiply(a, b) {
  return a * b;
}

// Helper function to calculate the division of two numbers
function divide(a, b) {
  if (b !== 0) {
      return a / b;
  } else {
      return "Error: Division by zero";
  }
}

// Example usage of helper functions
console.log("2 + 3 =", add(2, 3));
console.log("5 - 3 =", subtract(5, 3));
console.log("4 * 6 =", multiply(4, 6));
console.log("10 / 2 =", divide(10, 2));
console.log("10 / 0 =", divide(10, 0)); // Division by zero error
