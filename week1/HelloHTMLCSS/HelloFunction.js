//First, we'll make a basic named function
//We can call functions before they're declared due to something called HOISTING
helloWorld()

function helloWorld(){
    console.log("Hello World")
}

//anon(500) <- Anonymous functions are NOT HOISTED! So we can't invoke them before declaration

//Here's an anonymous function - it has no name but we can assign it to a variable
anon = function(var1){
    console.log("Hi I'm an anonymous function stored in a variable")
    console.log("My variable is: " + var1)
}

anon(500)

//Arrow functions are like Java lambdas - they take a value and execute some functionality
//(value(s)) => {some expression}
let arrowFunction = (var1, var2) => {
    //Let's test out == vs === just for fun
    console.log("Does " + var1 + " === " + var2 + "?")
    console.log(var1 === var2)
}

arrowFunction(10, 10)
arrowFunction("10", 10)
arrowFunction(1, true)

//Callback functions - a function that gets passed as a parameter to another function
function f1(x){
    console.log("Inside function 1")
    console.log("The value passed in from function 2 is: " + x)
    console.log("End of function 1")
}

function f2(x, someFunction){
    console.log("Inside function 2")
    someFunction(x) //calling f1 and giving it whatever parameter was sent in
    console.log("End of function 2") 
}

//invoke f2, giving it f1 as a parameter (this makes f1 the callback function in this case)

f2(3000, f1)

console.log("=================================Global Scope")

//anything that is globally scoped can be accessed anywhere in our script (the JS file)
console.log(a)

//vars are globally scoped (they're HOISTED) - 
//all named functions and vars are hoisted and globally scoped
var a = 5

console.log(a) //a, of course, is visible and defined after its declaration

//Let's attempt the same thing with a let

//console.log(b) <- This is ILLEGAL! lets and consts are NOT HOISTED

let b = 5

//this is actually a good thing imo - we usually don't want to have access to undefined variables


console.log("=================================Local Scope (block scope vs function scope)")

//block scope----/

//any variable inside a non-function block is block scoped
if(true){
    var c = "I'm a var in a block"
    let d = "I'm a let in a block"
}

console.log(c) //vars are globally scoped no matter what. so they're visible outside of a block
//console.log(d) //lets and consts are NOT visible outside of any block they're defined in

//function scope----/

//any variable defined in a function is function scoped
function scopeTest(){
    var e = "I'm a var in a function - function scoped"
}

console.log(e)

/* The main difference between block and function scope

-vars are not visible outside of a function they're defined in
-BUT... vars ARE visible outside of any non-function block they're defined in

-lets and consts are only visible within the blocks they're defined in, period

Since we only really use let and const these days...
we don't have to worry as much about weird var behavior

also, functions behave similarly to vars in that they globally scoped and hoisted
but I actually like that functions are globally scoped and hoisted */