import {
    firebaseDB
} from "../services/firebase_config.js";

class ProductService {
    constructor() {
        this.productRef = firebaseDB.collection("products");
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
            
        });
    }
     
    // appending the products
    appendProducts(products) {
        let template = "";
        for (let product of products) {
            template += /*html*/ `
                    <article id="spirit-products" onclick="selectProduct('${product.id}','${product.name}', '${product.series}', '${product.strength}', '${product.image}', '${product.illustration}', '${product.description}' )">
                        <div id="product-content">
                                <div id="product-text">
                                    <h1 class="product_name">${product.name}</h1>
                                </div>
                            </div>
                        <img class="product_img" src='${product.image}'>
                        </div>
                    </article>
                `;
        }
        document.querySelector("#product-list").innerHTML = template;
    }

}

const productService = new ProductService();
export default productService;