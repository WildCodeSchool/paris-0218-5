export const header =
  `
    <div class="column column-40 flex">
        <div id="logo-wrapper">
            <a href="index.html">
                <img src="images/logo.svg" alt="logo" />
            </a>
        </div>
        <h1>On mange où ?</h1>
    </div>

    <div id="choice-wrapper" class="column column-sm-50 column-md-40 flex">
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
    <div id="connexion-wrapper" class="column column-sm-10 column-md-20 flex">
        <a class="btn-red" href="#">
            <span class="icn icn-profile"></span>
            <span class="text">Connexion</span>
        </a>
    </div>
    <span id="connexion-wrapper" class="icn icn-profile"></span>
    `
