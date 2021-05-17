import {
     firebaseDB
} from "../services/firebase_config.js";

export default class HomePage {
    constructor() {
        this.vodkaRef = firebaseDB.collection("vodka").limit(4);
        this.rumRef = firebaseDB.collection("rum").limit(4);
        this.brandyRef = firebaseDB.collection("brandy").limit(4);
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

    

    // Home page template
    template() {
        document.querySelector("#app").innerHTML += /*html*/`
            <section id="home" class="page">
                <div id="banner-container" onscroll="fixedNav()">
                     <video autoplay loop muted src="./media/banner.mp4" class="video"></video>
                    <div id="overlay"></div>
                    <div id="banner-content-home">
                        <h4 class="article_type">Grundlagt i 2007</h4>
                        <h2 class="banner_headline">Kvalitetsspiritus lavet med respekt for naturen</h2>
                    </div>
                    </div>
                
                <div id="product-overview">
                    <h4 class="article_type">Produkter</h4>
                    <h2 class="article_headline">Gå på opdagelse i unikt univers af kvalitetsspiritus</h2>

                    <div id="product-container">
                        <ul class="product_types">
                            <li><button class="product_items" onclick="showVodka()">Vodka</button></li>
                            <li><button class="product_items" onclick="showRum()">Rom</button></li>
                            <li><button class="product_items">Whisky</button></li>
                            <li><button class="product_items" onclick="showBrandy()">Brændevin</button></li>
                            <li><button class="product_items">Dessertvin</button></li>
                            <li><button class="product_items">Æblemost</button></li>
                        </ul>
                        <div id="sliders">
                        <div id="vodka-slider"></div>
                        <div id="rum-slider"></div>
                        <div id="brandy-slider"></div>
                        </div>
                    </div>
                </div>
    </div>

                <div id="about-container">
                    <img src="./media/gaarden.svg" alt="logo" class="about_img">
                    <div id="about-content">
                        <h4 class="article_type">Om brænderiet</h4>
                        <h2 class="article_headline">Et destilleri med en historie</h2>
                        <p class="article_text">I generationer var gården, som i dag huser Brænderiet Enghaven, ejet af
                            Christian Boldsen som var en sand dannebrogshelt. Hans historie er som taget ud fra en sørøverhistorie hvor helten trodser
                            odds og fornuft og følger sit mod og sit hjerte – og vinder. Det er hans fortælling der danner grundlag for den rom som
                            brænderiet i dag producerer.</p>
                        <a href="#about" class="white_link">Læs mere om gårdens historie</a>
                    </div>
                </div>

                <div id="article-container">
                    <div id="article-content">
                        <h4 class="article_type">Fra jord til bord</h4>
                        <h2 class="article_headline">Kvalitetsråvarer og lokal produktion</h2>
                        <p class="article_text">Brænderiet Enghaven har en drøm og en mission med det vi laver. Vi ønsker at levere produkter af den
                            fineste og bedste kvalitet. Vi vil tilbyde produkter med en enestående smagsoplevelse. En af måderne vi kan sikre dette
                            er ved at være til stede i hele processen ”fra jord til bord”. Vi ved hvad der foregår og holder nøje øje med hvert lille
                            skridt for derved at sikre maksimal smag og aromakoncentration i det endelige produkt. </p>
                        <p class="article_text">Vi fokuserer på det gode håndværk,
                            en høj hygiejnestandard og sporbarhed gennem processerne. For os er kvalitet vigtigere end kvantitet.</p>
                        <a href="#concept" class="black_link">Læs mere om vores fra jord til bord koncept</a>
                    </div>
                    <img src="./media/fra-jord-til-bord.jpg" alt="æbler" class="article_img">
                </div>

                <div id="article-container">
                    <img src="./media/forside.jpg" alt="Enghaven event" class="article_img_1">
                    <div id="article-content">
                        <h4 class="article_type">Besøg os</h4>
                        <h2 class="article_headline">Vi byder indenfor</h2>
                        <p class="article_text">Har du lyst til at opleve et destilleri i aktion? Vi har flere forskellige pakkeløsninger til din forening,
                            virksomhed eller til større arrangementer.</p>
                        <p class="article_text">Brænderiet Enghaven byder indenfor til en enestående, lokal smagsoplevelse i form af prøvesmagninger af vores
                            forskellige spiritus, rundvisninger af vores gård og destilleri mm. Du kan også få lavet din helt egen spiritus.</p>
                        <p class="article_text">Hvis det skulle have interesse så tag et kig på vores forskellige pakkeløsninger på linket herunder.</p>
                        <a href="#visit" class="black_link">Besøg brænderiet</a>
                    </div>
                </div>


            </section>
        `;
    }

    // appending the product previews
    
    appendVodkas(vodkas) {
        let htmlTemplate = "";
        for (let vodka of vodkas) {
            htmlTemplate += /*html*/ `
                <div class="preview" onclick="selectVodka('${vodka.vodkaName}', '${vodka.vodkaSeries}', '${vodka.vodkaAlcohol}', '${vodka.vodkaNotes}', '${vodka.vodkaImage}', '${vodka.vodkaIllustration}', '${vodka.vodkaDescription}')">
                    <img src="${vodka.vodkaImage}" alt="${vodka.vodkaName}">
                    <h5 class="preview_text">${vodka.vodkaName}</h5>
                </div>
                
          `;
        }
        document.querySelector('#vodka-slider').innerHTML = htmlTemplate;
    }

    appendRums(rums) {
        let htmlTemplate = "";
        for (let rum of rums) {
            htmlTemplate += /*html*/ `
                <div class="preview" onclick="selectRum('${rum.rumName}', '${rum.rumSeries}', '${rum.rumAlcohol}', '${rum.rumNotes}', '${rum.rumImage}', '${rum.rumIllustration}', '${rum.rumDescription}')">
                    <img src="${rum.rumImage}" alt="${rum.rumName}">
                    <h5 class="preview_text">${rum.rumName}</h5>
                </div>
                
          `;
        }
        document.querySelector('#rum-slider').innerHTML = htmlTemplate;
    }

    appendBrandys(brandys) {
        let htmlTemplate = "";
        for (let brandy of brandys) {
            htmlTemplate += /*html*/ `
                <div class="preview" onclick="selectBrandy('${brandy.brandyName}', '${brandy.brandySeries}', '${brandy.brandyAlcohol}', '${brandy.brandyNotes}', '${brandy.brandyImage}', '${brandy.brandyIllustration}', '${brandy.brandyDescription}')">
                    <img src="${brandy.brandyImage}" alt="${brandy.brandyName}">
                    <h5 class="preview_text">${brandy.brandyName}</h5>
                </div>
                
          `;
        }
        document.querySelector('#brandy-slider').innerHTML = htmlTemplate;
    }

    showVodka() {
        let x = document.getElementById("vodka-slider");
        let y = document.querySelectorAll("#rum-slider, #brandy-slider");
        if (x.style.display === "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
            y.style.display = "flex";
        }
    }

    showRum() {
        let x = document.getElementById("rum-slider");
        let y = document.querySelectorAll("#vodka-slider, #brandy-slider");
        if (x.style.display === "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
            y.style.display = "none";
        }
    }

    showBrandy() {
        let x = document.getElementById("brandy-slider");
        let y = document.querySelectorAll("#rum-slider, #vodka-slider");
        if (x.style.display === "none") {
            x.style.display = "flex";
        } else {
            x.style.display = "none";
            y.style.display = "none";
        }
    }

}

