//firebase

import {
    firebaseDB
} from "../services/firebase_config.js";

import productService from "../services/product-service.js";

export default class ProductDetails {
    constructor() {
        this.template();
        this.productRef = firebaseDB.collection("products");
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
                        <h5 class="info_title"></h5>
                        <div class="product_notes"></div>
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