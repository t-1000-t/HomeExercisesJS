import shortid from 'shortid';
import notepad from '../model';
import refs from '../../utils/constants';
import addListItem from '../addListItem';

function addNote(e) {
  e.preventDefault();
  const title = refs.title.value || '';
  const body = refs.body.value || '';
  if (title.length === 0 || body.length === 0) {
    alert('Необходимо заполнить все поля!');
    return;
  }
  const note = {
    id: shortid.generate(),
    title,
    body,
  };
  console.log(notepad.notes);
  notepad.saveNote(note);
  e.target.reset();
  addListItem(refs.list, note);
}

export default addNote;
