import { categoriesElement } from './composants/categories.js'
// import { tabFilter } from './tab-filter.js'

    import { searchElement } from './composants/search.js'
    import { randomeal } from './composants/randomeal.js'
    import { connexion } from './composants/connexion.js'

    document.querySelector('#search-wrapper').innerHTML = searchElement
    document.querySelector('#randomeal-wrapper').innerHTML = randomeal
    document.querySelector('#connexion-wrapper').innerHTML = connexion
const categoElement = document.getElementById('categories')

fetch('http://localhost:3333/categories')
    .then(res => res.json())
    .then(categories => {
        document.querySelector('#budget').addEventListener('click', () =>{
            filterCat(categories, 'budget')
        })
        document.querySelector('#cuisine').addEventListener('click', () =>{
            filterCat(categories)
        })
        filterCat(categories)
    })

const filterCat = (categories, cat = "cuisine") => {
    categoElement.innerHTML = categories[cat].map(categoriesElement).join('')
}



