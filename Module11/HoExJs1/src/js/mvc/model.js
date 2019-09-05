import INIT_NOTES from '../../assets/notes.json';
import Notepad from '../components/Notepad';

console.log(Notepad);

const notepad = new Notepad(INIT_NOTES);

export { notepad };
