const isValid = function (s) {
  // if x has y to close return true
  let stack = [];

  for (let i of s) {
    if (i === "(" || i === "{" || i === "[") {
      stack.push(i);
      console.log(stack);
    } else {
      if (
        (i === ")" && stack[stack.length - 1] !== "(") ||
        (i === "]" && stack[stack.length - 1] !== "[") ||
        (i === "}" && stack[stack.length - 1] !== "{")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length;
};

// check if the nex item is clising
//

// const s = "()[]{}";
// const a = "()";
// const b = "(){[]}";
// const c = "(]";

// console.log(isValid(s));
// console.log(isValid(a));
// console.log(isValid(b));
// console.log(isValid(c));

module.exports = { isValid };
