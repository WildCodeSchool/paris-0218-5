import { showModal } from './popup.js'
import { isConnected, isNotConnected } from './composants/connexion-btn.js'

export const scriptComponentsConnexion = () => {
  const btnConnexion = document.getElementById('connexion-button')
  window.fetch('http://localhost:3333/session', { credentials: 'include' })
    .then(res => res.json())
    .then(user => {
      const connected = user.name ? true : false
      connected
      ? btnConnexion.innerHTML = isConnected(user)
      : btnConnexion.innerHTML = isNotConnected

      if (!connected) {
        btnConnexion.addEventListener('click', showModal)
      } else {
        document.getElementById('sign-out').addEventListener('click', () => {
          window.fetch('http://localhost:3333/sign-out', { 'credentials': 'include' })
            .then(res => res.json())
            .then(window.location.reload())
        })
      }
    })
}
