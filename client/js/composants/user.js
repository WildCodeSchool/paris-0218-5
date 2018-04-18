export const profilPage = myprofil => {
  return `
  <form>
    <label>Email</label>
    <input type='text' value='${myprofil.email}' disabled>
    <label>Password</label>
    <input type='text' value='${myprofil.password}' disabled>
    <button class='button-general' id='modify' type='button' >Modifier</button>
    <button class='button-general' id='valid' type='submit' disabled>Valider</button>
  <form>
  `
}
