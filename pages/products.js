import {
     firebaseDB
} from "../services/firebase_config.js";

import productService from "../services/product-service.js";

export default class ProductsPage {
     constructor() {
          this.productRef = firebaseDB.collection("products");
          this.vodkaRef = firebaseDB.collection("vodka").limit(1);
          this.rumRef = firebaseDB.collection("rum").limit(1);
          this.brandyRef = firebaseDB.collection("brandy").limit(1);
          this.template();
          this.read();
    }

     read() {

          this.vodkaRef.onSnapshot(snapshotData => {
            let vodkas = [];
            snapshotData.forEach(doc => {
                let vodka = doc.data();
                vodka.id = doc.id;
                vodkas.push(vodka);
            });
            this.appendVodkas(vodkas);
        });

        this.rumRef.onSnapshot(snapshotData => {
            let rums = [];
            snapshotData.forEach(doc => {
                let rum = doc.data();
                rum.id = doc.id;
                rums.push(rum);
            });
            this.appendRums(rums);
        });

        this.brandyRef.onSnapshot(snapshotData => {
            let brandys = [];
            snapshotData.forEach(doc => {
                let brandy = doc.data();
                brandy.id = doc.id;
                brandys.push(brandy);
            });
            this.appendBrandys(brandys);
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
        <div id ="products-container">
        <div id="vodka-container"></div>
        <div id="rum-container"></div>
        <div id="brandy-container"></div>
    </div>
        
        </section>
    `;
    }


    appendVodkas(vodkas) {
          let template = "";
          for (let vodka of vodkas) {
               template += /*html*/ `
          <article class="spirit_item" onclick="selectVodka('${vodka.vodkaName}', '${vodka.vodkaSeries}', '${vodka.vodkaAlcohol}', '${vodka.vodkaNotes}', '${vodka.vodkaImage}', '${vodka.vodkaIllustration}', '${vodka.vodkaDescription}')"">
                <div id="spirit-content">
                <h2 class="spirit-name">${vodka.vodkaSpirit}</h2>
                <button class="product_btn">Læs mere</button>
                </div>
                    <img src="${vodka.vodkaImage}" alt="Brænderiet Enghaven spiritusudvalg" class="spirit_image">
          </article>
          `;
          }
           document.querySelector("#vodka-container").innerHTML = template;
     }
     
     appendRums(rums) {
          let template = "";
          for (let rum of rums) {
               template += /*html*/ `
          <article class="spirit_item" onclick="selectRum('${rum.rumName}', '${rum.rumSeries}', '${rum.rumAlcohol}', '${rum.rumNotes}', '${rum.rumImage}', '${rum.rumIllustration}', '${rum.rumDescription}')"">
                <div id="spirit-content">
                <h2 class="spirit-name">${rum.rumSpirit}</h2>
                <button class="product_btn">Læs mere</button>
                </div>
                    <img src="${rum.rumImage}" alt="Brænderiet Enghaven spiritusudvalg" class="spirit_image">
          </article>
          `;
          }
           document.querySelector("#rum-container").innerHTML = template;
     }
     
     appendBrandys(brandys) {
          let template = "";
          for (let brandy of brandys) {
               template += /*html*/ `
          <article class="spirit_item" onclick="selectBrandy('${brandy.brandyName}', '${brandy.brandySeries}', '${brandy.brandyAlcohol}', '${brandy.brandyNotes}', '${brandy.brandyImage}', '${brandy.brandyIllustration}', '${brandy.brandyDescription}')"">
                <div id="spirit-content">
                <h2 class="spirit-name">${brandy.brandySpirit}</h2>
                <button class="product_btn">Læs mere</button>
                </div>
                    <img src="${brandy.brandyImage}" alt="Brænderiet Enghaven spiritusudvalg" class="spirit_image">
          </article>
          `;
          }
           document.querySelector("#brandy-container").innerHTML = template;
     }  

}
