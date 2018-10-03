import { attachEvents } from './components/characters.js';
import { getCharacters } from './data/charactersData.js';

const initializeApp = () => {
    attachEvents ();
    getCharacters();
};

initializeApp ();