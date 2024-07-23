var addTwoNumbers = function (l1, l2) {
  // Reverse the arrays
  const revL1 = l1.slice().reverse();
  const revL2 = l2.slice().reverse();

  // Convert reversed arrays to numbers
  const num1 = +revL1.join("");
  const num2 = +revL2.join("");

  // Add the two numbers
  const sum = num1 + num2;

  // Convert the sum to a string, split into characters, convert each to a number, and reverse to match required output format
  const final = sum.toString().split("").map(Number).reverse();

  return final;
};

// i have 2 arrays
// each has x number of elements
// they are in reverse (need to reverse befor e using them)
//  convert them to nummbers and add them
// convert it to array
// reverse it again

// sum 2 arrays of nunbers

const l1 = [2, 4, 5, 3];
const l2 = [5, 6, 4];

console.log(addTwoNumbers(l1, l2));
