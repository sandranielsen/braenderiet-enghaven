import {
    firebaseDB
} from "../services/firebase_config.js";

class ProductService {
    constructor() {
        this.vodkaRef = firebaseDB.collection("vodka").limit(1);
        this.rumRef = firebaseDB.collection("rum").limit(1);
        this.brandyRef = firebaseDB.collection("brandy").limit(1);
        this.productRef = firebaseDB.collection("products").limit(7);
    }

    init() {
        
        // initing all products
        this.productRef.onSnapshot(snapshotData => {
            let products = [];
            snapshotData.forEach(doc => {
                let product = doc.data();
                product.id = doc.id;
                products.push(product);
            });
            this.appendProducts(products);
        });
    }
     
    // appending the products
    appendProducts(products) {
        let template = "";
        for (let product of products) {
            template += /*html*/ `
                    <article id="spirit-products" onclick="selectProduct('${product.name}', '${product.series}', '${product.alcohol}', '${product.notes}', '${product.image}', '${product.illustration}', '${product.description}' )">
                    <div id="product-content">
                    <div id="information-container">
                    <h1 class="product_title">${product.name}</h1>
                    <div id="product-info">
                        <div id="info-element-1">
                        <h5 class="info_title">Produktserie</h5>
                        <h3 class="product_series">${product.series}<h3>
                        </div>
                        <div id="info-element">
                        <h5 class="info_title">Alkoholstyrke</h5>
                        <h1 class="product_strength">${product.alcohol}</h1>
                        </div>
                        <div id="info-element">
                        <h5 class="info_title">Smag</h5>
                        <h3 class="product_notes">${product.notes}</h3>
                        </div>
                        </div>
                    </div>
                <div id="image_container"></div>
                <img src="${product.image}" class="product_image">
                </div>
                <div id="product-description">
                    <div id="sketch-container">
                        <img src="${product.illustration}" class="illustration">
                    </div>
                    <p class="product_description">${product.description}</p>
                </div>
                <div>
                <h2>Se resten af vores udvalg<h2>
                <div id="product-slider"></div>
                </div>
                </article>
                `;
        }
        document.querySelector("#product-list").innerHTML = template;
    }

    appendProducts(products) {
        let htmlTemplate = "";
        for (let product of products) {
            htmlTemplate += /*html*/ `
                <div class="preview" onclick="selectProduct('${product.name}', '${product.series}', '${product.alcohol}', '${product.notes}', '${product.image}', '${product.illustration}', '${product.description}')">
                    <img src="${product.image}" alt="${product.name}">
                    <h5 class="preview_text">${product.name}</h5>
                </div>
                
          `;
        }
        document.querySelector('#product-slider').innerHTML = htmlTemplate;
    }
}

const productService = new ProductService();
export default productService;