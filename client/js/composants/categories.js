export const categoriesElement = mycatego => {
    return `
			<div class='category column column-33'>
					<h4>${mycatego.titre}</h4>
					<img src= '${mycatego.url}'>
			</div>
    `
}