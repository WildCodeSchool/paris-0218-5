import { categoriesElement } from './composants/categories.js'

fetch('http://localhost:3333/categorie1')
    .then(res => res.json())
    .then(categorie1 => {
        const categoElement = document.getElementById('categories')
        categoElement.innerHTML = categorie1.map(categoriesElement).join('')
    })