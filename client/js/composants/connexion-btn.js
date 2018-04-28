export const isConnected = user => {
  return `
    <div class="btn-red connected">
      <span class="icn icn-profile"></span>
      <a class="text" href="profile.html?id=${user.id}">Hello ${user.name} ! </a>
      <span id="sign-out" class="icn icn-logout"></span>
    </div>
  `
}

export const isNotConnected =
  `
  <div id="open-popup" class="btn-red connexion-wrapper">
    <span class="icn icn-profile"></span>
    <span class="text">Connexion</span>
  </div>
`


