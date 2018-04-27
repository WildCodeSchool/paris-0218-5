import { filterElement } from './composants/filter-advanced.js'
import { restaurantElement } from './composants/restaurant.js'
import { restaurantScale } from './restaurant-scale.js'

const listByType = document.getElementById('list-by-type')
const listByBudget = document.getElementById('list-by-budget')
const listResto = document.getElementById('list-restos')

window.fetch('http://localhost:3333/categories')
  .then(res => res.json())
  .then(categories => {
    listByType.innerHTML = categories['cuisine'].map(filterElement).join('')
    listByBudget.innerHTML = categories['budget'].map(filterElement).join('')
  })
  .then(() => {
    const filtersByCategory = listByType.getElementsByTagName('input')
    const filtersByBudget = listByBudget.getElementsByTagName('input')

    const filterChecked = {
      category: [],
      budget: []
    }

    for (let filter of filtersByCategory) {
      filter.addEventListener('click', () => {
        // On ajoute dans un tableau les valeurs de catégories cochées
        if (filter.checked) {
          filterChecked.category.push(filter.value)
        } else {
        // On les enlève si le tableau est décoché
          filterChecked.category.splice(filterChecked.category.indexOf(filter.value), 1)
        }
        displayRestoFilter(filterChecked)
      })
    }
    // Idem pour les budget
    for (let filter of filtersByBudget) {
      filter.addEventListener('click', () => {
        let value = filter.value.replace(/[-]/g, ' ')
        if (filter.checked) {
          filterChecked.budget.push(value)
        } else {
          filterChecked.budget.splice(filterChecked.budget.indexOf(value), 1)
        }
          displayRestoFilter(filterChecked)
      })
    }
  })

const displayRestoFilter = filters => {
  window.fetch('http://localhost:3333/restaurants')
    .then(res => res.json())
    .then(restaurants => {
      let results = []
      let arrRestoByFilter = []

      // On parcourt le tableau de filtres
      for (let keys of Object.keys(filters)) {
        if (filters[keys].length !== 0) {
          results = []
          // On filtre les restos correspondant à chaque filtre et on les additionne
          for (let filter of filters[keys]) {
            results = results
              .concat(restaurants
                .filter(restaurant => restaurant[keys] === filter))
          }
          // On pousse chaque tableau de résultats de restos dans un tableau
          arrRestoByFilter.push(results)
          restaurants = results
        }
      }
      // Si il y a plus d'un type de filtre coché
      if (arrRestoByFilter.length > 1) {
        results = []
        // On filtres les restos identiques dans les 2 tableaux
        for (let resto of arrRestoByFilter[1]) {
          results = results.concat(arrRestoByFilter[0].filter(elem => elem === resto))
        }
        restaurants = results
      }
      listResto.innerHTML = restaurants.map(restaurantElement).join('')
      restaurantScale(listResto)
    })
}
