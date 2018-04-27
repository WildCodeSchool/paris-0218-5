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

  // formulaire d'inscription
  document.getElementById('form-register').addEventListener('submit', event => {
    event.preventDefault()
    const email = document.getElementById('register-email').value
    const password = document.getElementById('register-psw').value
    const confirmpsw = document.getElementById('confirm-psw')

    if (password !== confirmpsw.value) {
      confirmpsw.setCustomValidity('Yours passwords do not match')
      return
    }

    window.fetch('http://localhost:3333/registrer', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
  })
})

// formulaire de connection
const messageElement = document.getElementById('message')
const signInForm = document.getElementById('form-connect')
const signOutForm = document.getElementById('sign-out-form')

const handleAuth = res => {
  const name = res.name

  signInForm.style.display = name ? 'none' : 'block'
  signOutForm.style.display = name ? 'block' : 'none'

  // handle errors
  messageElement.innerHTML = res.error || ''
}

signInForm.addEventListener('submit', e => {
  e.preventDefault()

  const credentials = {
    login: document.getElementById('logemail').value,
    password: document.getElementById('logpsw').value
  }
  window.fetch('http://localhost:3333/sign-in', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    'credentials': 'include', // Always send user credentials (cookies, basic http auth, etc..), even for cross-origin calls.
    body: JSON.stringify(credentials)
  })
    .then(res => res.json())
    .then(handleAuth)
})

signOutForm.addEventListener('submit', e => {
  e.preventDefault()

  window.fetch('http://localhost:3333/sign-out', { 'credentials': 'include' })
    .then(res => res.json())
    .then(handleAuth)
})

window.fetch('http://localhost:3333/', { 'credentials': 'include' })
  .then(res => res.json())
  .then(handleAuth)
