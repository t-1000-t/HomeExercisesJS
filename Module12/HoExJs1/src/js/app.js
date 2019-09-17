import showMicroModal from './utils/libraries';
import refs from './utils/constants';
import deleteNote from './mvc/controller/deleteNote';
import addLocalStorage from './mvc/controller/addLocalStorage';
import editNode from './mvc/controller/editNote';
import filterNote from './mvc/controller/filterNote';
import appNote from './mvc/controller/appNote';
import notepad from './mvc/model';
import renderNoteList from './mvc/renderNoteList';
import 'notyf/notyf.min.css';


refs.form.addEventListener('submit', appNote);
refs.addButton.addEventListener('click', showMicroModal);
refs.list.addEventListener('click', deleteNote);
refs.list.addEventListener('click', editNode);
refs.list.addEventListener('click', addLocalStorage);
refs.inputFilter.addEventListener('input', filterNote);


renderNoteList(refs.list, notepad.notes);
