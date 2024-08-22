//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import { pastries } from './pastryArray'

for (let p of pastries) {
    let p_thumb = document.getElementById('p' + p.id)
    p_thumb.innerHTML = `
        <div class="card">
            <img src="${p.image}" alt="${p.title}">
            <div class="card-header"> ${p.title} </div>
        </div>
    `
    p_thumb.onclick = function () {
        displayImage(p)
    }
}

let mainPastry_image = document.querySelector(".mainPastry")

function displayImage(image) {
    mainPastry_image.innerHTML = `
        <div class="card">
            <img src="${image.image}" class="card-img-top" alt="${image.title}">
            <div class="card-body">
                <h3 class="card-title">${image.title}</h3>
                <p class="card-text">${image.description}</p>
            </div>
            <div class="card-header"><p class="mb-0"><strong>Price: </strong>${image.cost}</p></div>
        </div>
    </div>
    `
}