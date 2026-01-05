const randomJokeBtn = document.getElementById("randomJokeBtn");
const jokeText = document.getElementById("jokeText");

//create an async function to get data from the dad joke API

async function getData() {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: 'GET',
        headers: {
            'Accept': "application/json"
        }
    });
    const data = await response.json()
    console.log(data.joke);
    //call a function to display the joke!
    displayJoke(data.joke)
}

const displayJoke = (joke) => {
jokeText.textContent = joke;
}
randomJokeBtn.addEventListener("click" , () => {

    getData();
})

getData();