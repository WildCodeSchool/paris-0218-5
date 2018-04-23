export const restaurantElement = restaurant => {
  return `
      <div class='column column-md-33 column-sm-50 xs-100'>
        <div class="restaurant">
          <img src="${restaurant.url}">
          <h5>${restaurant.name}</h5>
          <h6>${restaurant.category}</h6>
          <p class="more-infos">${restaurant.description}</p>
          <p class="more-infos">A emporter ? ${restaurant.takeAway}</p>
          <p class="more-infos">Végétarien ? ${restaurant.vegetarian}</p>
          <p class="more-infos">Carte bancaire ? ${restaurant.cart}</p>
          <p class="more-infos">${restaurant.location}</p>
          <span class="icn icn-like"></span>${restaurant.like.length}
          <p>${restaurant.budget}</p>
        </div>
    </div>
    `
}
