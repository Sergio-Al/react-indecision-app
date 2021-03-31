class Person {
    constructor(name = 'Anonymous', age = 0) /*this is a default value if entry parameter is undefined */ {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        return this.hasMajor() ? super.getDescription() + ` I have a major in ${this.major}` : super.getDescription();
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        return this.hasHomeLocation()? super.getGreeting() + ` I'm visiting from ${this.homeLocation}` : super.getGreeting();
    }
}

const me = new Traveler('Sergio Alejandro', 23, 'La Paz');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());