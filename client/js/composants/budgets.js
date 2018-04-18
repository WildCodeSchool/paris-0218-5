export const budgetElement = mybudget => {
  let myBudget = mybudget.name.replace('et', '-').replace(/[a-zA-Z]/g, '').trim()
  console.log(myBudget)
  return `
  <div class='category column column-sm-33 column-xs-100'>
    <a href="list-restaurants.html?budget=${myBudget}">
      <h4>${mybudget.name}</h4>
        <div class="image-wrapper">
            <img src='${mybudget.url}' alt="image-${mybudget.title}">
        </div>
        </a>
      </div>
    `
}
