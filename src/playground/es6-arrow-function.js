const square = function (x) {
  return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(4));


// CHALLENGE Arrow Functions
const fullName = "Pelusa golden";
// Using the normal arrow function
const getFirstName = (name) => {
  return name.split(" ")[0];
};

// Using the shorthand arrow function
const getFirstNameShorthand = (name) => name.split(" ")[0];

console.log(
  'The first name of "' + fullName + '" is: ' + getFirstName(fullName)
);
console.log(
  'The first name of "' +
    fullName +
    '" using the shorthand is: ' +
    getFirstNameShorthand(fullName)
);
