import {
  firebaseDB
} from "../services/firebase_config.js";

class ProductService {
  constructor() {
    this.rumRef = firebaseDB.collection("rum").limit(1);
    this.vodkaRef = firebaseDB.collection("vodka").limit(1);
    this.brandyRef = firebaseDB.collection("brandy").limit(1);
    this.productRef = firebaseDB.collection("products").limit(7);
  }

  init() {

    // initing all products
    this.rumRef.onSnapshot(snapshotData => {
            let rums = [];
            snapshotData.forEach(doc => {
                let rum = doc.data();
                rum.id = doc.id;
                rums.push(rum);
            });
            this.appendRums(rums);
    });
    
    this.vodkaRef.onSnapshot(snapshotData => {
            let vodkas = [];
            snapshotData.forEach(doc => {
                let vodka = doc.data();
                vodka.id = doc.id;
                vodkas.push(vodka);
            });
            this.appendVodkas(vodkas);
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

    this.productRef.onSnapshot(snapshotData => {
            let products = [];
            snapshotData.forEach(doc => {
                let product = doc.data();
                product.id = doc.id;
                products.push(product);
            });
            productService.appendProducts(products);
            productService.appendProducts1(products);
            productService.appendProducts2(products);
        });

  }

  // appending the products
  appendRums(rums) {
    let template = "";
    for (let rum of rums) {
      template += /*html*/ `
                    <article id="spirit-products">
                    <div id="product-content">
                    <div id="information-container">
                    <h1 class="product_title">${rum.rumName}</h1>
                    <div id="product-info">
                        <div id="info-element-1">
                        <h5 class="info_title">Produktserie</h5>
                        <h3 class="product_series">${rum.rumSeries}<h3>
                        </div>
                        <div id="info-element">
                        <h5 class="info_title">Alkoholstyrke</h5>
                        <h1 class="product_strength">${rum.rumAlcohol}</h1>
                        </div>
                        <div id="info-element">
                        <h5 class="info_title">Smag</h5>
                        <h3 class="product_notes">${rum.rumNotes}</h3>
                        </div>
                        </div>
                    </div>
                <div id="image_container"></div>
                <img src="${rum.rumImage}" alt="Brænderiet Enghaven spiritusudvalg" class="product_image">
                </div>
                <div id="product-description">
                    <div id="sketch-container">
                        <img src="${rum.rumIllustration}" class="illustration">
                    </div>
                    <p class="product_description">${rum.rumDescription}</p>
                </div>
                <div id="slider-container">
                <h2>Se resten af vores udvalg<h2>
                <div id="rum-preview"></div>
                </div>
                </article>
                `;
    }
    document.querySelector("#rum-list").innerHTML = template;
  }

   appendVodkas(vodkas) {
    let template = "";
    for (let vodka of vodkas) {
      template += /*html*/ `
                    <article id="spirit-products">
                    <div id="product-content">
                    <div id="information-container">
                    <h1 class="product_title">${vodka.vodkaName}</h1>
                    <div id="product-info">
                        <div id="info-element-1">
                        <h5 class="info_title">Produktserie</h5>
                        <h3 class="product_series">${vodka.vodkaSeries}<h3>
                        </div>
                        <div id="info-element">
                        <h5 class="info_title">Alkoholstyrke</h5>
                        <h1 class="product_strength">${vodka.vodkaAlcohol}</h1>
                        </div>
                        <div id="info-element">
                        <h5 class="info_title">Smag</h5>
                        <h3 class="product_notes">${vodka.vodkaNotes}</h3>
                        </div>
                        </div>
                    </div>
                <div id="image_container"></div>
                <img src="${vodka.vodkaImage}" alt="Brænderiet Enghaven spiritusudvalg" class="product_image">
                </div>
                <div id="product-description">
                    <div id="sketch-container">
                        <img src="${vodka.vodkaIllustration}" class="illustration">
                    </div>
                    <p class="product_description">${vodka.vodkaDescription}</p>
                </div>
                <div id="slider-container">
                <h2>Se resten af vores udvalg<h2>
                <div id="vodka-preview"></div>
                </div>
                </article>
                `;
    }
    document.querySelector("#vodka-list").innerHTML = template;
  }

  appendBrandys(brandys) {
    let template = "";
    for (let brandy of brandys) {
      template += /*html*/ `
                    <article id="spirit-products">
                    <div id="product-content">
                    <div id="information-container">
                    <h1 class="product_title">${brandy.brandyName}</h1>
                    <div id="product-info">
                        <div id="info-element-1">
                        <h5 class="info_title">Produktserie</h5>
                        <h3 class="product_series">${brandy.brandySeries}<h3>
                        </div>
                        <div id="info-element">
                        <h5 class="info_title">Alkoholstyrke</h5>
                        <h1 class="product_strength">${brandy.brandyAlcohol}</h1>
                        </div>
                        <div id="info-element">
                        <h5 class="info_title">Smag</h5>
                        <h3 class="product_notes">${brandy.brandyNotes}</h3>
                        </div>
                        </div>
                    </div>
                <div id="image_container"></div>
                <img src="${brandy.brandyImage}" alt="Brænderiet Enghaven spiritusudvalg" class="product_image">
                </div>
                <div id="product-description">
                    <div id="sketch-container">
                        <img src="${brandy.brandyIllustration}" class="illustration">
                    </div>
                    <p class="product_description">${brandy.brandyDescription}</p>
                </div>
                <div id="slider-container">
                <h2>Se resten af vores udvalg<h2>
                <div id="brandy-preview"></div>
                </div>
                </article>
                `;
    }
    document.querySelector("#brandy-list").innerHTML = template;
  }

    appendProducts(products) {
    let htmlTemplate = "";
    for (let product of products) {
      htmlTemplate += /*html*/ `
                <div class="preview" onclick="selectProduct('${product.name}', '${product.series}', '${product.alcohol}', '${product.notes}', '${product.image}', '${product.illustration}', '${product.description}', '${product.spirit}')">
                    <img src="${product.image}" class="preview_image" alt="${product.name}">
                    <h5 class="preview_text">${product.name}</h5>
                </div>
                
          `;
    }
    document.querySelector('#rum-preview').innerHTML = htmlTemplate;
  }

   appendProducts1(products) {
    let htmlTemplate = "";
    for (let product of products) {
      htmlTemplate += /*html*/ `
                <div class="preview" onclick="selectProduct('${product.name}', '${product.series}', '${product.alcohol}', '${product.notes}', '${product.image}', '${product.illustration}', '${product.description}', '${product.spirit}')">
                    <img src="${product.image}" class="preview_image" alt="${product.name}">
                    <h5 class="preview_text">${product.name}</h5>
                </div>
                
          `;
    }
    document.querySelector('#vodka-preview').innerHTML = htmlTemplate;
  }

  appendProducts2(products) {
    let htmlTemplate = "";
    for (let product of products) {
      htmlTemplate += /*html*/ `
                <div class="preview" onclick="selectProduct('${product.name}', '${product.series}', '${product.alcohol}', '${product.notes}', '${product.image}', '${product.illustration}', '${product.description}', '${product.spirit}')">
                    <img src="${product.image}" class="preview_image" alt="${product.name}">
                    <h5 class="preview_text">${product.name}</h5>
                </div>
                
          `;
    }
    document.querySelector('#brandy-preview').innerHTML = htmlTemplate;
  }


}

const productService = new ProductService();
export default productService;
