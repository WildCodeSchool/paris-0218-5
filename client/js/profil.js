/* global URLSearchParams */
import {profilPage} from './composants/user.js'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const profilElement = document.getElementById('mon-profil')

window.fetch(`http://localhost:3333/profil/${id}`)
  .then(res => res.json())
  .then(users => {
    profilElement.innerHTML = profilPage(users)
  })
  .then(() => {
    const validate = document.getElementById('valid')
    validate.disabled = true
    const modify = document.getElementById('modify')
    modify.addEventListener('click', () => {
      const inputs = profilElement.querySelectorAll('input')
      for (let input of inputs) {
        input.removeAttribute('disabled')
      }
      modify.disabled = true
      validate.disabled = false
    })
  })

/*
  const validate = document.getElementById('valid')

  /* ****** GESTION MODAL *******
export const scriptPopup = () => {
  const getModal = document.getElementById('open-popup')
  const showModal = document.getElementById('popup-cnx')

  getModal.addEventListener('click', () => {
    showModal.style.display = 'block'
    const closePopup = document.getElementById('close-popup')
    closePopup.addEventListener('click', () => {
      showModal.style.display = 'none'
    })
  })

  quand on clic sur modifyle bouton modify = disabled
  le bouton valider = able
*/
