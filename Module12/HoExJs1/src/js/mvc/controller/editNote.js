import notepad from '../model';

export default function editNote({ target }) {
  if (target.textContent !== 'edit') return;
  const li = target.closest('.note-list__item');
  const title = li.querySelector('.note__title');
  const body = li.querySelector('.note__body');
  const note = notepad.findNoteById(li.dataset.id);
  console.log({ target });
  console.log(li);
  console.log(title);
  console.log(body);
  console.log(note);

  if (!title.hasAttribute('contenteditable') || !title.getAttribute('contenteditable')) {
    title.setAttribute('contenteditable', true);
    body.setAttribute('contenteditable', true);
    note.title = title.textContent;
    note.body = body.textContent;

    li.style.boxShadow = '0px 0px 10px #2196f3';
    target.style.boxShadow = '0px 0px 10px 3px #2196f3';
    target.style.backgroundColor = '#2196f3';
    target.style.borderRadius = '25px';
    return;
  }
  if (title.getAttribute('contenteditable')) {
    title.setAttribute('contenteditable', false);
    body.setAttribute('contenteditable', false);
    target.removeAttribute('style');
    li.removeAttribute('style');
    target.removeAttribute('style');
    console.log(note.title);
    console.log(title.textContent);
  }
}
