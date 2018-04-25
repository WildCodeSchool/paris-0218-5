export const filterElement = category => {
  let value = category.title.replace(/[\s]/g, '-')
  return /* html */`
  <li>
    <label for=${value}>${category.title}
      <input type="checkbox" name=${value} id=${value} value=${value}>
    </label>
  </li>
    `
}
