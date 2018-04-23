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
      // On affiche les bons restos en fonction du budget ou de la catégorie
      if (cat) {
        document.querySelector('h2').innerHTML = cat
        let restoCat = restaurants.filter(restaurants => restaurants.category === cat)
        return restoCat
      } else if (budget) {
        budget = budget === '1' ? 'Moins de 5€' : budget === '2' ? 'De 5 à 10€' : 'Plus de 10€'
        document.querySelector('h2').innerHTML = budget
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
      const nbColumn = Math.round(listResto.offsetWidth / columns[0].offsetWidth)
      // Pour chaque fiche de resto on ajoute un event au click
      for (let column of columns) {
        let resto = column.querySelector('.restaurant .simple-infos')

        resto.addEventListener('click', e => {
          const that = e.currentTarget
          // On récupère la colonne liée à l'élément cliquable
          const thatColumn = that.parentNode.parentNode
          // thatIndex recupère la position de l'élément
          const thatIndex = Array.from(columns).indexOf(thatColumn)

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
            if (columns.item(i) !== null) {
              columns.item(i).classList.add('same-row')
            }
          }
          // on enlève same-row et ajoute une classe active à la colonne visée
          thatColumn.classList.remove('same-row')
          thatColumn.classList.add('active')
        })
      }
    })
})
