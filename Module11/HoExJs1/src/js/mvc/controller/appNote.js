import shortid from 'shortid';
import { Notyf } from 'notyf';
import notepad from '../model';
// eslint-disable-next-line import/no-duplicates
import refs from '../../utils/constants';
import addListItem from '../view/addListItem';
// eslint-disable-next-line import/no-duplicates
import { NOTIFICATION_MESSAGES } from '../../utils/constants';

const notyf = new Notyf();

function appNote(e) {
  e.preventDefault();
  const title = refs.title.value || '';
  const body = refs.body.value || '';
  if (title.length === 0 || body.length === 0) {
    notyf.error({
      message: NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY,
      duration: 3000,
      icon: false,
    });
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
  notyf.success({
    message: NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS,
    duration: 3000,
    icon: true,
  });
}
export default appNote;
