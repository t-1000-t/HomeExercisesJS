function renderNoteList(list, nots) {
  const listItems = nots.map(el => createListItem(el));
  console.log(listItems);
  list.append(...listItems);
}
