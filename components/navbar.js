export default class NavBar {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">
          <a href="#home"><img src="./media/logo.svg" alt="logo" class="logo"></a>
           <div id="main-nav">
                    <a href="#products" class="nav_link">Produkter</a>
                    <a href="#about" class="nav_link">Om Brænderiet</a>
                    <a href="#concept" class="nav_link">Fra jord til bord</a>
                    <a href="#visit" class="nav_link">Besøg os</a>
                </div>
                <div id="secondary-nav">
            <a href="#shop" class="nav_link">Webshop</a>
    </div>

      </nav>
    `;
    }

}
