// import { initialNotes } from './db';

// import deleteNote from './controller/deleteNote';
// import editNote from './controller/editNode';
// import filterNote from './controller/filterNote';

import refreshList from './mvc/view';
import showMicroModal from './utils/libraries';
import refs from './utils/constants';
import deleteNote from './mvc/controller/deleteNote';
import editNode from './mvc/controller/editNote';
import filterNote from './mvc/controller/filterNote';
import appNote from './mvc/controller/appNote';
import notepad from './mvc/model';
import renderNoteList from './mvc/renderNoteList';


refreshList();
refs.addButton.addEventListener('click', showMicroModal);
refs.list.addEventListener('click', deleteNote);
refs.form.addEventListener('submit', appNote);
refs.list.addEventListener('click', editNode);
refs.inputFilter.addEventListener('input', filterNote);


renderNoteList(refs.list, notepad.notes);


export default notepad;
