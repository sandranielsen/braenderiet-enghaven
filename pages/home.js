import {
     firebaseDB
} from "../services/firebase_config.js";

export default class HomePage {
    constructor() {
        this.previewRef = firebaseDB.collection("products").limit(7);
        this.template();
        this.read();
    }

    read() {
        this.previewRef.onSnapshot(snapshotData => {
            let previews = [];
            snapshotData.forEach(doc => {
                let preview = doc.data();
                preview.id = doc.id;
                previews.push(preview);
            });
            this.appendPreviews(previews);
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
                            <li><button class="product_items" onchange="categorySelected(this.value)">Vodka</button></li>
                            <li><button class="product_items" onchange="categorySelected(this.value)">Rom</button></li>
                            <li><button class="product_items" onchange="categorySelected(this.value)">Whisky</button></li>
                            <li><button class="product_items" onchange="categorySelected(this.value)">Brændevin</button></li>
                            <li><button class="product_items" onchange="categorySelected(this.value)">Dessertvin</button></li>
                            <li><button class="product_items" onchange="categorySelected(this.value)">Æblemost</button></li>
                        </ul>
                        <div id="product-slider"></div>
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
    appendPreviews(previews) {
        let htmlTemplate = "";
        for (let preview of previews) {
            htmlTemplate += /*html*/ `
                <div class="preview" onclick="selectProduct('${preview.name}', '${preview.series}', '${preview.alcohol}', '${preview.image}', '${preview.illustration}', '${preview.description}')">
                    <img src="${preview.image}" alt="${preview.title}">
                    <h5 class="preview_text">${preview.name}</h5>
                </div>
                
          `;
        }
        document.querySelector('#product-slider').innerHTML = htmlTemplate;
    }
    
}

