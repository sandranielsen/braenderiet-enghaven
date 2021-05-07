export default class VisitPage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="visit" class="page">
            <div id="banner-container">
            <img src="./media/forside.jpg" alt="Enghaven event" class="banner_img">
            <div id="overlay"></div>
            <div id="banner-content">
                <h2 class="article_headline">Besøg</h2>
                <p class="article_text">Er I en forening, virksomhed eller en gruppe, der gerne vil
                    prøve noget anderledes? Brænderiet Enghaven byder indenfor til prøvesmagning, rundvisning,
                    gourmet snacks og cocktails. Du kan også få lavet din helt egen spiritus. Vælg jeres pakke,
                    og vi sammensætter et spændende arrangement for jer.</p>
        </div>
        </div>
        
        <div id="article-container">
                    <div id="article-content">
                        <h4 class="article_type">Den populære</h4>
                        <h2 class="article_headline">Gourmetpakken</h2>
                        <p class="article_text">Gourmetpakken består af prøvesmagning af Brænderiet Enghavens produkter,
                            rundvisning og fortælling om Brænderiet, et udvalg af cocktail lavet af Brænderiets produkter
                            samt gourmet snacks. Min. 10 personer.</p>
                        <a href="#" class="black_link">395 DKK pr. person</a>
                    </div>
                    <img src="./media/besøg-os.jpg" alt="Gourmetpakken" class="article_img">
                </div>

                <div id="article-container-1">
                    <img src="./media/besøg-os-3.jpg" alt="Enghaven brændevin" class="article_img_1">
                    <div id="article-content">
                        <h2 class="article_headline">Smagning</h2>
                        <p class="article_text">Vi tilbyder smagning af Brænderiet Enghaven produkter samt rundvisning og
                            fortælling om vores historie og produktionen. Min. 10 personer.</p>
                        <a href="#" class="black_link">195 DKk pr. person</a>
                    </div>
                </div>

                <div id="article-container">
                    <div id="article-content">
                        <h2 class="article_headline">Smagning og pølsebord</h2>
                        <p class="article_text">Ønsker du at tilføje lidt ekstra til jeres smagning, rundvisning og fortælling
                            om vores historie og produktion. Så har du mulighed for, at få et pølsebord til, som vores lokale
                            slagter sørger for. Min. 10 personer.</p>
                        <a href="#" class="black_link">295 DKK pr. person</a>
                    </div>
                    <img src="./media/om-brænderiet-4.jpg" alt="Smagning" class="article_img">
                </div>

                <div id="article-container-1">
                    <img src="./media/besøg-os-5.jpg" alt="Enghaven brændevin" class="article_img_1">
                    <div id="article-content">
                        <h2 class="article_headline">Smagning og cocktail</h2>
                        <p class="article_text">Smagning & Cocktail består af smagning af Brænderiet Enghavens produkter, rundvisning
                            og fortælling om Brænderiet. Derudover vil der blive serveret cocktails lavet af Brænderiet Enghavens produkter.
                            Min. 10 personer.</p>
                        <a href="#" class="black_link">295 DKk pr. person</a>
                    </div>
                </div>

                <div id="article-container">
                    <div id="article-content">
                        <h2 class="article_headline">Destilleripakken</h2>
                        <p class="article_text">Destilleri-pakken består af jeres egen eller virksomhedens vodka eller gin. I bestemmer
                            sammensætningen af råvarerne og kan altid sparre med vores uddannede kok omkring smagskombinationerne. Skal
                            meldes ud senest 14 dage inden besøget. Min. 10 personer. 150 flasker består af et batch og flaskerne kan enten
                            deles ud på gæsterne eller laves som firmaflaske. Etikette kan specialdesignes.</p>
                        <a href="#" class="black_link">200 DKK pr. flaske (min. 150 flasker)</a>
                    </div>
                    <img src="./media/besøg-os-4.jpg" alt="Enghaven udvalg" class="article_img">
                </div>

                <div id="info-container">
                    <div id="overlay-1"></div>
                    <div id="info-content">
                    <h2 class="info_headline">Gaarden Enghaven</h2>
                    <p class="info_text">Kunne i tænke jer en sanseoplevelse ud over det sædvanlige? Læs mere om vores rundvisninger,
                        smagninger og andre arrangementer og book dem gennem vores event portal. Vi ser frem til at høre fra jer!</p>
                    <button class="info_btn" onclick="navigateTo('gaarden')">Læs mere</button>
                    </div>

                </div>

        </section>
    `;
    }
}