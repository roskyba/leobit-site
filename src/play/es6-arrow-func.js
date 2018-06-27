const square = function(num) {
  return num*num;
}

console.log(square(5));

// const squareArrow = (x) => {
//   return x*x;
// }


const squareArrow = (x) => x*x;


console.log(squareArrow(6));

const getFirstName = (full) => full.split(' ')[0];

const getFirstNameExp = (full) => {
  return full.split(' ')[0];
}

console.log(getFirstName('Ros Skyba'));
console.log(getFirstNameExp('Rostyk Skyba'))