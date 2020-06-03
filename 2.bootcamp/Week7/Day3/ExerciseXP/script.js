// Exercise 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}


const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// output : I am John Doe from Vancouver, Canada. Latitude(49.2827),Longitude(-123.1207)

// Exercise 2

let name = {
    first: 'Elie',
    last:'Schoppik'
  }
  
  function displayStudentInfo({first, last}){
      console.log("Your full name is "+ first +" "+ last);
  }
  
  displayStudentInfo(name)

// Exercise 3

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
const member = new Person('John');
console.log(typeof member); // output : object

// Exercise 4

class Dog {
    constructor(name) {
      this.name = name;
    }
  };
// With which constructor can we successfully extend the Dog class? ==> Proposition 2
class Labrador extends Dog {
    // 1
    constructor(name, size) {
      this.size = size;
    }
    // 2
    constructor(name, size) {
      super(name);
      this.size = size;
    }
    // 3
    constructor(size) {
      super(name);
      this.size = size;
    }
    // 4
    constructor(name, size) {
      this.name = name;
      this.size = size;
    } 
};