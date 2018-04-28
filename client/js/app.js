import { footer } from './composants/footer.js'
import { header } from './composants/header.js'
import { isConnected, isNotConnected } from './composants/connexion-btn.js'
import { popup } from './composants/popup.js'
import { scriptPopup } from './popup.js'

window.fetch('http://localhost:3333/session', { credentials: 'include' })
  .then(res => res.json())
  .then(user => {

    let connected = user.name ? isConnected (user) : isNotConnected
    document.getElementById('connexion-button').innerHTML = connected

    if(connected === isNotConnected){
      scriptPopup()
    }else{
      document.getElementById('sign-out').addEventListener('click', () => {
        window.fetch('http://localhost:3333/sign-out', { 'credentials': 'include' })
          .then(res => res.json())
          .then(location.reload())
      })
    }
  })


const date = new Date().getFullYear()
document.querySelector('footer').innerHTML = footer(date)
document.querySelector('header').innerHTML = header
document.getElementById('popup-cnx').innerHTML = popup
