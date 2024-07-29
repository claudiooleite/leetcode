// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = function (args) {
  return function (...args) {
    return console.log("Hello world");
  };
};

const args = [{}, null, 42];

const f = createHelloWorld();

f(args);
