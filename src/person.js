const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;
const iAmConstant = 23;
// Mode #2 to export default
const isSenior = (age) => age >= 60;

// Mode #2 to export default
export { isAdult, canDrink, iAmConstant, isSenior as default };

// Mode #1
// export default (age) => age >= 60;
