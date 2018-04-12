import { restaurantElement } from './composants/restaurants.js'

window.addEventListener("load", () => {

    const params = new URLSearchParams(window.location.search)
    const cat = params.get('cat')
    console.log(cat)

    fetch(`http://localhost:3333/restaurants/${cat}`)
        .then(res => res.json())
        .then(restoCat => {
            console.log(restoCat)
            document.getElementById('list-restos').innerHTML = restoCat.map(restaurantElement).join('')
        }
    )
})