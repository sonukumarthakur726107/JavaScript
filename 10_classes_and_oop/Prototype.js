// let myName = "sonu    "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sonu = function(){
    console.log(`sonu is present in all objects`);
}

Array.prototype.heysonu = function(){
    console.log(`sonu says hello`);
}

// heroPower.sonu()
// myHeros.sonu()
// myHeros.heysonu()
// heroPower.heysonu()

// inheritance

const User = {
    name: "javaScript",
    email: "js@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "javaScript    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"sonu".trueLength()
"iceTea".trueLength()