import {
  profilPage
} from './composants/user.js'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')
const profilElement = document.getElementById('monProfil')


fetch(`http://localhost:3333/profil/${id}`)
  .then(res => res.json())
  .then(users => {
    profilElement.innerHTML = profilPage(users)
  })
  .then(() => {
    const modify = document.getElementById('modify')
    modify.addEventListener('click', () => {
      const inputs = profilElement.querySelectorAll('input')
      console.log(inputs)
      for (let input of inputs) {
        input.removeAttribute('disabled')
        }
    })
  })

