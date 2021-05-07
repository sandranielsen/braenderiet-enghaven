//firebase

import {
    firebaseDB
} from "../services/firebase_config.js";

import ProductService from "../services/product-service.js";

export default class DetailsPage {
    constructor() {
        this.template();
        this.productRef = firebaseDB.collection("products");
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="product-details" class="page">
            <div id="product-banner-container">
                <div id="product-content">
                    <h1 class="product_title"></h1>
                    <div id="product-info">
                        <div>
                        <h5 class="info_title">Produktserie</h5>
                        <h3 class="product_series"><h3>
                        </div>
                        <div>
                        <h5 class="info_title">Alkoholstyrke</h5>
                        <h1 class="product_strength"></h1>
                        </div>
                        <div>
                        <h5 class="info_title"></h5>
                        <div id="batch-container"></div>
                        </div>
                    </div>
                <div id="image_container"></div>
                </div>
                <div id="product-info">
                    <div id="sketch-container"></div>
                    <p class="product_description"></p>
                </div>
        
        </section>
    `;
    }
}