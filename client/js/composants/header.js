export const header =
  `
    <div class="column column-sm-60 column-md-40  flex">
        <div id="logo-wrapper">
            <a href="index.html">
                <img src="images/logo.svg" alt="logo" />
            </a>
        </div>
        <h1>On mange où ?</h1>
    </div>

    <div id="choice-wrapper" class="column column-sm-20 column-md-40 flex">
        <div id="search-wrapper">
            <form class="search">
                <input type="text" placeholder="Chercher un restaurant">
                <button class="btn-search" type="submit">
                <span class="icn icn-dice"></span>
                </button>
            </form>
        </div>
        <div id="randomeal-wrapper">
            <a href="#">
                <span class="icn icn-dice"></span>
                <span class='randomeal'>Randomeal</span>
            </a>
        </div>
    </div>
    <div class="last-column column column-sm-20 column-md-20 flex">
        <div class="btn-red connexion-wrapper">
            <span class="icn icn-profile"></span>
            <span class="text">Connexion</span>
        </div>
        <div id="btn-search-mobile" class="btn-red btn-search mobile-only">
          <span class="icn icn-profile"></span>
      </div>
    </div>
    <span id="connexion-wrapper" class="icn icn-profile"></span>
    `
