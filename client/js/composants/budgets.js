export const budgetElement = mybudget => {
  // let url = mycatego.title.replace(/['à'/]/, '-').replace(/[a-zA-Z/'€'/\s]/g, '')
  return `
  <div class='category column column-sm-33 column-xs-100'>
    <a href="list-restaurants.html?budget=${mybudget.id}">
      <h4>${mybudget.title}</h4>
        <div class="image-wrapper">
            <img src='${mybudget.url}' alt="image-${mybudget.title}">
        </div>
        </a>
      </div>
    `
}
