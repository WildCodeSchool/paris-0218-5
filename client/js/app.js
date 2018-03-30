import { categoriesElement } from './composants/categories.js'

fetch('http://localhost:3333/catego')
    .then(res => res.json())
    .then(catego => {
        const categoElement = document.getElementById('categories')
        categoElement.innerHTML = catego.map(categoriesElement).join('')
    })