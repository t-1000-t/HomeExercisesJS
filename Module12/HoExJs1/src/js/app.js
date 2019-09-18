import showMicroModal from './utils/libraries';
import refs from './utils/constants';
import deleteNote from './mvc/controller/deleteNote';
import editNode from './mvc/controller/editNote';
import filterNote from './mvc/controller/filterNote';
import appNote from './mvc/controller/appNote';
import getLocStor from './mvc/controller/getLocStor';
import renderNoteList from './mvc/renderNoteList';
import 'notyf/notyf.min.css';


refs.form.addEventListener('submit', appNote);
refs.addButton.addEventListener('click', showMicroModal);
refs.list.addEventListener('click', deleteNote);
refs.list.addEventListener('click', editNode);
refs.inputFilter.addEventListener('input', filterNote);


renderNoteList(refs.list, getLocStor());
