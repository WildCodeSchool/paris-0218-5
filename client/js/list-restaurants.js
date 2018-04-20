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
      }
      else{
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
        column.addEventListener('click', (e) => {
          const that = e.currentTarget
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
          // on ajoute une classe active à la fiche visée
          that.classList.add('active')

          // Pour améliorer la mise en page, on rétrécit les éléments adjacents
          // On vise le premier élément de chaque ligne
          if (thatIndex === 0 || (thatIndex) % 3 === 0) {
            // On diminue la taille des deux suivants
            that.nextElementSibling.classList.add('same-row')
            that.nextElementSibling.nextElementSibling.classList.add('same-row')
          } else if (thatIndex - 1 === 0 || (thatIndex - 1) % 3 === 0) {
            that.previousElementSibling.classList.add('same-row')
            that.nextElementSibling.classList.add('same-row')
          } else if (thatIndex - 2 === 0 || (thatIndex - 2) % 3 === 0) {
            that.previousElementSibling.classList.add('same-row')
            that.previousElementSibling.previousElementSibling.classList.add('same-row')
          }
        })
      }
    })
})
