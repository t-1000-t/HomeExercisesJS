import { Notyf } from 'notyf';
import notepad from '../model';
import { NOTIFICATION_MESSAGES } from '../../utils/constants';
import renderNoteList from '../renderNoteList';
import createListItem from '../view/createListItem';

const notyf = new Notyf();

function deleteNote({ target }) {
  console.log(target.nodeName);
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    const li = target.closest('.note-list__item');
    console.log(li);
    const { id } = li.dataset;
    li.remove();
    notepad.deleteNote(id);
    notyf.success({
      message: NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS,
      duration: 3000,
      icon: true,
    });
    console.log(notepad.deleteNote());
    notepad.deleteNote().then(() => {
      console.log('OK');
    });
  }
}

export default deleteNote;
