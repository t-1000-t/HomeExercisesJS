function Notepad(notes = []) {
  this.notes = notes;
}

Notepad.prototype.getNotes = function () {
  return this.notes;
};

Notepad.prototype.saveNote = function (obj) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(this.notes.push(obj));
    }, 0.0005);
  });
};

Notepad.prototype.updateNotePriority = function (id, priority) {
  return new Promise(() => {
    setTimeout(() => {
      res = this.notes.find(note => note.id === id);
      res.priority = priority;
      return res;
    }, 0.0005);
  });
};

Notepad.prototype.filterNotesByQuery = function (val) {
  return this.notes.filter(el => el.title.toLowerCase().includes(val.toLowerCase())
    || el.body.toLowerCase().includes(val.toLowerCase()));
};

Notepad.prototype.filterNotesByPriority = function (priority) {
  return this.notes.filter(el => el.priority === priority);
};

Notepad.prototype.updateNoteContent = function (id, updatedContent) {
  res = this.notes.find(note => note.id === id);
  Object.assign(res, updatedContent);
  return res;
};

Notepad.prototype.findNoteById = function (id) {
  return this.notes.find(el => el.id === id);
};

Notepad.prototype.deleteNote = function (id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(this.notes.splice(this.notes.findIndex(el => el.id === id), 1));
    }, 0.0005);
  });
};

Notepad.prototype.saveLocalStorage = function (val) {
  console.log(val);
  window.localStorage.setItem('locStor', JSON.stringify(val));
};

Notepad.prototype.getLocalStorage = function () {
  const myStorJSON = window.localStorage.getItem('locStor');
  const myStore = JSON.parse(myStorJSON);
  return myStore;
};

export default Notepad;
