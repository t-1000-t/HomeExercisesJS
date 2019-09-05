import Handlebars from 'handlebars';

import template from '../templates/note';
import { notepad } from './model';
import { refs } from '../utils/constants';


const array = notepad.notes;

console.log(array);
console.log(template);

const htmlNotesList = Handlebars.compile(template)({ array });
refs.list.insertAdjacentHTML('afterbegin', htmlNotesList);
