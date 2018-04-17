export const restaurantElement = restaurant => {
  let imgResto = restaurant.url

  return `
      <div class='column column-md-25 column-sm-33 xs-100'>
        <div class="restaurant">
          <img src="${imgResto}">
          <h5>${restaurant.name}</h5>
          <h6>${restaurant.category}</h6>
          <h6><span class="icn icn-like"></span>${restaurant.like.length}</h6>
          <span>${restaurant.budget}</span>
        </div>
    </div>
    `
}
