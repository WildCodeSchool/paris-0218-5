export const filterElement = category => {
  return /* html */`
  <li>
    <label for=${category.title}>${category.title}
      <input type="checkbox" id=${category.title} name=${category.title} value=${category.title}>
    </label>
  </li>
    `
}
