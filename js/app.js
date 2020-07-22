const select = document.getElementById('breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        .then(data => data.json())
        .catch(err => console.log(err))
}

fetchData('https://dog.ceo/api/breeds/list')
    .then(data => generateList(data.message))

fetchData('https://dog.ceo/api/breeds/image/random')
    .then(data => generateImage(data.message))

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateList(data) {
    const options = data.map(breed =>
        `<option value=${breed}>${breed}</option>`
    ).join("");
    select.innerHTML = options;
}

function generateImage(data) {
    const html = `
        <img src = ${data} alt>
        <p>Click to view the images of ${select.value}s</p>
    `;
    card.innerHTML = html;
}

function fetchBreedImage() {
    const breed = select.value;
    const img = card.querySelector('img');
    const p = card.querySelector('p');
    
    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(data => {
            img.src = data.message;
            img.alt = breed;
            p.textContent = `Click to view more ${breed}s`;
        })
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage);

// ------------------------------------------
//  POST DATA
// ------------------------------------------

