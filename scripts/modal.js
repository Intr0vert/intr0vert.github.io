/* Expectation Modal */

const expectationModal = document.getElementById('expectation-modal');

const expectationCloseButton = document.querySelector('.expectation-modal-close');

expectationCloseButton.addEventListener('click', () => {
  expectationModal.classList.remove('modal-opened')
})


/* Application Modal */

const applicationModal = document.getElementById('application-modal');

const applicationCloseButton = document.querySelector('.application-modal-close');

applicationCloseButton.addEventListener('click', () => {
  applicationModal.classList.remove('modal-opened')
})

const modals = [expectationModal, applicationModal]

/* Закрытие модального окна, если клик вне контейнера */

window.addEventListener('click', (event) => {

  if (modals) {

    modals.forEach(( modal ) => {
      if (event.target == modal)  modal.classList.remove('modal-opened');
    })

  }

})
