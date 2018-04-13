export const restaurantElement = restaurant => {
    return `
			<div class='column column-sm-25 column-xs-50'>
				<div class="restaurant">
					<img src="${restaurant.url}">	
					<h5>${restaurant.name}</h5>
					<h6>${restaurant.category}</h6>
					<h6><span class="icn icn-like"></span>${restaurant.like.length}</h6>
					<span>${restaurant.budget}</span>
				</div>
			</div>
    `
}