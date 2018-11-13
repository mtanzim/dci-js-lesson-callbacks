function exampleA() {
  
  function asyncCallbackFunc(a, b) {
    console.log('...');
    console.log('Whew! I finally get to Speak!!!');
    console.log(`I was given ${a} and ${b}`);
  }
  
  
  
  console.log('I will speak first :O');
  console.log('I will speak first too :O');
  console.log('I will speak first TOO :O');
  console.log('ME TOOO :O');
  console.log('ME THREEEEEEEE :O');
  
  setTimeout(function () {
    asyncCallbackFunc('Hello', 'World');
  }, 3000);
}

function exampleB(isOrdered) {

  function A() {
    console.log('A');
  }
  function B() {
    console.log('B');
  }
  function C() {
    console.log('C');
  }

  // what determines the order of this?
  function unordered(params) {
    setTimeout(A, 2000);
    setTimeout(B, 3000);
    setTimeout(C, 1000);
  }

  function ordered() {
    setTimeout(() => {
      A();
      setTimeout(() => {
        B();
        setTimeout(() => {
          C();
        }, 1000);
      }, 4000);
    }, 3000);
  }

  if (isOrdered) {
    ordered();
  } else {
    unordered();
  }

  
}

const arg = Number(process.argv[2]);
const isOrdered = Boolean(process.argv[3]);

(arg === 1) ? exampleA() : exampleB(isOrdered);
// exampleA();
// exampleB(false);


