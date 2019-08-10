function Notepad(notes = []) {
  this.notes = notes;
}

Notepad.prototype.getNotes = function () {
  return this.notes;
};

Notepad.prototype.saveNote = function (obj) {
  this.notes.push(obj);
};

Notepad.prototype.updateNotePriority = function (id, priority) {
  res = this.notes.find(note => note.id === id);
  res.priority = priority;
  return res;
};

Notepad.prototype.filterNotesByQuery = function (query) {
  newArr = [];
  for (const value of this.notes) {
    const titleLower = value.title.toLowerCase();
    const bodyLower = value.body.toLowerCase();
    if (titleLower.includes(query) || bodyLower.includes(query)) {
      newArr.push(value);
    }
  }
  return newArr;
};

Notepad.prototype.filterNotesByPriority = function (priority) {
  return this.notes.filter(el => el.priority === priority);
};

Notepad.prototype.updateNoteContent = function (id, updatedContent) {
  res = this.notes.find(note => note.id === id);
  Object.assign(res, updatedContent);
  return res;
};

Notepad.prototype.deleteNote = function (id) {
  this.notes.splice(this.notes.findIndex(el => el.id === id), 1);
};
