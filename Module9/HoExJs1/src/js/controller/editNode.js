function editNote({ target }) {
  if (target.nodeName !== 'I') return;
  if (target.parentNode.dataset.action === 'edit-note') {
    console.log(target);
  }
}

refs.list.addEventListener('click', editNote);
