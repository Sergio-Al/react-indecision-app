// import './utils';
// import { square, add } from "./utils.js";

// console.log("app.js is running!");
// console.log(add(square(4), 3));
import { isAdult, canDrink, iAmConstant } from "./person.js";

const person = {
    name: 'big boy',
    age: 25
};
console.log(isAdult(person.age) ? `you are adult ${person.name}` : `you aren't adult ${person.name}`);
console.log(canDrink(person.age) ? `You can drink ${person.name}` : `you can't drink ${person.name}`);
console.log(`this is a simple constant ${iAmConstant + 23}`);