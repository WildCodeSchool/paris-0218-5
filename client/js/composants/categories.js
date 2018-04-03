export const categoriesElement = mycatego => {
    return `
			<div class='category column column-md-33 column-sm-50'>
					<h4>${mycatego.titre}</h4>
					<img src= '${mycatego.url}'>
			</div>
    `
}