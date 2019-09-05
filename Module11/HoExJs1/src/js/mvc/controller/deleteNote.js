import notepad from '../model';

function deleteNote({ target }) {
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'delete-note') {
    const li = target.closest('.note-list__item');
    console.log(li);
    const { id } = li.dataset;
    li.remove();
    notepad.deleteNote(id);
  }
}

// refs.list.addEventListener('click', deleteNote);

export default deleteNote;
