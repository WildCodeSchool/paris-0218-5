// import { addtEtab } from './composants/addrest.js'

const form = document.getElementById('form')
const sent = document.getElementById('add-restaurant-submit')



form.addEventListener('submit', event => {
  event.preventDefault()
  console.log('toto')

  const name = document.getElementById('name-etab').value
  const location = document.getElementById('adress-etab').value
  const category = document.getElementById('catego-etab').value
  // const url = ''
  const budget = document.getElementById('budget-etab').value
  const description = document.getElementById('description-etab').value
  const cart = document.getElementById('cb-etab').value
  const vegetarian = document.getElementById('vege-etab').value

  window.fetch('http://localhost:3333/restaurants', {
    method: 'post',
    body: JSON.stringify({
      name: name,
      location: location,
      category: category,
      // url: url,
      budget: budget,
      description: description,
      cart: cart,
      vegetarian: vegetarian
    })
  }).then(res => console.log(res.status))
    .then(res => alert('Merci pour votre ajout, les restaurants ont été mis à jour.' ))
    .then(res => window.location.href = 'index.html')
})
