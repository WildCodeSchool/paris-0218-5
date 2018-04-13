/* global URLSearchParams */

import { restaurantElement } from './composants/restaurant.js'

window.addEventListener('load', () => {
  const listResto = document.getElementById('list-restos')
  const params = new URLSearchParams(window.location.search)

  //  On récupère le nom de la catégorie
  let cat = params.get('cat')

  //  On ajoute un h2 avec le nom de la catégorie (ou 'restaurants' si elle n'existe pas)
  const h2 = document.createElement('h2')
  document.querySelector('main').insertBefore(h2, listResto)
  if (!cat) {
    cat = 'Restaurants'
  }
  document.querySelector('h2').innerHTML = `<span>${cat}</span>`

  window.fetch(`http://localhost:3333/restaurants/${cat}`)
    .then(res => res.json())
    .then(restoCat => {
      listResto.innerHTML = restoCat.map(restaurantElement).join('')
    })
})
