class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  happyBirthday() {
    this.age++;
  }
}



function happyFunkyBirthday(Obj) {
  let newObj = { ...Obj };
  newObj.age++;
  return newObj;
}


let sally = new Person('Sally', 25);
sally.happyBirthday();

console.log(sally);

const Jose = {
  name: 'Jose',
  age: 35,
}

console.log(happyFunkyBirthday(Jose));
console.log(Jose);



