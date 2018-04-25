/* global URLSearchParams */

import { restaurantElement } from './composants/restaurant.js'
import { restaurantScale } from './restaurant-scale.js'

const listResto = document.getElementById('list-restos')
const params = new URLSearchParams(window.location.search)

//  On récupère le nom de la catégorie
const cat = params.get('cat')
let budget = params.get('budget')

window.fetch(`http://localhost:3333/restaurants/`)
  .then(res => res.json())
  .then(restaurants => {
    // On affiche les bons restos en fonction du budget ou de la catégorie
    if (cat) {
      document.querySelector('h2').innerHTML = cat
      let restoCat = restaurants.filter(restaurants => restaurants.category === cat)
      return restoCat
    } else if (budget) {
      budget = budget === '5' ? 'Moins de 5€' : budget === '5-10' ? 'De 5 à 10€' : 'Plus de 10€'
      document.querySelector('h2').innerHTML = budget
      let restoCat = restaurants.filter(restaurants => restaurants.budget === budget)
      return restoCat
    } else {
      let restoCat = restaurants
      return restoCat
    }
  })
  .then(restoCat => listResto.innerHTML = restoCat.map(restaurantElement).join(''))
  .then(() => restaurantScale(listResto))
