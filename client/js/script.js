window.addEventListener('load', () => {
  /* ***** GESTION MODAL ******* */

  const getModal = document.getElementById('connexion-button')

  const showModal = document.getElementById('popup-cnx')

  const closePopup = document.getElementById('close-popup')

  closePopup.addEventListener('click', () => {
    showModal.style.display = 'none'
  })

  getModal.addEventListener('click', () => {
    showModal.style.display = 'block'
  })

  /* ***** GESTION SEARCH RESPONSIVE **** */
  const btnSearchMobile = document.getElementById('btn-search-mobile')
  const searchInput = document.getElementById('search-wrapper')

  btnSearchMobile.addEventListener('click', () => {
    if (searchInput.classList.contains('visible')) {
      console.log('active')
      searchInput.classList.remove('visible')
    } else {
      searchInput.classList.add('visible')
    }
  })
})

document.getElementById('form-registre').addEventListener('submit', event => {
  event.preventDefault()
  const email = document.getElementById('registemail').value
  const password = document.getElementById('registpsw').value
  const confirmpsw = document.getElementById('confirmpsw').value
  if (password !== confirmpsw) {
    confirmpsw.setCustomValidity('Yours passwords do not match')
    return
  }
  window.fetch('http://localhost:3333/ins', {
    method: 'post',
    body: JSON.stringify({
      email,
      password
    })
  }).then(res => console.log(res.status))
})
