
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
    const modify = document.getElementById('modify')
    modify.addEventListener('click', () => {
      const inputs = profilElement.querySelectorAll('input')
      for (let input of inputs) {
        input.removeAttribute('disabled')
      }
    })
    const form = document.getElementById('profil-form')
    form.addEventListener('submit', e => {
      e.preventDefault()
      const email = document.getElementById('mail-input').value
      const password = document.getElementById('password-input').value
      console.log(email)
      console.log(password)

      window.fetch(`http://localhost:3333/profil/${id}`, {
        method: 'put',
        body: JSON.stringify({
          id: id,
          email: email,
          password: password
        })
      }).then(res => res.ok

        ? console.log('do stuff')
        : console.log('g pas pu')
      )
    })
  })
