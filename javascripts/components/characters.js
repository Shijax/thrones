import { printToDom } from "../helpers/util.js";

const characters = [
    {id: 'character1', name: 'Eddard Stark', house: 'Stark', imgUrl: 'yaddayadda'},
    {id: 'character2', name: 'Catelyn Stark', house: 'Stark', imgUrl: 'yaddayadda'},
    {id: 'character3', name: 'Sansa Stark', house: 'Stark', imgUrl: 'yaddayadda'},
    {id: 'character4', name: 'Arya Stark', house: 'Stark', imgUrl: 'yaddayadda'}
];

const characterBuilder = () => {
    let domString = '';
    characters.forEach((character) => {
        domString += `<h1>${character.name}<h1>`;
    });
    printToDom(domString);
};

const attachEvents = () => {
   characterBuilder();
}

export {attachEvents}