var nameVar = 'Sergio';
var nameVar = 'Alejandro';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
// let nameLet = 'Jon'; no re declare
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// nameConst = 'Alejandro'; no re asign
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

// const petName = getPetName();
// console.log(petName);

// Block scoping
const fullName = 'ff Alejandro';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
