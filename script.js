const btn = document.getElementById('btn');
const form = document.getElementById('generate');
const url = 'https://foodish-api.herokuapp.com/api/';

btn.addEventListener('click', (e) => {
    e.preventDefault();

    generateFood();
});

async function generateFood() {
    let promise = await fetch(url);
    let json = promise.json();

    console.log(json);
    //display image

    //is there more info to go with the pictures? nope

    //potentially hide old button / make new one? 
}