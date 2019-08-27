const filterNote = ({ target }) => {
  renderNoteList(refs.list, notepad.filterNotesByQuery(target.value));
  console.log(target.value);
};

refs.inputFilter.addEventListener('input', filterNote);

// const filterNote = (e) => {
//   e.preventDefault();

//   const { value } = e.target;
//   const filtered = notepad.filterNotesByQuery(value);

//   const refreshList = (data) => {
//     const notes = data || notepad.notes;
//     // const htmlNotesList = Handlebars.compile(template)({ notes });
//     refs.list.innerHTML = '';
//     refs.list.insertAdjacentHTML('afterbegin', htmlNotesList);
//   };
//   refreshList(filtered);
// };
