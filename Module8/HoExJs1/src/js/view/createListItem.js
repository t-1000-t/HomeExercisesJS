const createElement = (tag, className, text = null, id = null) => {
  const element = document.createElement(tag);
  className.split(' ').map(elem => element.classList.add('elem'));
  if (text) {
    element.createElement('p');
    element.textContent = `${text}`;
  }
  if (id) {
    element.setAttribute('data-id', id);
  }
  return element;
};

const createButton = (action, text) => {
  const button = createElement('button', 'action');
  button.setAttribute('data-action', action);
  const i = createElement('i', 'material-icons action__icon', text);
  button.append(i);
  return button;
};

const createListItem = (id, title, body, priority) => {
  const li = createElement('li', 'note-list__item', null, id);
  const note = createElement('div', 'note');
  li.append(note);
  const note__content = createElement('div', 'note__content');
  note__content.append(createElement('h2', 'note__title', title));
  note__content.append(createElement('p', 'note__body', body));
  const note__footer = createElement('footer', 'note__footer');
  const note__sectionL = createElement('section', 'note__section');
  const note__sectionR = createElement('section', 'note__section');

  note__sectionL.append(createButton(
    NOTE_ACTIONS.INCREASE_PRIORITY,
    ICON_TYPES.ARROW_DOWN,
  ));

  note__sectionL.append(createButton(
    NOTE_ACTIONS.INCREASE_PRIORITY,
    ICON_TYPES.ARROW_UP,
  ));

  note__sectionL.append(createElement(
    'span',
    'note_priority',
    `Priority: ${priority}`,
  ));
};
