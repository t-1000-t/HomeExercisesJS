import { Notyf } from 'notyf';
import notepad from '../model';
import { NOTIFICATION_MESSAGES } from '../../utils/constants';


const notyf = new Notyf();


function deleteNote({ target }) {
  // console.log(target.nodeName);
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    const li = target.closest('.note-list__item');
    // console.log(li);
    const { id } = li.dataset;
    li.remove();
    notepad.deleteNote(id).then(() => {
      notepad.saveLocalStorage(notepad.notes);
    });
    notyf.success({
      message: NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS,
      duration: 3000,
      icon: true,
    });
  }
}

export default deleteNote;
