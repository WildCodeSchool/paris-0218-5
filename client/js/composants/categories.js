export const categoriesElement = mycatego => {
  return `
      <div class='category column column-sm-33 column-xs-100'>
        <h4>${mycatego.titre}</h4>
        <div class="image-wrapper">
        <img src='${mycatego.url}' alt="image-${mycatego.titre}">
        </div>
      </div>
    `
}
