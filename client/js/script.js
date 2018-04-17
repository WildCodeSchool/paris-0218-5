window.addEventListener('load', () => {
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
const  btnSearchMobile = document.getElementById('btn-search-mobile')
const searchInput = document.getElementById('search-wrapper')

btnSearchMobile.addEventListener('click', () => {
  if(searchInput.classList.contains('visible')){
    console.log('active')
    searchInput.classList.remove('visible')
  }else{
    searchInput.classList.add('visible')
  }
 })
})
