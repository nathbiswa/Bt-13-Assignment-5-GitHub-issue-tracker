 - 1️⃣ What is the difference between var, let, and const?
 ## Ans No.1
 # Difference between var , let and const:
 Var: var is global variable.var is function scope, var more than variable assign. For Example : var name = 'Biswa';
    name = 'Nath';
 let : let is Block scope variable. ler can not re-declared in the same scope.
 const : const is unique. can not be re declared, can not be re-assign. block scope;

- 2️⃣ What is the spread operator (...)?
## Ans No.2
1. spred operator can copy arrays.
2. spred operator can Merge arrays
3. spred operator Copy objects
4. spred operator Merge objects

- 3️⃣ What is the difference between map(), filter(), and forEach()?
## Ans No.3
# map:
map - create a new aray.Ane we can solved arithmatic opretator ;
For Example : const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
output : [2, 4, 6, 8];
# filter:
filter - The filter finds words from an array according to the filter keyword and creates a new array. For Example :
 const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
Output : [2, 4];

# forEach:
 forEach - forEaach runs a function within an array, and outputs each value individually.

- 4️⃣ What is an arrow function?
# ‍arrow function:
arrow - Array functions are a shorthand for regular functions.
Regular functions have to return. But array functions do not have to return.
For Example: 
normal function : function add(a, b) {
  return a + b;
}
arrow function : const add = (a, b) => a + b;

- 5️⃣ What are template literals?
## Template literals:
Template literals- template literals is a bactic sign  ``; This opportunity : 
1. Multiple line code. 
2. I can javaScript exparation inside.
3. I can crate daynamic HTML       