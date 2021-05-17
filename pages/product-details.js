//firebase

import {
    firebaseDB
} from "../services/firebase_config.js";

import productService from "../services/product-service.js";

export default class ProductDetails {
    constructor() {
        this.template();
        this.productRef = firebaseDB.collection("products");
        this.vodkaRef = firebaseDB.collection("vodka");
        this.rumRef = firebaseDB.collection("rum");
        this.brandyRef = firebaseDB.collection("brandy");
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
        <section id="product-details" class="page">
            <div id="product-list">
                <div id="product-content">
                    <div id="information-container">
                    <h1 class="product_title"></h1>
                    <div id="product-info">
                        <div id="info-element-1">
                        <h5 class="info_title">Produktserie</h5>
                        <h3 class="product_series"><h3>
                        </div>
                        <div id="info-element">
                        <h5 class="info_title">Alkoholstyrke</h5>
                        <h1 class="product_strength"></h1>
                        </div>
                        <div id="info-element">
                        <h5 class="info_title">Smag</h5>
                        <h3 class="product_notes"></h3>
                        </div>
                    </div>
                    </div>
                <div id="image_container"></div>
                </div>
                <div id="product-description">
                    <div id="sketch-container"></div>
                    <p class="product_description"></p>
                </div>
        
        </section>
    `;
    }
}