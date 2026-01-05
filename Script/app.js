const randomJokeBtn = document.getElementById("randomJokeBtn");
const jokeText = document.getElementById("jokeText");

//create an async function to get data from the dad joke API
const getData = async () => {
    const response = await fetch('https://icanhazdadjoke.com' , {
        headers: {
            'Accept': "application/json"
        }
    });
    const data = await response.json()
    //call a function to display the joke!
    displayJoke(data.joke)
}

const displayJoke = (joke) => {
jokeText.textContent = joke;
}
randomJokeBtn.addEventListener("click" , () => {

    getData();
})
//calls the function when the website is loaded!
getData();