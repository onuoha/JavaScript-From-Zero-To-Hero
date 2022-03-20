// ************* Course Content *************
// Nested function scope
// Closures
// Currying
// this keyword
// Prototype
// Prototypical inheritance
// Class
// classIterables and Iterators
// Generators

// Example of lexical scoping inner to outward
let a = 10
function outer(){
    let b = 20
    function inner(){
        let c = 30
        console.log(a,b,c)
    }
    inner()
}
outer()

// Closure: Combination of a function bundled with references to its surrounding state.

function out(){
    let counter = 0
    function inn(){
        counter++
        console.log(counter)
    }inn()
}out() // returns 1
out() // returns 1

function out(){
    let counter = 0
    function inn(){
        counter++
        console.log(counter)
    }return inn
}
const fn = out()
fn() // returns 1
fn() // returns 2
fn() // returns 3
// NB: An inner function has access to an outer function even after execution!

// Function Currying: A functional programming function where a multiple argument 
// function is transformed into a sequence of nesting funcions that take one argument at a time.
function sum(a,b,c){
    return a + b + c
}
console.log(sum(2,3,4))
// From sum(2,3,4) transform to sum(2)(3)(4)
function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}
const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(4))

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(4)
console.log(add5)

// this keyword
// Used in a function to refer to objects. It makes the function reusable 
// leaving programmer the decision to choose desired object value.
function sayName(name){
    console.log(`My name is ${name}`)
}
sayName('Emma')
sayName('Peter')

// How to determine the value of `this`
// Implicit, Explicit, new binding

// Implicit Binding
const person = {
    name: 'Emma',
    MyName: function(){
        console.log(`My name is ${this.name}`)
    },
}
person.MyName()

// Explicit Binding
//person.MyName()
globalThis.name = 'Patience'
function MyName(){
    console.log(`My name is ${this.name}`)
}
MyName.call(person) // Every function has a call() built-in method.

function Person(name){
    // this = {}
    this.name = name
}
const p1 = new Person('Emmanuel') // constructor function
const p2 = new Person('Onuoha')
console.log(p1.name, p2.name)

// Default Binding
MyName()

// Prototype (Why and How?)
function Person(fName, lName){
    this.firstName = fName
    this.lastName = lName
}

const person1 = new Person('Bruce', 'Wayne')
const person2 = new Person('Clark', 'Kent')

//person1.getFullName = function(){
Person.prototype.getFullName = function(){
    return this.firstName + ' '+ this.lastName
}
console.log(person1.getFullName())
console.log(person2.getFullName())

// Inheritance
function Parents(fName, lName){
    Person.call(this, fName,lName)
    this.isParents = true
}
Parents.prototype.fightCrime = function(){
    console.log('Fighting crime')
}
Parents.prototype = Object.create(Person.prototype)

const batman = new Parents('Ruth', 'Tim')
Parents.prototype.constructor = Parents
console.log(batman.getFullName())

// Class 
class PersonClass{
    constructor(fName, lName){
        this.firstName = fName
        this.lastName = lName
    }

    sayMeinName(){
        return this.firstName+ ' ' + this.lastName
    }
}
const classP1 = new PersonClass('Pat', 'Tom')
console.log(classP1.sayMeinName())

class SuperClass extends PersonClass{
    constructor(fName, lName){
        super(fName, lName)
        this.isSuperClass = true
    }
    fightCrime(){
        console.log('Fighting crime')
    }
}


// Iterables and Iterators - Why?
const str = 'Emmanuel'
for (let i = 0; i < str.length; i++){
    console.log(str.charAt(i))
}

// Iterables and Iterators - Protocols
const str2 = 'Faith'
for(const char of str2){
    console.log(char)
}

const arr = ['P','a','t','r','i','c','k']
for(const item of arr){
    console.log(item)
}


const obj ={
    [Symbol.iterator]: function(){
        let step = 0
        const iterator = {
            next: function(){
                step ++
                if (step === 1){
                    return {value: 'Hello', done: false}
                }else if(step === 2){
                    return {value: 'World', done: false}
                }
                    return {value: undefined, done: true}
               },
        } 
        return iterator
    },
}

for (const word of obj){
    console.log(word)
}

function normalFunction(){
    console.log('Hello')
    console.log('World')
}

normalFunction()
normalFunction()

// Generators
function* generatorFunction(){ // can pause the execution
    yield 'Hello New' // An operator with which an operator can pause itself
    yield 'World'
}

const generatorObject = generatorFunction() // returns a gernerator object
for (const word of generatorObject){
    console.log(word)
}