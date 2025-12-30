const createPostbtn = document.querySelector('#create-post-btn');
const createPostModal = document.querySelector('#create-post-modal');
const closeModalBtn = document.querySelector('#close-modal-btn');
const createPostForm = document.querySelector('#create-post-form');

createPostbtn.addEventListener('click', () => {
  createPostModal.classList.add('show');
});

const handleClosingModal = () => {
  createPostForm.reset();
  createPostModal.classList.remove('show');
};

createPostModal.addEventListener('click', (e) => {
  if (e.target === createPostModal) {
    handleClosingModal();
  }
});
closeModalBtn.addEventListener('click', handleClosingModal);
