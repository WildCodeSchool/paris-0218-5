/* global URLSearchParams */
import {profilPage} from './composants/user.js'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const profilElement = document.getElementById('mon-profil')

window.fetch(`http://localhost:3333/profil/${id}`)
  .then(res => res.json())
  .then(users => {
    profilElement.innerHTML = profilPage(users)

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

    const form = document.getElementById('profil-form')
    form.addEventListener('submit', e => {
      e.preventDefault()
      const email = document.getElementById('mail-input').value
      const password = document.getElementById('password-input').value
      window.fetch(`http://localhost:3333/modify-profil/${id}`, {
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
