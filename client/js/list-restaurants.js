/* global URLSearchParams */

import { restaurantElement } from './composants/restaurant.js'

window.addEventListener('load', () => {
  const listResto = document.getElementById('list-restos')
  const params = new URLSearchParams(window.location.search)

  //  On récupère le nom de la catégorie
  let cat = params.get('cat')
  let budget = params.get('budget')

  window.fetch(`http://localhost:3333/restaurants/`)
    .then(res => res.json())
    .then(restaurants => {
      if (cat) {
        document.querySelector('h2').innerHTML = `${cat}`
        let restoCat = restaurants.filter(restaurants => restaurants.category === cat)
        return restoCat
      } else if (budget) {
        // budget = budget === '1' ? 'Moins de 5€' : budget === '2' ? 'De 5 à 10€' : budget === '3' ? 'Plus de 10€' :
        if (budget === '1') {
          budget = 'Moins de 5€'
        } else if (budget === '2') {
          budget = 'De 5 à 10€'
        } else if (budget === '3') {
          budget = 'Plus de 10€'
        }
        document.querySelector('h2').innerHTML = `${budget}`
        let restoCat = restaurants.filter(restaurants => restaurants.budget === budget)
        return restoCat
      }
    })
    .then(restoCat => {
      listResto.innerHTML = restoCat.map(restaurantElement).join('')
    })
})
