function executeCallback(string, callback, hasArgs = false) {
  console.log(string);
  if (hasArgs) {
    callback(4,5);
  } else {
    callback();
  }

  console.log('\n');
  
}

function executeCallbackWithArgs(string, callbackWithArgs) {
  console.log(string);
  callbackWithArgs(1,2);
  
  let a=3;
  let b=4;
  callbackWithArgs(a,b);
  // callbackWithArgs(a,string);
}


function callbackA() {
  console.log('Hi, I am callback A!');
}


function driver(input) {

  switch (input) {

    case 1:
      executeCallback('Starting callback A', callbackA);
      break;
    
    case 2:
      executeCallback('Starting anonymous callback :O', function () {
        console.log('Hi, I am an anonymous callback');
      });
      break;

    case 3:
      executeCallback('Starting anonymous callback that does math :O :O', function (a, b) {
        console.log('Hi, I am an anonymous callback that can DO MATH :D');
        console.log (`${a} + ${b} = ${a+b}`);
      }, true);
      break;

    case 4:
      executeCallback('Starting another anonymous callback that does math :O :O', () => function (a, b) {
        console.log('Hi, I am an anonymous callback that can DO MATH :D');
        console.log(`${a} + ${b} = ${a + b}`);
      }(6,7));  
       break;

    case 5:
    //passing arguments into callbacks
      executeCallbackWithArgs('Starting callback with args!', function (a,b) {
        console.log('Hi, I am an anonymous callback with arguments!');
        console.log(`My first argument is ${a}`);
        console.log(`My second argument is ${b}`);
      });
      break;

      default:
        console.log('Please provide valid input!');
        
  }
}

let arg = process.argv[2];
console.log(arg);
driver(Number(arg) || null);

