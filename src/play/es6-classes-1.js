class Person {
  constructor (name = 'Anon', age = 0) {
    this.name = name;
    this.age = age
  }

  getGreeting () {
    return `Hey I am ${this.name}` ;
  }

  getDescription () {
    return `${this.name} is ${this.age} yo`
  }
}

class Student extends Person {
  constructor (name, age, major = '') {
    super(name, age);
    this.major = major;
  }
  hasMajor () {
    return !!this.major;
  }

  getDescription () {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` has ${this.major}`
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, location = '') {
    super(name, age, location);
    this.location = location;
  }

  getGreeting () {
    let greeting = super.getGreeting();
    if (this.location) {
      greeting += ` is from ${this.location}`
    }
    return greeting;
  }
}

const noone = new Student();
const ros = new Student('Ros', 30);
const skyba = new Student('Skyba', 50, 'Major');
const travel = new Traveler('Nazar', 25, 'Lviv');
const travel3 = new Traveler('Lesyk', 25, 'Radekhiv')
const travel2 = new Traveler('Ira', 24);

console.log(ros);
console.log(noone);
console.log(skyba);
console.log(travel);
console.log(travel2);

console.log(ros.getDescription())
console.log(noone.getDescription())
console.log(skyba.getDescription())