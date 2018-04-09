export const categoriesElement = mycatego => {
    return `
			<div class='category column column-sm-33 column-xs-100'>
					<h4>${mycatego.titre}</h4>
					<img src='${mycatego.url}'>
			</div>
    `
}