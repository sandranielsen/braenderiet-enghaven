export default class AboutPage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="about" class="page">
            <div id="banner-container">
            <img src="./media/om-brænderiet-2.jpg" alt="Enghaven produkt udvalg" class="banner_img">
            <div id="overlay"></div>
            <div id="banner-content">
                <h2 class="article_headline">Om brænderiet</h2>
                <p class="article_text">Brænderiet Enghaven er en del af gården Enghaven, der er beliggende i den
                    idylliske landsby Mellerup små 15km udenfor Randers. Enghavens æbletræer indgår i produktionen af
                    æbler ligesom Brænderiet er beliggende på Enghaven.</p>
        </div>
        </div>

        <div id="article-container">
                    <div id="article-content">
                        <h4 class="article_type">Enghaven</h4>
                        <h2 class="article_headline">En gård med historie</h2>
                        <p class="article_text">Enghaven er en slægtsgård, hvor Erik og Esben Moestrup er henholdsvis 4. og 5. generation.
                            Enghavens nyere historie begynder i 1807, hvor gården bliver købt af Christen Boldsen. Pengene til gården har
                            Christen skabt under kaperkrigen der fandt sted fra 1807 til 1814 og hvori han demonstrerede stort heltemod.
                            Historien lyder, at galeasen ”Helene Charlotte”, hvor Christian Boldsen var styrmand, den 31.12.1808 blev
                            kapret af svenske kapere/sørøvere. Det lykkes Christen med hjælpere at tilbageerobre skibet og få det sikkert havn.
                            Dette gjorde ham til en meget velhavende mand, og han startede en ombygning af Enghaven. </p>
                        <p class="article_text">Gården fortsatte i Boldsen slægten frem til 1881, hvor Niels Kristian Moestrup købte Enghaven.
                            Herefter har gården Enghaven været i familien Moestrups eje..</p>
                    </div>
                    <img src="./media/om-brænderiet-3.jpg" alt="Enghaven" class="article_img">
                </div>

        <div id="article-container">
                    <img src="./media/om-brænderiet.jpg" alt="Destillation" class="article_img_3">
                    <div id="article-content">
                        <h4 class="article_type">Brænderiet</h4>
                        <h2 class="article_headline">Brænderiet</h2>
                        <p class="article_text">Brænderiet Enghaven blev etableret i løbet af sommeren og efteråret 2007 af Esben Moestrup,
                            Erik Moestrup og Mikkel Nordkvist, og vi er det første jyske destilleri og et af de første i hele Danmark der
                            begyndte at producere frugtbrændevin af den Eau-de-Vie variant. Igennem længere tid havde vi gået og puslet med
                            tanken om at bruge vores egne råvarer, erfaringer og interesser til at frembringe en mikroproduktion af ædel
                            frugtbrændevin af den fineste kvalitet. Gården Enghaven er den perfekte ramme for produktion af frugtbrændevin, da vi har det hele
                            lige uden for døren. Rent og fint kildevand og frugtbar jord, hvor frugttræerne hvert år leverer de dejligste
                            smagfulde frugter. </p>
                        <p class="article_text">Men passion for det man laver er ikke helt tilstrækkeligt for at sætte en produktion i gang, så i tiden efter den
                            29. oktober 2007, hvor selskabet ”Brænderiet Enghaven A/S” officielt blev stiftet, brugte vi en masse energi på at indhente de nødvendige
                            tilladelser for at producere brændevin. Blandt andet søgte vi om støtte hos Landdistriktsprogrammet, der har til formål at give befolkningen
                            gode muligheder for at leve i og af landdistrikterne. Brænderiet Enghaven fik den maksimale støtte procent til projektet. Dette er vi stolte
                            af og ser det som en anerkendelse af vort forehavende.</p>
                        <p class="article_text">Først på sommeren 2008 var alle de nødvendige tilladelser i hus og den 25. juni 2008 ankom hjertet i produktionen – brænderen
                            fra Müller Brennereianlagen Gmbh. Brænderen er håndsmedet i kobber og rustfrit stål. Vor brænder er af den patenterede type aRoMat – der er det
                            ypperste, når det handler om at få optimal aroma og smag i brændevinen samt opnåelse af renheden i alkoholen.Den 26. juni 2008 blev den første Elshoff
                            brændevin brændt og sat til lagring.</p>
                    </div>
                </div>
        
        <div id="article-container">
        <div id="article-content">
            <h4 class="article_type">Personerne bag</h4>
            <h2 class="article_headline">Et kompentent team</h2>
            <div id="article-columns">
                <div>
            <p class="article_text">Vi er tre mand der står bag Brænderiet Enghaven: Mikkel Nordkvist, Erik og Esben Moestrup. Mikkel Nordkvist er
                uddannet civilingeniør indenfor kemiområdet og har en PhD-grad i bioteknologi. Mikkel har arbejdet professionelt med gæring og
                destillationsprocesser både under sin uddannelse og senere igennem sit arbejde. På brænderiet er Mikkel ansvarlig for produktionsprocesserne,
                så selve brænderiet lever op til de højeste standarder.</p>
            <p class="article_text">Erik Moestrup er uddannet landbrugstekniker. Erik har hele sit arbejdsliv være beskæftiget indenfor den statslige jordbrugs-
                og planteforskning. På brænderiet er Erik ansvarlig for dels vor egen produktion af frugter samt for, at de frugter, vi får fra andre avlere,
                lever op til de kvalitetskrav, vi stiller.</p>
            </div>
            <div>
            <p class="article_text">Esben Moestrup er uddannet cand. mag. i samfundsfag, filosofi og historie og underviser på Teknisk Gymnasium Randers. På brænderiet er Esben
                ansvarlig for den daglige drift.</p>
            <ul class="list">Vores kompetencer gør at vi tilsammen kan sikre at Brænderiet Enghaven:</ul>
            <li class="list_items">Har fuld kontrol over og dokumentation af produktionen – fra jord til bord</li>
            <li class="list_items">Har ekspertise indenfor de områder som er nødvendige for at producere brændevin</li>
            <li class="list_items">Har egen produktion af råvarer samt fast tilknyttede små frugtplantager</li>
            <li class="list_items">Skaber produkter der afspejler en passion for det vi laver</li>
            </div>
            </div>
            <img src="./media/om-brænderiet-4.jpg" alt="Esben Moestrup" class="article_img_2">
    
        </div>
        
        </section>
    `;
    }
}