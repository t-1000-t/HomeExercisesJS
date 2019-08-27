function renderNoteList(list, nots) {
  const listItems = nots.map(el => createListItem(el));
  list.append(...listItems);
}
