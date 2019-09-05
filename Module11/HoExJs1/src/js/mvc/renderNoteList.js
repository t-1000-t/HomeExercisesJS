import createListItem from './createListItem';

const renderNoteList = (listRef, notes) => {
  listRef.innerHTML = '';
  listRef.append(...notes.map(e => createListItem(e)));
};

console.log(renderNoteList);
export default renderNoteList;
