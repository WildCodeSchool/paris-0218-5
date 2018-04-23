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
        budget = budget === '1' ? 'Moins de 5€' : budget === '2' ? 'De 5 à 10€' : 'Plus de 10€'

        document.querySelector('h2').innerHTML = `${budget}`
        let restoCat = restaurants.filter(restaurants => restaurants.budget === budget)
        return restoCat
      } else {
        let restoCat = restaurants
        return restoCat
      }
    })
    .then(restoCat => {
      listResto.innerHTML = restoCat.map(restaurantElement).join('')
    })
    .then(() => {
      let columns = listResto.getElementsByClassName('column')

      // Pour chaque fiche de resto on ajoute un event au click
      for (let column of columns) {
        const nbColumn = Math.round(listResto.offsetWidth / column.offsetWidth)

        column.addEventListener('click', (e) => {
          const that = e.currentTarget
          // thatIndex recupère la position de l'élément
          const thatIndex = Array.from(columns).indexOf(that)

          // on enlève les classes déjà présentes
          for (let column of columns) {
            if (column.classList.contains('active')) {
              column.classList.remove('active')
            }
            if (column.classList.contains('same-row')) {
              column.classList.remove('same-row')
            }
          }
          // On récupère le numéro de la ligne
          const posRow = Math.floor(thatIndex / nbColumn)
          // On récupère le premier élément de la ligne
          const thatRow = posRow * nbColumn
          // On ajoute la classe same-row sur chaque élément
          for (let i = thatRow; i < thatRow + nbColumn; i++) {
            columns.item(i).classList.add('same-row')
          }
          // on enlève same-row et ajoute une classe active à la fiche visée
          that.classList.remove('same-row')
          that.classList.add('active')
        })
      }
    })
})
