import { footer } from './composants/footer.js'
import { header } from './composants/header.js'
import { popup } from './composants/popup.js'

window.fetch('http://localhost:3333/session', { credentials: 'include' })
  .then(res => res.json())
  .then(user => {
    console.log(user)
    const isConnected = user.name ? user.name : 'Connexion'
    console.log(isConnected);
    document.querySelector('header').innerHTML = header(isConnected)
  })

//const connexion = name ? `Hi ${name}` : 'connexion'

document.querySelector('footer').innerHTML = footer
//document.querySelector('header').innerHTML = header({ isConnected: 'loading' })
document.getElementById('popup-cnx').innerHTML = popup
