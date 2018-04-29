import { footer } from './composants/footer.js'
import { header } from './composants/header.js'
import { popup } from './composants/popup.js'
import { scriptComponentsConnexion } from './script-connexion.js'

scriptComponentsConnexion()

const date = new Date().getFullYear()

document.querySelector('footer').innerHTML = footer(date)
document.querySelector('header').innerHTML = header
document.getElementById('popup-cnx').innerHTML = popup
