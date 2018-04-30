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




      form.addEventListener('submit', event => {
          event.preventDefault()
          const formTarget = event.target

          // En suite en JS on à un objet spécial pour traiter les formulaire
          // FormData

          // On l'obtient à partir d'un form :
          const data = new FormData(formTarget)

          /* if (data.get('url') === '')
          {data.append("url", `images/categories/${category.toLowerCase()}.jpg`)

          }*/

          // C'est un objet un peu chelou, j'ai aucune idée de pourquoi c'est pas un
          // objet normal, c'est le DOM, on pause pas de question.

          // Donc la différence c'est que pour acceder au elements on peu pas juste
          // faire avec le . ou les []
          // il faut utilisé la méthode `get` :


          // Il va reprendre chaque <input> de votre <form>
          // et il prend leur propriété "name" comme key
          // et la prop "value" comme valeur




      let name = document.getElementById('name-etab').value
      let location = document.getElementById('adress-etab').value
      const category = document.getElementById('catego-etab').value
      let url = document.getElementById('fileup').value
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

          // avec fetch ça s'utilise comme ça:
          fetch('http://localhost:3333/restaurants', { method: 'post', body: data })
          .then(response => response.json())
          .then(res => console.log(data.get('url')))
          .then(res => console.log(res))
          .catch(err => console.log(err))
          .then(res => window.location.replace('index.html'))

      })

