import { categoriesElement } from './composants/categories.js'
import { restaurantElement } from './composants/restaurant.js'

const categoElement = document.getElementById('categories')

//  Affichage des catégories en fonction des boutons dans l'accueil
window.fetch('http://localhost:3333/categories')
  .then(res => res.json())
  .then(categories => {
    document.getElementById('budget').addEventListener('click', () => {
      filterCat(categories, 'budget')
    })
    document.getElementById('cuisine').addEventListener('click', () => {
      filterCat(categories)
    })
    document.getElementById('top').addEventListener('click', () => {
      displayTop()
      console.log('object')
    })
    filterCat(categories)
  })

const filterCat = (categories, cat = 'cuisine') => {
  categoElement.innerHTML = categories[cat].map(categoriesElement).join('')
}
// classement des restaurants par plus likes et injection
const displayTop = () => {
  window.fetch('http://localhost:3333/restaurants')
    .then(res => res.json())
    .then(restaurants => {
      let bestrestau = restaurants.sort(compareNombres)
      bestrestau = bestrestau.slice(0, 12)
      categoElement.innerHTML = bestrestau.map(restaurantElement).join('')
    })
}
const compareNombres = (a, b) => {
  return b.like.length - a.like.length
}
