import { searchElement } from './composants/search.js'
import { randomeal } from './composants/randomeal.js'
import { connexion } from './composants/connexion.js'
import { categoriesElement } from './composants/categories.js'

document.querySelector('.search-wrapper').innerHTML = searchElement
document.querySelector('.randomeal-wrapper').innerHTML = randomeal
document.querySelector('.connexion-wrapper').innerHTML = connexion

fetch('http://localhost:3333/catego')
    .then(res => res.json())
    .then(catego => {
        const categoElement = document.getElementById('categories')
        categoElement.innerHTML = catego.map(categoriesElement).join('')
    })