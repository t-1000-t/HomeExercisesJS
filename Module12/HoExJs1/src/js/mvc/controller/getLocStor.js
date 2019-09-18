import notepad from '../model';

function getLocStor() {
  if (localStorage.locStor) {
    return notepad.getLocalStorage();
  }
  return notepad.notes;
}

export default getLocStor;
