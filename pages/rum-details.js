//firebase

import {
    firebaseDB
} from "../services/firebase_config.js";

import productService from "../services/product-service.js";

export default class RumDetails {
    constructor() {
        this.rumRef = firebaseDB.collection("rum");
        this.template();
    }

    read() {

        this.productRef.onSnapshot(snapshotData => {
            let products = [];
            snapshotData.forEach(doc => {
                let product = doc.data();
                product.id = doc.id;
                products.push(product);
            });
            productService.appendProducts(products);
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
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="rum-details" class="page">
            <div id="rum-list">
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
                <div id="slider-container">
                <h2>Se resten af vores udvalg<h2>
                <div id="rum-preview"></div>
                </div>
        
        </section>
    `;
    }


}