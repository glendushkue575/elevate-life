/* 
   Filename: ComplexCode.js
   Content: Complex code demonstrating advanced JavaScript concepts
*/

// Utility function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  
  return num * factorial(num - 1);
}

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Derived class Student extending Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying for ${this.grade} grade.`);
  }
}

// Function to find the maximum value in an array
function findMax(arr) {
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}

// Object representing a Car
const car = {
  brand: 'Tesla',
  model: 'Model S',
  year: 2022,
  drive() {
    console.log(`Driving ${this.brand} ${this.model}.`);
  }
};

// Promisified setTimeout function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Asynchronous function that prints numbers from 1 to n with a delay
async function printNumbersWithDelay(n, delayMs) {
  for (let i = 1; i <= n; i++) {
    await delay(delayMs);
    console.log(i);
  }
}

/*
   ... 200 lines of additional code ...
*/

// Usage of defined functions and classes

console.log(factorial(5)); // Output: 120

const john = new Person('John Doe', 30);
john.greet(); // Output: Hello, my name is John Doe and I am 30 years old.

const jane = new Student('Jane Smith', 18, '12th');
jane.study(); // Output: Jane Smith is studying for 12th grade.

const numbers = [5, 2, 8, 10, 3];
console.log(findMax(numbers)); // Output: 10

car.drive(); // Output: Driving Tesla Model S.

printNumbersWithDelay(5, 1000); // Output: (after 1 second interval)
                                // 1
                                // 2
                                // 3
                                // 4
                                // 5

/*
   ... 200 lines of additional code ...
*/

// End of ComplexCode.js