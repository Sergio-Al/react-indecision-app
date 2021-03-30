// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments); no longer in arrow functions
  return a + b;
};
console.log(add(55, 1, 100, 1));

// this keyword - no longer bound

const user = {
  name: "Sergio",
  cities: ["La Paz", "Santa Cruz", "Madrid"],
  printPlacesLived() {
    return this.cities.map(
      (city) => this.name + " has lived in " + city + " city"
    );
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  // numbers - array of numbers
  numbers: [1, 2, 3, 4, 5],
  // multiplyBy - single number
  multiplyBy: 2,
  // multiply - return a new array where the numbers have been multiplied!
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
