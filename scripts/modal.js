const MODAL_OPENED_CLASS = 'modal-opened'

/* Application Modal */

const applicationModal = document.getElementById('application-modal');

const applicationCloseButton = document.querySelector('.application-modal-close-button');
const applicationOpenButton = document.getElementById('application-modal-open-button');

applicationCloseButton.addEventListener('click', () => {
  document.body.classList.remove('scrollOff')

  applicationModal.classList.remove(MODAL_OPENED_CLASS);
})

applicationOpenButton.addEventListener('click', () => {
  document.body.classList.add('scrollOff')

  applicationModal.classList.add(MODAL_OPENED_CLASS);
})

/* Expectation Modal */

const expectationModal = document.getElementById('expectation-modal');

const expectationOpenButton = document.querySelector('#expectation-modal-open-button');
const expectationCloseButton = document.querySelector('.expectation-modal-close-button');

expectationOpenButton.addEventListener('click', () => {
  document.body.classList.add('scrollOff')

  expectationModal.classList.add(MODAL_OPENED_CLASS)
  applicationModal.classList.remove(MODAL_OPENED_CLASS);
})

expectationCloseButton.addEventListener('click', () => {
  document.body.classList.remove('scrollOff')

  expectationModal.classList.remove(MODAL_OPENED_CLASS)
})

const modals = [expectationModal, applicationModal]

/* Закрытие модального окна, если клик вне контейнера */

window.addEventListener('click', (event) => {

  if (modals) {

    modals.forEach(( modal ) => {
      if (event.target == modal) {
        document.body.classList.remove('scrollOff')

        modal.classList.remove(MODAL_OPENED_CLASS)
      };
    })

  }

})
