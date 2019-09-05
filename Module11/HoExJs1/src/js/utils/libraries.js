import MicroModal from 'micromodal';


const showMicroModal = () => {
  MicroModal.init();
  MicroModal.show('note-editor-modal');
};

// const close = MicroModal.close('note-editor-modal'); // [2]

export default showMicroModal;
