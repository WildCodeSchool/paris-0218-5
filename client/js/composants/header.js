export const header =
  `
    <div class="first-column column column-md-40 column-xs-80  flex">
        <div id="logo-wrapper">
            <a href="index.html">
                <img src="images/logo.svg" alt="logo" />
            </a>
        </div>
        <h1>On mange où ?</h1>
    </div>

    <div id="choice-wrapper" class="column column-xs-10 column-md-40 flex">
        <div id="search-wrapper" class="">
            <form class="search">
                <input type="text" placeholder="Chercher un restaurant">
                <button class="btn-search" type="submit">
                <span class="icn icn-search"></span>
                </button>
            </form>
        </div>
        <div id="randomeal-btn" class="randomeal-wrapper desktop-only">
              <span class="icn icn-dice"></span>
              <span class='text-randomeal'>Randomeal</span>
        </div>
    </div>
    <div class="last-column column column-md-20 column-xs-10 flex">
        <div class="btn-red connexion-wrapper">
            <span class="icn icn-profile"></span>
            <span class="text">Connexion</span>
        </div>
        <div id="randomeal-btn" class="btn-red btn-randomeal mobile-only">
        <span class="icn icn-dice"></span>
      </div>
        <div id="btn-search-mobile" class="btn-red btn-search mobile-only">
          <span class="icn icn-search"></span>
        </div>
    </div>
    `
