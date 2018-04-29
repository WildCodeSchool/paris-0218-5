import { scriptPopup } from './popup.js'
import { isConnected, isNotConnected } from './composants/connexion-btn.js'

export const scriptComponentsConnexion = () => {
  window.fetch('http://localhost:3333/session', { credentials: 'include' })
    .then(res => res.json())
    .then(user => {
      const connected = user.name ? isConnected(user) : isNotConnected
      document.getElementById('connexion-button').innerHTML = connected

      if (connected === isNotConnected) {
        scriptPopup()
      } else {
        document.getElementById('sign-out').addEventListener('click', () => {
          window.fetch('http://localhost:3333/sign-out', { 'credentials': 'include' })
            .then(res => res.json())
            .then(window.location.reload())
        })
      }
    })
}
