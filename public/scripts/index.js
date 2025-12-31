const createMessagebtn = document.querySelector('#create-message-btn');
const createMessageModal = document.querySelector('#create-message-modal');
const closeModalBtn = document.querySelector('#close-modal-btn');
const createMessageForm = document.querySelector('#create-message-form');

createMessagebtn.addEventListener('click', () => {
  createMessageModal.classList.add('show');
});

const handleClosingModal = () => {
  createMessageForm.reset();
  createMessageModal.classList.remove('show');
};

createMessageModal.addEventListener('click', (e) => {
  if (e.target === createMessageModal) {
    handleClosingModal();
  }
});
closeModalBtn.addEventListener('click', handleClosingModal);
