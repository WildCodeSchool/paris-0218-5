export const categoriesElement = mycatego => {

  //let url = mycatego.title.replace(/['à'/]/, '-').replace(/[a-zA-Z/'€'/\s]/g, '')

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
