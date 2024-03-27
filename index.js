// Helper function to calculate the square of a number
function calculateSquare(number) {
  return number * number;
}

// Helper function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Main function to demonstrate the helper functions
function main() {
  let num = 5;
  console.log(`The square of ${num} is ${calculateSquare(num)}`);

  if (isEven(num)) {
    console.log(`${num} is an even number.`);
  } else {
    console.log(`${num} is an odd number.`);
  }
}

// Call the main function
main();
