// import { addtEtab } from './composants/addrest.js'
const isChecked = (checkBox) => {
  if (checkBox === true) {
    return 'Oui'
  }
  return 'Non'
}

const nameFirstLowerCase = (nameRest) => {
  const listWords = nameRest.split(' ') // les mots de la phrase se transforment en liste
  const maj = (cel) => { // chaque premiere lettre de chaque élément est mis en majuscule
    const wordMaj = cel.charAt(0).toUpperCase() + cel.substring(1).toLowerCase()
    return wordMaj
  }
  const listWordsMaj = listWords.map(maj)
  const nameRestMaj = listWordsMaj.join(' ')
  return nameRestMaj
}

const form = document.getElementById('form')

form.addEventListener('submit', event => {
  event.preventDefault()

  let name = document.getElementById('name-etab').value
  let location = document.getElementById('adress-etab').value
  const category = document.getElementById('catego-etab').value
  let url = document.getElementById('file').value
  const budget = document.getElementById('budget-etab').value
  const description = document.getElementById('description-etab').value
  let cart = document.getElementById('cb-etab').checked
  let vegetarian = document.getElementById('vege-etab').checked
  let takeAway = document.getElementById('away-etab').checked

  if (url === '') {
    url = `images/categories/${category.toLowerCase()}.jpg`
  }

  cart = isChecked(cart)
  vegetarian = isChecked(vegetarian)
  takeAway = isChecked(takeAway)
  name = nameFirstLowerCase(name)
  location = nameFirstLowerCase(location)

  window.fetch('http://localhost:3333/restaurants', {
    method: 'post',
    body: JSON.stringify({
      name: name,
      location: location,
      category: category,
      url: url,
      budget: budget,
      description: description,
      cart: cart,
      vegetarian: vegetarian,
      takeAway: takeAway
    })
  })
    .then(res => console.log(res.status))
    .then(res => window.location.replace('index.html'))
})
