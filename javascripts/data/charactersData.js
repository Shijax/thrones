// import { characterBuilder } from './components/characters.js'
import { setCharacters, characterBuilder }from '../components/characters.js'

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    characterBuilder();
}

function executeThisCodeIfXhrFails () {
    console.log('You make baby Jesus cry!');
}

const getCharacters = () => {
 let myRequest = new XMLHttpRequest();
 myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
 myRequest.addEventListener('error', executeThisCodeIfXhrFails);
 myRequest.open('GET', './db/characters.json');
 myRequest.send();
};

export {getCharacters};