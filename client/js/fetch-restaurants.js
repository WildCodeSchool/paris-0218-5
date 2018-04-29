export const fetchRestaurants = () => {
  window.fetch('http://localhost:3333/restaurants')
    .then(res => res.json())
    .then(restaurants => {
      return restaurants
    })
}
