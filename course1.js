// Log a statement using console.log()
console.log('Hello from main.js')

//Variables
let age = 25
console.log(age)

const salary = 8000
console.log(salary)

// Datatypes
const name = 'Emmanuel'
const language = "Deutsch"
const course = `JavaScript`

// Boolean
const isNumber = true
const isLetter = false

// Undefined
let result
console.log('result')
const res = undefined
console.log(res)

//null: - used to assign a value not known
const data = null
console.log(data)

// Non-primitive is a complex datatype
const person ={
    'firstName': 'Chidi',
    'lastName': 'Onuo',
    age: 30
}
console.log(person.age)

//Arrays are a kind of objects
const oddNumbers = [1,3,5,7,9]
console.log(oddNumbers[3])

// Operators
//  - Assignment
//  - Arithmetic (+,*,++/--x,%)
//  - Comparison (==,!=,===(returns not just the value but datatype), >,<,>=,<=)
//  - Logical (&&, ||, !)
//  - String (+)
//  - Others
let x = 10
let y = 5
const isValidNumber = x > 8 && 8 > y
console.log(isValidNumber)
console.log('Kemi' + ' is my friend')

//Ternery operator
let isEven = 10 % 2 === 0? true : false
console.log(isEven)
isEven = 10 % 2 === 0? 'Number is even' : 'Number is false'
console.log(isEven)

// Type Conversion: Implicit (internal) and Explicit (manual)
console.log(true + '3')
console.log('4' - '3') // internal conversion
console.log('Tom' - 'Kate') // internal conversion yields NaN
console.log('4' * '3') // internal conversion
console.log('4' - null) // internal conversion: null is treated as 0
console.log('4' - undefined) // internal conversion: NaN

console.log(Number('5')) // internal conversion
console.log(parseFloat('3.14')) // internal conversion
console.log(String('5')) // internal conversion
console.log((200).toString()) // internal conversion
console.log(Boolean(10)) // internal conversion
console.log(Boolean(null)) // internal conversion: returns false
console.log(Boolean(undefined)) // internal conversion: returns false

// Equality
const var1 = 10
const var2 = '10'

console.log(var1 == var2)
console.log(var1 === var2) // Ensure both are of the same type and not converted implicitly

// Conditional Statements: if, else, else if and switch
const num = 1
if (num>0){
    console.log('Number is positive')
}
else if(num<0){
    console.log('Number is negative')
}
else{
    console.log('Number is zero')
}

const color = 'blue'
switch(color){
    case 'red':
        console.log('Color is red')
        break // prevents the next statement execution if true
    case 'blue':
        console.log('Color is blue')
        break // prevents the next statement execution if true
    default:
        console.log('Not a valid color')
}

// Loops: For, While, Dowhile
for(i=0; i<=2; i++){
    console.log('I love you '+ i +' much')
}
let k = 1
while(k<=3){
    console.log('I love you '+ k +' much')
    k++
}

let j = 1
do{ // Always executed at least once
    console.log('I love you '+ j +' much')
    j++
}while(j<=4)

// For of loop
const numArray = [1,2,3,4,5]
for (const num of numArray){
    console.log('I love you '+ num +' much')
}

// Functions
function greet(username){ // username is function parameter
    console.log('Guten Morgen '+ username)
}
greet('Tim') // Tim is function argument
greet('Paulo')

function add(a,b){
    return a + b
}
console.log(add(55,4))

const arrowSum = (a,b) => a+b
const sum = arrowSum(25,25)
console.log(sum)

// Scope: Determines the visibility of variables: Block, Function and Global
if(true){
    const myName = 'Emma'
    //console.log(myName)
}
console.log(myName)
