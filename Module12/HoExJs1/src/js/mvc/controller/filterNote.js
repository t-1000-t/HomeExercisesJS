import notepad from '../model';
import renderNoteList from '../renderNoteList';
import refs from '../../utils/constants';

const filterNote = ({ target }) => {
  renderNoteList(refs.list, notepad.filterNotesByQuery(target.value));
};

export default filterNote;
