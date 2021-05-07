export default class ConceptPage {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
        <section id="concept" class="page">
            <div id="banner-container">
            <img src="./media/fra-jord-til-bord.jpg" alt="Enghaven produkt udvalg" class="banner_img">
            <div id="overlay"></div>
            <div id="banner-content">
                <h2 class="article_headline">Fra jord til bord</h2>
                <p class="article_text">Brænderiet Enghaven har en drøm og en mission med det vi laver.
                    Vi ønsker at levere produkter af den fineste og bedste kvalitet. Vi vil tilbyde produkter
                    med en enestående smagsoplevelse. En af måderne vi kan sikre dette er ved at være til
                    stede i hele processen ”fra jord til bord”. Vi ved hvad der foregår og holder nøje øje
                    med hvert lille skridt for derved at sikre maksimal smag og aromakoncentration i det
                    endelige produkt.</p>
            </div>
            </div>

    <div id="article-container">
                    <div id="article-content">
                        <h4 class="article_type">Koncept</h4>
                        <h2 class="article_headline">Naturen i centrum</h2>
                        <p class="article_text">Vi fokuserer på det gode håndværk, en høj hygiejnestandard og sporbarhed gennem processerne.
                            For os er kvalitet vigtigere end kvantitet. Efter frugten er kommet i hus håndsorterer, håndvasker og moser vi frugten.
                            Der tilsættes intet andet end gær for at starte den gæringen af frugten som i sidste ende fører til udvikling af alkohol.
                            På denne måde sikrer vi en så høj naturlig aromakoncentration som muligt i modsætning til lignende produkter, hvor der er
                            tilsat sukker. Tilsætning af sukker er en ofte anvendt teknik med det formål at opnå mere alkohol på råvarer, der er
                            meget billigere end dansk frugt.</p>
                        <p class="article_text">Efter destillation af den færdiggærede frugt fortynder vi destillatet til den ønskede alkoholstyrke.
                            Vi benytter naturligvis eget naturligt springende kildevand fra Enghaven til denne fortynding. Herefter er frugtbrændevinen
                            klar til lagring, filtrering og aftapning. Sporbarheden sikrer vi ved at hver enkelt flaske udstyres med en etiket med
                            oplysninger om de væsentligste trin i tilblivelsen af lige nøjagtig denne flaske.</p>
                    </div>
                    <img src="./media/om-brænderiet-2.jpg" alt="Enghaven" class="article_img">
                </div>

        <div id="article-container">
                    <img src="./media/fra-jord-til-bord-3.jpg" alt="Frugtplantage" class="article_img_1">
                    <div id="article-content">
                        <h4 class="article_type">Ingredienser</h4>
                        <h2 class="article_headline">Egenproducerede råvarer</h2>
                        <p class="article_text">Æbler er hovedfrugten i Brænderiet Enghavens frugtbrændevine, både fordi æbler giver en fantastisk brændevin,
                            men også fordi Danmarks klima er utroligt velegnet til dyrkning af æbler af høj kvalitet. </p>
                        <p class="article_text">Vi ønsker bl.a. at bruge gamle æblesorter som udgangspunkt for brændevinen. Mange af de gamle sorter er aromatiske,
                            med en fin duft og en karakteristisk krydret smag, hvilket er egenskaber, vi ønsker at overføre til frugtbrændevinen. De gamle sorter
                            giver ofte små æbler, hvilket er et plus, da der er mest ”kraft” og aromakoncentration i disse. Brænderiet bruger kun frugt af egen avl
                            samt frugt fra et par mindre frugtavlere i regionen, der lever op til de standarder for produktion af frugt af høj kvalitet, som vi ønsker.
                            Frugten plukkes med særligt henblik på brænding til brændevin på et tidspunkt, hvor sukkerindhold og aroma er optimalt.</p>
                    </div>
                </div>
        
        <div id="article-container">
                    <div id="article-content">
                        <h4 class="article_type">Leverandører</h4>
                        <h2 class="article_headline">Samarbejde med lokalsamfundet</h2>
                        <p class="article_text">I det omfang vi ikke selv kan levere de nødvendige frugter for produktionen får vi dem leveret fra 3 mindre lokale frugtavlere,
                            der bl.a. kan levere gamle danske æblesorter.</p>
                        <ul class="list">Disse frugtleverandører omfatter:</ul>
                        <li class="list_items">Søbys frugtplanatage</li>
                        <li class="list_items">Sauers frugtplanatage</li>
                        <li class="list_items">Christian Hansens økologiske grugtplantage</li>
                    </div>
                    <img src="./media/om-brænderiet-2.jpg" alt="Enghaven" class="article_img">
                </div>
        
        <div id="process-graphics">
            <h2 class="process_headline">Sådan laves vores brændevin</h2>
            <div id="graphics-section">
                <div id="graphics-content">
                <div id="graphics-step">
                    <h1>1</h1>
                </div>
                <img src="./media/æble-hvid.svg" alt="Æble" class="graphics_img">
                <div id="graphics-content">
                <h3 class="graphics_headline">Mæskning</h3>
                <p class="graphics_text">Når vi modtager æblerne på Brænderiet Enghaven håndsorterer og håndvasker
                    vi dem, og vi skærer evt. pletter bort, inden æblerne moses. Herefter pumper vi den knuste frugt –
                    mæsken – til en gæringstank, hvorefter vi tilsætter gær – og ikke andet end gær, og gæringen går
                    i gang.</p>
                </div>
                </div>
            <div id="graphics-animation">
                <!-- Animate Dashed line - based off https://css-tricks.com/svg-line-animation-works -->
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 584.615 481.307">
                <path class="path" id="path-1" data-name="Path 2905" d="M16174.44,14808.075c221.583-1.38,216.661,183.973,216.661,183.973s14.9,203.365,196.953,221.475,170.273,75.255,170.273,75.255"
                transform="translate(-16174.438 -14807.571)" fill="none" stroke="#ffffff" stroke-width="1" stroke-dasharray="20"/></svg>
            </div>
            </div>

            <div id="graphics-section">
                <div id="graphics-animation">
                <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 751.454 879.81">
                <path class="path" id="path-2" data-name="Path 2906" d="M0,443.493c223.2,1.564,248.173-309.429,248.173-309.429S268.52-53.955,407.238-68.769C424-70.558,661.79-78.945,657.622-361.6"
                transform="translate(697.339 520.901) rotate(-173)" fill="none" stroke="#ffffff" stroke-width="1" stroke-dasharray="20"/></svg>
            </div>
                <div id="graphics-content">
                <div id="graphics-step">
                    <h1>2</h1>
                </div>
                <img src="./media/gæring-hvid.svg" alt="Gæring" class="graphics_img">
                <div id="graphics-content">
                <h3 class="graphics_headline">Gæring</h3>
                <p class="graphics_text">Vi tilsætter således ikke sukker, som det ellers ses nogle steder. Når nogle
                    producenter vælger at tilsætte sukker skyldes det, at de på denne kan få mere alkohol ud af
                    gæringen ved hjælp af en råvare (sukker), der er væsentligt billigere end dansk frugt.
                    Konsekvensen er imidlertid, at forholdet mellem frugtaroma og alkohol mindskes, og det ønsker
                    vi under ingen omstændigheder.</p>
                <p class="graphics_text">Under gæringen omsættes sukkeret i frugten til alkohol, ligesom en række
                    aromastoffer dannes under processen. Vi gærer ved relativt lav temperaturer, hvilket godt nok
                    fører til, at gæringen foregår langsommere end ellers, men også at der udvikles flest muligt
                    af de aromastoffer, vi ønsker. Vi kunne ved at gære ved en højere temperatur lave en større
                    mængde brændevin end ellers, men igen ønsker vi ikke at gå på kompromis med kvaliteten. </p>
                </div>
                </div>
            </div>

            <div id="graphics-section">
                <div id="graphics-content">
                <div id="graphics-step">
                    <h1>3</h1>
                </div>
                <img src="./media/destillation.png" alt="Destillationsapparat" class="graphics_img">
                <div id="graphics-content">
                <h3 class="graphics_headline">Destillation</h3>
                <p class="graphics_text">Når mæsken er færdiggæret efter 4-10 uger destillerer vi den i vores
                    destillationsapparat. Under opvarmning af mæsken i destillationsapparatet fordamper den
                    dannede alkohol, en række aromakomponenter samt andre flygtige stoffer. Disse dampe kondenseres,
                    og vi opsamler dem.</p>
                <p class="graphics_text">Det første destillat, der opsamles, kaldes ’hovedet’ eller forløbssprit.
                    Hovedet indeholder foruden sprit bl.a. en række udrikkelige komponenter. Vi dufter derfor
                    løbende til destillatet for at sikre os, at al forløbssprit kasseres. Selv et par enkelte
                    dråber forløbssprit i det endelige produkt kan ødelægge produktet helt og holdent. Det
                    andet destillat er ’hjertet’, der er rigt i de ønskede aromakomponenter. Det er denne sprit,
                    der danner basis for vores ægte frugtbrændevine.Efter hjertet kommer ’halen’, der ikke er
                    ligeså rig i aromakomponenter. Vi dobbeltdestillerer halen, dvs. udsætter den for en ’ekstra’
                    destillation for derved at få en forholdsvis neutral sprit. Denne sprit danner udgangspunkt
                    for vores smagsatte brændevine, der smagssættes med forskellige danske bær og/eller urter.
                    I nogle tilfælde ønsker vi en klart brændevin med smag af de bær eller urter, der er
                    benyttet til smagssætning, og så destillerer vi nok engang.</p>
                <p class="graphics_text">
                    De tre destillatfraktioner ’hoved’, ’hjerte’ og ’hale’ kommer i umiddelbart forlængelse af
                    hinanden, og det er således op til brændevinsmagerens håndværk at sikre sig, at der ikke
                    kommer halesprit med i hjertet samt bestemme, hvornår hjertet skal adskilles fra halen.
                    Vi dufter, smager og føler derfor på destillatet under hele destillationen.</p>
                </div>
                </div>
            <div id="graphics-animation">
                <svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 584.615 481.307">
                <path class="path" id="path-3" data-name="Path 2905" d="M16174.44,14808.075c221.583-1.38,216.661,183.973,216.661,183.973s14.9,203.365,196.953,221.475,170.273,75.255,170.273,75.255"
                transform="translate(-16174.438 -14807.571)" fill="none" stroke="#ffffff" stroke-width="1" stroke-dasharray="20"/></svg>
            </div>
            </div>

            <div id="graphics-section">
                <div id="graphics-animation">
                <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 751.454 879.81">
                <path class="path" id="path-4" data-name="Path 2906" d="M0,443.493c223.2,1.564,248.173-309.429,248.173-309.429S268.52-53.955,407.238-68.769C424-70.558,661.79-78.945,657.622-361.6"
                transform="translate(697.339 520.901) rotate(-173)" fill="none" stroke="#ffffff" stroke-width="1" stroke-dasharray="20"/></svg>
                </div>
                <div id="graphics-content">
                <div id="graphics-step">
                    <h1>4</h1>
                </div>
                <img src="./media/tønde-hvid.svg" alt="Lagringstønder" class="graphics_img">
                <div id="graphics-content">
                <h3 class="graphics_headline">Forskæring og lagring</h3>
                <p class="graphics_text">Når brændevinen er brændt skal den lagres. På Brænderiet Enghaven lagrer
                    vi primært destillaterne på rustfri beholdere. Vi tilstræber at gøre dette ved svingende temperatur,
                    hvilket brændevinsmagere har gjort gennem generationer for at sikre en god udvikling af produktet.
                    Efter ca. 2-4 uger fortynder vi destillatet til drikkestyrke med kildevand fra en af Enghavens
                    naturligt springende kilder. Herefter lagrer brædevinen yderligere 1-2 måneder for at få mulighed
                    for at ’falde til ro’ inden aftapning på flaske. Vi lagrer en del af årets produktion på træfade
                    i en længrere periode for at producere brændevin, der har integreret en del af fadet i sin smagspalette.</p>
                </div>
                </div>
            </div>

            <div id="graphics-section">
                <div id="graphics-content">
                <div id="graphics-step">
                    <h1>5</h1>
                </div>
                <img src="./media/tap-hvid.svg" alt="Brændevin på fad" class="graphics_img">
                <div id="graphics-content">
                <h3 class="graphics_headline">Tapning og etikettering </h3>
                <p class="graphics_text">Endelig filterer brændevinen og tappes på flaske. For at sikre sporbarheden af hver enkelt
                     flaske etikerer vi slutteligt flasken, så den indeholder oplysninger om alle de vigtige trin i tilblivelsen
                     af hver enkelt flaske.</p>
                <p class="graphics_text">Herefter er frugtbrændevin klar til at blive nydt i fulde drag. Vi håber, at du vil nyde
                    den ligeså meget, som vi har nydt at fremstille den.</p>
                
                </div>
                </div>
            <div id="graphics-animation">
            </div>
            </div>


        </div>
    
        
        </section>
    `;
    }
}