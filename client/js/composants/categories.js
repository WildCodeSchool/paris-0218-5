export const categoriesElement = mycatego => {

  return `
  <div class='category column column-sm-33 column-xs-100'>
    <a href="list-restaurants.html?cat=${mycatego.title}">
      <h4>${mycatego.title}</h4>
        <div class="image-wrapper">
            <img src='${mycatego.url}' alt="image-${mycatego.title}">
        </div>
        </a>
      </div>
    `
}
