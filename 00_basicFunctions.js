// function declaration
function func(a, b) {
  return a + b;
}

// variable storing a function
// What is a a key difference?
const varFunc = function (a,b) {
  return a + b;
}

// func(2,2)

console.log(func(5,4));

console.log(varFunc(2,2));

// immediately invoked function expression
console.log (
  (function (a,b) {
    return a + b;
  })(2,9)
);