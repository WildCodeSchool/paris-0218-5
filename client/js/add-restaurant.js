// import { addtEtab } from './composants/addrest.js'


form.addEventListener('submit', event => {
  event.preventDefault()
  const formTarget = event.target

  // Objet special pour le traitement des formulaires : formData
  const data = new FormData(formTarget)

  // On accede aux éléments de cet objet avec la méthode GET
  const isChecked = (item) => {
    if (data.get(item) === 'on') {
      return data.set(item, 'Oui')
    }
  }

  const nameFirstLowerCase = (item, valueGet) => {
    const listWords = valueGet.split(' ') // les mots de la phrase se transforment en liste
    const maj = (cel) => { // chaque premiere lettre de chaque élément est mis en majuscule
      const wordMaj = cel.charAt(0).toUpperCase() + cel.substring(1).toLowerCase()
      return wordMaj
    }
    const listWordsMaj = listWords.map(maj)
    const nameRestMaj = listWordsMaj.join(' ')
    return data.set(item, nameRestMaj)
  }

  isChecked('cart')
  isChecked('vegetarian')
  isChecked('takeAway')

  const nameValue = data.get('name')
  const locValue = data.get('location')

  nameFirstLowerCase('name', nameValue)
  nameFirstLowerCase('location', locValue)

  fetch('http://localhost:3333/restaurants', { method: 'post', body: data })
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .then(res => window.location.replace('index.html'))
})

