import {
     firebaseDB
} from "../services/firebase_config.js";

let spiritsData = [];

export default class ProductsPage {
    constructor() {
        this.spiritRef = firebaseDB.collection("spirits");
        this.template();
        this.read();
    }

     read() {
          this.spiritRef.onSnapshot(snapshotData => {

               snapshotData.forEach(doc => {
                    let spirit = doc.data();
                    spirit.id = doc.id;
                    spiritsData.push(spirit);
               });
               this.appendSpirits(spiritsData);

          });

     }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="products" class="page">
        <div id="banner-container">
            <img src="./media/produkter.jpg" alt="Enghaven produkt udvalg" class="banner_img">
            <div id="overlay"></div>
            <div id="banner-content">
                <h2 class="article_headline">Vores produkter</h2>
                <p class="article_text">Hos Brænderiet Enghaven finder du et bredt sortiment af spiritus.
                    Ud over de allerede eksisterende produkter, arbejder vi hele tiden på at forny os og
                    skabe spændende og anderledes kvalitetsprodukter. Vores sortiment spænder helt fra standard
                    produkter til limited edition produkter.</p>
        </div>
        </div>
        <div id="products-container"></div>
        
        </section>
    `;
    }


    appendSpirits(spirits) {
          let template = "";
          for (let spirit of spirits) {
               template += /*html*/ `
          <article class="spirit_item" onclick="selectSpirit('${spirit.name}', '${spirit.image}'">
                <div id="spirit-content">
                <h2 class="spirit-name">${spirit.name}</h2>
                <button class="product_btn">Læs mere</button>
                </div>
                    <img src="${spirit.image}" alt="Brænderiet Enghaven spiritusudvalg" class="spirit_image">
          </article>
          `;
          }
           document.querySelector("#products-container").innerHTML = template;
     }  

}
