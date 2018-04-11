    export const popup = 
    `
    <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">x</span>
      <div class="popup">
        <form class="modal-content">

          <h2>Connexion</h2>
          <p>Déjà inscrit ? Connecte toi ici.</p>

          <input type="text" placeholder="Ton email" name="email" id="log-email" required>

          <input type="password" placeholder="Ton mot de passe" name="psw" id="log-psw" required></label>

          <p><a href="#">Mot de passe oublié ?</a></p>


            <a href="#" class="button-general" id="log-submit"><span>Se connecter</span></a>
        


        </form>

        <form class="modal-content">
          <h2>Créer un compte</h2>
          <p>Pas encore inscrit ? Remplis le formulaire !</p>

          <input type="text" placeholder="Ton email" name="email" id="regist-email" required>

          <input type="password" placeholder="Choisir un mot de passe" name="psw" id="regist-psw" required>


          <input type="password" placeholder="Confirmer le mot de passe" name="regist-psw-repeat" id="confirm-psw" required>


          <p>En créant un compte j' accepte les <a href="#" style="color:dodgerblue">termes et conditions</a>.</p>

          <div class="cnx-btn">
           <a href="#" class="button-general" id="regist-submit"><span>S'inscrire</span></a>
         </div>

       </form>
     </div>

     `