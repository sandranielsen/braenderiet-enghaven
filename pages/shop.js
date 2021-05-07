export default class ShopPage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="shop" class="page">
        
        </section>
    `;
    }
}