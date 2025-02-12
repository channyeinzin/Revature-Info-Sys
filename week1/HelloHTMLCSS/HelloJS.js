//Here's our first print statement
console.log("===========================Printing/Declaring Variables")

//JS is LOOSELY TYPED, so we can declare variables without declaring datatype
//We can also easily reassign variables to values of different datatypes (implicit type coercion)
a = 100
a = true
a = null
a = "Now I'm a String!"

//JavaScript will assign variables with "var" by default
b = "I am a var by default! Because we didn't specify let or const"
let b2 = "I am a let! More modern method of variable declaration. We typically use these"
const b3 = "I am a const! Like final in Java, my value won't change"

//Array just for fun - JS Arrays can hold any datatype we want
let arr = [6, "a string", false, null, {objectValue1:5, objectValue2:"something else"}]
//we can use .push() to add values to the end of an Array
arr.push("Hi I'm a new value")

console.log(arr)

console.log("===========================Testing Type Coercion")

//Let's see what JS decides for the data type for these variables

let testVar = "5" * 5
console.log("String times number is: " + testVar + " " + typeof testVar)
//number - JS assumes we're doing math. pretty much every operator besides + will result in a number

let testVar2 = "5" + 5
console.log("String plus number is: " + testVar2 + " " + typeof testVar2)
//string - JS assumes we're string concatenating

//Let's see the + operator with more than 2 values

let testVar3 = 5 + 5 + "5"
console.log("number plus number plus string is: " + testVar3 + " " + typeof testVar3)
//String, 105:    5 + 5 = 10, 10 + "5" = "105"

let testVar4 = 5 + "5" + 5
console.log("number plus string plus number is: " + testVar4 + " " + typeof testVar4)
//String, 555:   5 + "5" = "55", "55" + 5 = "555"

console.log("=======================================Truthy vs Falsy")

//testing some falsy values

if(0){
    console.log("I won't print")
}

if(""){
    console.log("I won't print either")
}

if(1){
    console.log("I will print")
}

if(1 == true){
    console.log("I will also print")
}

if(2){
    console.log("I will also also print")
}

if(2 == true){
    console.log("??????")
}

if(2 == false){
    console.log("Doesn't evaluate to false either")
}

//While any non-zero number is truthy, the boolean true evaluates to 1
//So comparing any number besides 1 to the boolean true will return false
