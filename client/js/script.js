/****** GESTION MODAL ********/

const getModal = document.getElementById('connexion-wrapper')

const showModal = document.getElementById('popup-cnx')

const closePopup = document.getElementById('close-popup')

closePopup.addEventListener('click', () => {
  showModal.style.display = 'none'
})

getModal.addEventListener('click', () => {
  showModal.style.display = 'block'
})

/****** GESTION SEARCH RESPONSIVE *****/
 document.getElementById('btn-search-mobile').addEventListener
