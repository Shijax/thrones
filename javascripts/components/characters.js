import { printToDom } from "../helpers/util.js";

const characters = [
    { id: 'character1', name: 'Eddard Stark', house: 'Stark', imgUrl: '../images/ned.jpg' },
    { id: 'character2', name: 'Catelyn Stark', house: 'Stark', imgUrl: '../images/catelyn.jpg' },
    { id: 'character3', name: 'Sansa Stark', house: 'Stark', imgUrl: '../images/sansa.jpg' },
    { id: 'character4', name: 'Arya Stark', house: 'Stark', imgUrl: '../images/arya.jpg' }
];

const characterBuilder = () => {
    let domString = '';
    characters.forEach((character) => {
        domString += `<div class="col-2 character">`
        domString += `<div class="card">`;
        domString += `<img class="card-img-top" src="${character.imgUrl}" alt="${character.name}">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${character.name}</h5>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    });
    printToDom(domString);
};

const attachEvents = () => {
    characterBuilder();
}

export { attachEvents }