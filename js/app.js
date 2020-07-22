const select = document.getElementById('breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch('https://dog.ceo/api/breeds/list')
    .then(response => response.json())
    .then(data => generateList(data.message))

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => generateImage(data.message))

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateList(data) {
    const options = data.map(breed => {
        return `<option value=${breed}>${breed}</option>`
    }).join("");
    select.innerHTML = options;
}

function generateImage(data) {
    const html = `
        <img src = ${data} alt>
        <p>Click to view the images of ${select.value}s</p>
    `;
    card.innerHTML = html;
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

card.addEventListener('click', () => { })

// ------------------------------------------
//  POST DATA
// ------------------------------------------

