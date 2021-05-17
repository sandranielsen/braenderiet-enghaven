import {
    firebaseDB
} from "../services/firebase_config.js";

class ProductService {
    constructor() {
        this.vodkaRef = firebaseDB.collection("vodka");
        this.rumRef = firebaseDB.collection("rum");
        this.brandyRef = firebaseDB.collection("brandy");
    }

    init() {
        
        // initing all products
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
     
    // appending the products
    appendVodkas(vodkas) {
        let template = "";
        for (let vodka of vodkas) {
            template += /*html*/ `
                    <article id="spirit-products" onclick="selectVodka('${vodka.vodkaName}', '${vodka.vodkaSeries}', '${vodka.vodkaAlcohol}', '${vodka.vodkaNotes}', '${vodka.vodkaImage}', '${vodka.vodkaIllustration}', '${vodka.vodkaDescription}' )">
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
                <img src="${vodka.vodkaImage}" class="product_image">
                </div>
                <div id="product-description">
                    <div id="sketch-container">
                        <img src="${vodka.vodkaIllustration}" class="illustration">
                    </div>
                    <p class="product_description">${vodka.vodkaDescription}</p>
                </div>

                </article>
                `;
        }
        document.querySelector("#product-list").innerHTML = template;
    }

    appendRums(rums) {
        let template = "";
        for (let rum of rums) {
            template += /*html*/ `
                    <article id="spirit-products" onclick="selectRum('${rum.rumName}', '${rum.rumSeries}', '${rum.rumAlcohol}', '${rum.rumNotes}', '${rum.rumImage}', '${rum.rumIllustration}', '${rum.rumDescription}' )">
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
                <img src="${rum.rumImage}" class="product_image">
                </div>
                <div id="product-description">
                    <div id="sketch-container">
                        <img src="${rum.rumIllustration}" class="illustration">
                    </div>
                    <p class="product_description">${rum.rumDescription}</p>
                </div>

                </article>
                `;
        }
        document.querySelector("#product-list").innerHTML = template;
    }

    appendBrandys(brandys) {
        let template = "";
        for (let brandy of brandys) {
            template += /*html*/ `
                    <article id="spirit-products" onclick="selectBrandy('${brandy.brandyName}', '${brandy.brandySeries}', '${brandy.brandyAlcohol}', '${brandy.brandyNotes}', '${brandy.brandyImage}', '${brandy.brandyIllustration}', '${brandy.brandyDescription}' )">
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
                <img src="${brandy.brandyImage}" class="product_image">
                </div>
                <div id="product-description">
                    <div id="sketch-container">
                        <img src="${brandy.brandyIllustration}" class="illustration">
                    </div>
                    <p class="product_description">${brandy.brandyDescription}</p>
                </div>

                </article>
                `;
        }
        document.querySelector("#product-list").innerHTML = template;
    }




}

const productService = new ProductService();
export default productService;