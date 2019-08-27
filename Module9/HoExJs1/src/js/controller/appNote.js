function addNote(e) {
  e.preventDefault();
  const title = refs.title.value || '';
  const body = refs.body.value || '';
  if (title.length === 0 || body.length === 0) {
    alert('Необходимо заполнить все поля!');
    return;
  }
  const note = {
    id: generateUniqueId(),
    title,
    body,
  };
  console.log(notepad.notes);
  notepad.saveNote(note);
  e.target.reset();
  addListItem(refs.list, note);
}

refs.form.addEventListener('submit', addNote);
