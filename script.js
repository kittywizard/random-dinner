const randomBtn = document.getElementById('random-btn');
const pizzaBtn = document.getElementById('pizza-btn');
const burgerBtn = document.getElementById('burger-btn');
const biryaniBtn = document.getElementById('biryani-btn');

const form = document.getElementById('generate');
const imageDiv = document.querySelector(".image");
let image = document.createElement('img');

const url = 'https://foodish-api.herokuapp.com/api/';

async function fetchCall(param) {
    let promise = await fetch(url + param);
    let json = await promise.json();

    image.src = json.image;
    image.classList.add('responsive');
    imageDiv.appendChild(image);
}

fetchCall('images/pizza');


//event listener hell.
    //is there a way to have the form be able to pick out the specific button in one call? 

pizzaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchCall('images/pizza');
});

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchCall('images/burger');
});

biryaniBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchCall('images/biryani');
});

randomBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchCall('');
});