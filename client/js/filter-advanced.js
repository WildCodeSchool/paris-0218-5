import { filterElement } from './composants/filter-advanced.js'
import { restaurantElement } from './composants/restaurant.js'


const filterAdvanced = document.getElementById('advanced-filter')
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
    const filtersByType = listByType.getElementsByTagName('input')
    const filtersByBudget = listByBudget.getElementsByTagName('input')

    const filterChecked = {
      type: [],
      budget: []
    }

    for (let filter of filtersByType) {
      filter.addEventListener('click', () => {
        if (filter.checked) {
          filterChecked.type.push(filter.value)
        } else {
          filterChecked.type.splice(filterChecked.type.indexOf(filter.value), 1)
        }
        displayRestoFilter(filterChecked)
      })
    }

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

const displayRestoFilter = filterChecked => {
  window.fetch('http://localhost:3333/restaurants')
    .then(res => res.json())
    .then(restaurants => {
      let results = []
      for (let restaurant of restaurants) {
        if (filterChecked.budget != null && filterChecked.budget.includes(restaurant.budget)) {
          console.log(filterChecked.budget);
          results.push(restaurant)
        }
        if (filterChecked.type != null && filterChecked.type.includes(restaurant.category)) {
          console.log(filterChecked.type);
          console.log(filterChecked.category);

          results.push(restaurant)
        }
      }
      listResto.innerHTML = results.map(restaurantElement).join('')
      //return results
    })

  // console.log(restaurants['category'].filter(resto => resto.category == filter.value))
}



