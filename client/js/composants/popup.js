export const popup =
`
  <span class="close-popup-btn" title="Close Modal" id= "close-popup">x</span>
    <div class="popup-content">
      <form class="form-content" id="form-connect">

        <h3>Connexion</h3>
        <p>Déjà inscrit ? Connecte toi ici.</p>

        <input type="text" placeholder="Ton email" name="email" id="logemail" required>

        <input type="password" placeholder="Ton mot de passe" name="psw" id="logpsw" required></label>

        <p><a href="#">Mot de passe oublié ?</a></p>

        <button class='button-general' id='logsubmit' type='submit'>Se connecter</button>

      </form>

      <form class="form-content" id="form-registre">
        <h3>Créer un compte</h3>
        <p>Pas encore inscrit ? Remplis le formulaire !</p>

        <input type="email" placeholder="Ton email" name="email" id="registemail" required>

        <input type="password" placeholder="Choisir un mot de passe" name="psw" id="registpsw" required>

        <input type="password" placeholder="Confirmer le mot de passe" name="regist-psw-repeat" id="confirmpsw" required>

        <p>En créant un compte j' accepte les <a href="#" style="color:dodgerblue">termes et conditions</a>.</p>

        <button class='button-general' id='registsubmit' type='submit'>S'inscrire</button>
      </form>
    </div>
`
