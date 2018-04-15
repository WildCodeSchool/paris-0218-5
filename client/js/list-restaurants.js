/* global URLSearchParams */

import { restaurantElement } from './composants/restaurant.js'

window.addEventListener('load', () => {
  const listResto = document.getElementById('list-restos')
  const params = new URLSearchParams(window.location.search)
  let restoCat

  //  On ajoute un h2
  const h2 = document.createElement('h2')
  document.querySelector('main').insertBefore(h2, listResto)

  //  On récupère le nom de la catégorie
  let cat = params.get('cat')
  let budget = params.get('budget')

  window.fetch(`http://localhost:3333/restaurants/`)
    .then(res => res.json())
    .then(restaurants => {
      if (cat) {
        document.querySelector('h2').innerHTML = `<span>${cat}</span>`
        restoCat = restaurants.filter(restaurants => restaurants.category === cat)
        return restoCat
      } else if (budget) {
        document.querySelector('h2').innerHTML = `<span>${budget}</span>`
        restoCat = restaurants.filter(restaurants => restaurants.budget === budget)
        return restoCat
      }
    })
    .then(restoCat => {
      listResto.innerHTML = restoCat.map(restaurantElement).join('')
    })
})
