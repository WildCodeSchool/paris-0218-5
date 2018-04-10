import { categoriesElement } from './composants/categories.js'
// import { tabFilter } from './tab-filter.js'

import { randomeal } from './composants/randomeal.js'
import { footer } from './composants/footer.js'
import { searchElement } from './composants/search.js'
import { connexion } from './composants/connexion.js'

document.getElementsByTagName('footer').innerHTML = footer
document.getElementById('search-wrapper').innerHTML = searchElement
document.getElementById('randomeal-wrapper').innerHTML = randomeal
document.getElementById('connexion-wrapper').innerHTML = connexion

const categoElement = document.getElementById('categories')

fetch('http://localhost:3333/categories')
    .then(res => res.json())
    .then(categories => {
        document.getElementById('budget').addEventListener('click', () => {
            filterCat(categories, 'budget')
        })
        document.getElementById('cuisine').addEventListener('click', () => {
            filterCat(categories)
        })
        filterCat(categories)
    })

const filterCat = (categories, cat = "cuisine") => {
    categoElement.innerHTML = categories[cat].map(categoriesElement).join('')
}



