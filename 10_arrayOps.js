let arr = [3,4,6,7,9,-1, 45];

let mappedArr = arr.map(function (elem, i) {
  return elem*i;
});

let filteredArr = arr.filter(function (elem, i) {
  return (elem > 6);
});

let reducedArr = arr.reduce(function (prev, curElem, i) {
  return prev += curElem;
});

console.log('Mapped array is: ');
console.log(mappedArr);

console.log('Filtered array is: ');
console.log(filteredArr);

console.log('Reduced array is: ');
console.log(reducedArr);