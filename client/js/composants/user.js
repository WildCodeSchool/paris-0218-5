export const profilPage = myprofil => {
  return `
  <form id="profil-form">
    <label>Email</label>
    <input type='text' value='${myprofil.email}' id="mail-input" disabled>
    <label>Password</label>
    <input type='text' value='${myprofil.password}' id="password-input" disabled>
    <button class='button-general' id='modify' type='button' >Modifier</button>
    <button class='button-general' id='valid' type='submit' >Valider</button>
  <form>
  `
}
