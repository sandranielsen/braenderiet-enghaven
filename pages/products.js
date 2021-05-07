import {
     firebaseDB
} from "../services/firebase_config.js";

import productService from "../services/product-service.js";

let spiritsData = [];

export default class ProductsPage {
     constructor() {
          this.spiritRef = firebaseDB.collection("spirits");
          this.productRef = firebaseDB.collection("products");
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

          this.productRef.onSnapshot(snapshotData => {
            let products = [];
            snapshotData.forEach(doc => {
                let product = doc.data();
                product.id = doc.id;
                products.push(product);
            });
            productService.appendProducts(products);
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
          <article class="spirit_item" onclick="selectProduct('${spirit.name}', '${spirit.series}', '${spirit.alcohol}', '${spirit.notes}', '${spirit.image}', '${spirit.illustration}', '${spirit.description}')"">
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
