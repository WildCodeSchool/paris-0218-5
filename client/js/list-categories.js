import { categoriesElement } from './composants/categories.js'

const categoElement = document.getElementById('categories')

fetch('http://localhost:3333/categories')
    .then(res => res.json())
    .then(categories => {
        document.getElementById('budget').addEventListener('click', () => {
            filterCat(categories, 'budget')
        })
        document.getElementById('cuisine').addEventListener('click', () => {
            filterCat(categories)
        })
        filterCat(categories)
    })

const filterCat = (categories, cat = "cuisine") => {
    categoElement.innerHTML = categories[cat].map(categoriesElement).join('')
}



