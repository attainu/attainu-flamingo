// Object Oriented Programming 

// constructor ES 5
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + lastName
}

Person.prototype.getFullName = function (){
    return this.firstName + " " + this.lastName;
}


Person.prototype.getAge = function (age){
    return this.firstName + " " + this.lastName + " Your age is: " + age;
}

var person1 = new Person("Gopi", "Malla");
var person2 = new Person("Ansal", "A");
var person3 = new Person("Divyam", "Goel");

console.log("person1: ", person1.getFullName())
console.log("person2: ", person2.getFullName())
console.log("person3: ", person3.getFullName())

console.log("person1: ", person1.getAge(20))
console.log("person2: ", person2.getAge(21))
console.log("person3: ", person3.getAge(22))


// ES 6
// Parent Classs / Super Classs 
class Person1{
    // Pre Defined functions 
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 20;
    }

    // User defined functions 
    getFullName(name){
        return this.firstName + " " + this.lastName + " this is your email: "+email;
    }
}

// Child class/ Sub Class 
// inheritance 
class Developer extends Person1{
    constructor(firstName, lastName){
        super(firstName, lastName);
        this.workplace = "Bangalore";
        this.technology = "Bangalore";
    }

    getWorkPlace(){
        return this.workplace;
    }
}

var developer = new Developer("Gopi", "Malla");

console.log("person4: ", developer.getFullName());