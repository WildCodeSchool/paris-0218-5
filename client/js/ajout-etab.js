import { addtEtab } from './composants/addrest.js

const form = document.getElementById('form')
const nameEtab = document.getElementById('nameEtab')
const adressEtab = document.getElementById('adressEtab')
const categoEtab = document.getElementById('categoEtab')
const budgetEtab = document.getElementById('budgetEtab')
//const file = document.getElementById('file')
const descriptionEtab = document.getElementById('descriptionEtab')
const cbEtab = document.getElementById('cbEtab')
const vegeEtab = document.getElementById('vegeEtab')


form.addEventListener('submit', event => {
 event.preventDefault()
 console.log('toto')            /*

console.log(`
${nameEtab.value}
${adressEtab.value}
${categoEtab.value}
file.value}
${budgetEtab.value}
${descriptionEtab.value}
${cbEtab.value}
${vegeEtab.value}`*/)

        })

