// function renderNoteList(list, nots) {
//   const listItems = nots.map(el => createListItem(el));
//   list.append(...listItems);
// }
const renderNoteList = (listRef, notes) => {
  listRef.innerHTML = '';
  listRef.append(...notes.map(e => createListItem(e)));
};
