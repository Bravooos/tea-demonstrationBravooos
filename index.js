// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
  return length * width;
}

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Function to check if a number is odd
function isOdd(number) {
  return !isEven(number);
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Example usage of helper functions
console.log("Area of a rectangle with length 5 and width 4:", calculateRectangleArea(5, 4));
console.log("Area of a circle with radius 3:", calculateCircleArea(3));
console.log("Is 6 even?", isEven(6));
console.log("Is 7 odd?", isOdd(7));
console.log("30 degrees Celsius in Fahrenheit:", celsiusToFahrenheit(30));
console.log("86 degrees
