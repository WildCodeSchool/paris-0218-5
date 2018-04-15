export const budgetElement = mybudget => {
  return `
  <div class='category column column-sm-33 column-xs-100'>
    <a href="list-restaurants.html?budget=${mybudget.title}">
      <h4>${mybudget.name}</h4>
        <div class="image-wrapper">
            <img src='${mybudget.url}' alt="image-${mybudget.title}">
        </div>
        </a>
      </div>
    `
}
