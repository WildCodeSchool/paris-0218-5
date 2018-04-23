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
  //Registrer user
  document.getElementById('form-register').addEventListener('submit', event => {
    event.preventDefault()
    const email = document.getElementById('register-mail').value
    const password = document.getElementById('register-psw').value
    const confirmpsw = document.getElementById('confirm-psw')
    if (password !== confirmpsw.value) {
      console.log(password, confirmpsw.value)
      confirmpsw.setCustomValidity('Your passwords do not match')
      return false
    }
    window.fetch('http://localhost:3333/registrer', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => showModal.style.display = 'none')
  })
})
