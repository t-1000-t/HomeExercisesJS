import notepad from '../model';

export default function getLocStor() {
  if (localStorage.locStor) {
    return notepad.getLocalStorage();
  }
  return notepad.notes;
}
