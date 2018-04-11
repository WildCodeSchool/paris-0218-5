import { restaurantElement } from './composants/restaurants.js'

window.addEventListener("load", () => {
    const imgCategories = document.getElementsByClassName('category')
    for (let item of imgCategories) {
        item.addEventListener("click", (e) => {
            const that = e.currentTarget
            console.log('click')

            fetch(`http://localhost:3333/restaurants/${that.id}`)
                .then(res => res.json())
                .then(restoCat => {
                    console.log(restoCat)
                    document.getElementById('categories').innerHTML = restoCat.map(restaurantElement).join('')
                    }
                )
        })
    }
})