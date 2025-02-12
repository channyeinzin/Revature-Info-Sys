//PokeAPI base URL - making a variable that holds the base URL to reach pokeAPI. Good for cleaner/standardized code
const url = "https://pokeapi.co/api/v2/pokemon/"

//DOM selection for the elements we'll fill with data after the fetch
const pokename = document.getElementById("pokename")
const poketype = document.getElementById("poketype")
const pokenum = document.getElementById("pokenum")
const pokepic = document.getElementById("pokepic")

//when the user clicks the button, take their input and use it in the fetchData function
document.getElementById("btn").onclick = fetchData


/* This function will return some Pokemon data from PokeAPI 
   It will use a fetch request to return a promise object
   The promise object will get filled with pokemon data OR it will fail */
async function fetchData(){

    //First, we need to gather the user input from the input box
    const userInput = document.getElementById("userInput").value

    console.log(userInput) //Just to see the value

    //Now, we can use the fetch() function to send a GET request to pokeAPI
    //(Fetch sends a GET default by the way)
    try{
        const response = await fetch(url + userInput)

        if(!response.ok) {
            throw new Error("It got away!")
        }

        //turn the response data into a JS object 
        const data = await response.json()

        console.log(data) //just to see the data

        renderHTML(data) //call the function that puts the data on the page

    } catch {
        //If the user enters a non-valid number, we will throw an error. Let's just tell the user they messed up in an alert
        alert("Pokemon with id " + userInput + " doesn't exist")
    } finally {
        //Finally blocks are good for cleanup. In this case we'll wipe the pokemon data after 3 seconds with setTimeout()
        setTimeout(() => {
            pokename.innerText = " "
            poketype.innerText = " "
            pokenum.innerText = " "
            pokepic.setAttribute("src", " ")
        }, 3000) //3000 milliseconds = 3 seconds
    }

} //end of fetchData

//This function will take in the JS data as a parameter and render it on the page
function renderHTML(data){

    //populate the table with our pokemon data (change the innertext of the dom selections)
    pokename.innerText = data.name

    //since a pokemon can have multiple types, this helps us account for all of them
    poketype.innerText = data.types.map(item => item.type.name).join(', ')
    //^The map function will provide an array of values, and we're using to append pokemon types to the poketype <td>
    //.join(', ') will add a comma delimiter after element except the last one, AND turn the value into a string

    pokenum.innerText = data.id

    //pokepic is an <img> we need to set the src attribute to get the pokemon's picture rendered
    pokepic.setAttribute("src", data.sprites.front_default)

    //add the pokemon image to the collection at the bottom
    //this is a great example of a use case for .appendChild()
    const img = document.createElement("img")
    img.src = data.sprites.front_default

    document.getElementById("pokeCollection").appendChild(img)

}