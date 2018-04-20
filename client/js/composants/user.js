export const profilPage = myprofil => {
  return /* html */`
  <form id="profil-form">
    <div class="row row-responsive">
      <div class="column column-100">
        <label>Email</label>
        <input type='text' value='${myprofil.email}' id="mail-input" disabled>
        </div>
      <div class="column column-100">
        <label>Password</label>
        <input type='text' value='${myprofil.password}' id="password-input" disabled>
      </div>
      </div>
    <button class='button-general' id='modify' type='button' >Modifier</button>
    <button class='button-general' id='valid' type='submit' >Valider</button>
  <form>
  `
}
