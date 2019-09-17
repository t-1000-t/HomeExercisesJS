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
    });
  });
};

// Notepad.prototype.saveNote = function (obj) {
//   if (notepad.priority) {
//     this.notes.push(obj);
//   } else {
//     obj.priority = PRIORITY_TYPES.LOW;
//     this.notes.push(obj);
//   }
// };

Notepad.prototype.updateNotePriority = function (id, priority) {
  return new Promise(() => {
    setTimeout(() => {
      res = this.notes.find(note => note.id === id);
      res.priority = priority;
      return res;
    });
  });
};

Notepad.prototype.filterNotesByQuery = function (val) {
  return this.notes.filter(el => el.title.toLowerCase().includes(val.toLowerCase())
    || el.body.toLowerCase().includes(val.toLowerCase()));
};


// Notepad.prototype.filterNotesByQuery = function (query) {
//   newArr = [];
//   for (const value of this.notes) {
//     const titleLower = value.title.toLowerCase();
//     const bodyLower = value.body.toLowerCase();
//     if (titleLower.includes(query) || bodyLower.includes(query)) {
//       newArr.push(value);
//     }
//   }
//   return newArr;
// };

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
    });
  });
};

Notepad.prototype.addLocalStorage = function () {
  localStorage.setItem('arrAll', 123);
};

export default Notepad;
