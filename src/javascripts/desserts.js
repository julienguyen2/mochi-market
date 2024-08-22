//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import { desserts } from './dessertArray'

for (let d of desserts) {
    let d_thumb = document.getElementById('d' + d.id)
    d_thumb.innerHTML = `
        <div class="card">
            <img src="${d.image}" alt="${d.title}">
            <div class="card-header"> ${d.title} </div>
        </div>
    `
    d_thumb.onclick = function () {
        displayImage(d)
    }
}

let mainDessert_image = document.querySelector(".mainDessert")

function displayImage(image) {
    mainDessert_image.innerHTML = `
        <div class="card">
            <img src="${image.image}" class="card-img-top" alt="${image.title}">
            <div class="card-body">
                <h3 class="card-title">${image.title}</h3>
                <p class="card-text">${image.description}</p>
            </div>
            <div class="card-header" id="card-header-2"><p class="mb-0"><strong>Price: </strong>${image.cost}</p></div>
        </div>
    </div>
    `
}