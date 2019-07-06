this.notes = [1, 2, 3, 4, 5];
console.log(this.notes);
function deleteNote(id) {
  if (this.notes.indexOf(id)) {
    return delete this.notes(id);
  }
  /*
   * Удаляет заметку по идентификатору из массива notes
   *
   * Принимает: идентификатор заметки
   * Возвращает: ничего
   */
}

console.log();
console.log(deleteNote(3));
