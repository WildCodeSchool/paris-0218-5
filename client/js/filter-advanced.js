import { filterElement } from './composants/filter-advanced.js'
import { restaurantElement } from './composants/restaurant.js'
import { restaurantScale } from './restaurant-scale.js'

const listByType = document.getElementById('list-by-type')
const listByBudget = document.getElementById('list-by-budget')
const listResto = document.getElementById('list-restos')

const btnFilter = document.getElementById('open-filter')

let restaurants

const filterChecked = {
  category: [],
  budget: []
}

const switchFilter = () => {
  console.log('pouet')
}

const inputsListener = filtersType => {
  for (let filter of filtersType) {
    filter.addEventListener('click', () => {
      // On ajoute dans un tableau les valeurs de catégories cochées
      filter.checked
        ? filterChecked.category.push(filter.value)
        // Et on les enlève si le tableau est décoché
        : filterChecked.category.splice(filterChecked.category.indexOf(filter.value), 1)
      filterRestaurants(filterChecked, restaurants)
    })
  }
}

const displayRestaurants = restaurants => {
  listResto.innerHTML = restaurants.map(restaurantElement).join('')
  restaurantScale(listResto)
}

const filterRestaurants = (filters, restaurants) => {
  let filteredData = restaurants

  const keys = Object.keys(filters)
  for (const k of keys) {
    if (filters[k].length) {
      filteredData = filteredData.filter(r => filters[k].includes(r[k]))
    }
  }
  displayRestaurants(filteredData)
}

window.fetch('http://localhost:3333/categories')
  .then(res => res.json())
  .then(categories => {
    listByType.innerHTML = categories['cuisine'].map(filterElement).join('')
    listByBudget.innerHTML = categories['budget'].map(filterElement).join('')
  })
  .then(() => {
    const filtersByCategory = listByType.getElementsByTagName('input')
    const filtersByBudget = listByBudget.getElementsByTagName('input')

    inputsListener(filtersByCategory)
    inputsListener(filtersByBudget)
  })

window.fetch('http://localhost:3333/restaurants')
  .then(res => res.json())
  .then(res => {
    restaurants = res
  })

btnFilter.addEventListener('click', switchFilter)
