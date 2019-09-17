import createListItem from './view/createListItem';

const renderNoteList = (Refs, notes) => {
  Refs.innerHTML = '';
  Refs.append(...notes.map(e => createListItem(e)));
  return Refs;
};


export default renderNoteList;
