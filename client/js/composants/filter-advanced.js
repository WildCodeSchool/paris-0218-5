export const filterElement = category => {
  let value = category.title.replace(/[\s]/g, '-')
  return /* html */`
  <li>
    <label for=${category.title}>${category.title}
      <input type="checkbox" id=${category.title} name=${category.title} value=${value}>
    </label>
  </li>
    `
}
