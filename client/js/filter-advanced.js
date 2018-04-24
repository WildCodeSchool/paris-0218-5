import { filterElement } from './composants/filter-advanced.js'
const filterAdvanced = document.getElementById('advanced-filter')
const listByType = document.getElementById('list-by-type')
const listByBudget = document.getElementById('list-by-budget')



window.fetch('http://localhost:3333/categories')
  .then(res => res.json())
  .then(categories => {
    listByType.innerHTML = categories['cuisine'].map(filterElement).join('')
    listByBudget.innerHTML = categories['budget'].map(filterElement).join('')
  })
  .then(() => {
    const filters = filterAdvanced.getElementsByTagName('input')
    console.log(filters);

    for(let filter of filters){
      filter.addEventListener('click', () => {
        console.log(filter.value);
      })
    }
  })


