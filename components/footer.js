export default class footerSection {
    constructor() {
        this.template();
    }

    template() {
        document.querySelector("#app").innerHTML += /*html*/ `
      <footer class="footer">
          <div id="footer-container">
                <h3 class="footer_headline">Kontakt</h3>
                <div id="footer-content">
                <a href="mailto:info@braenderiet-enghaven.dk" class="contact_link">info@braenderiet-enghaven.dk</a>
                <p class="footer_info">(+45) 51860206<p>
                <p class="footer_info">CVR: 30925890<p>
            </div>
            <h5 class="footer_headline">Adresse</h5>
            <div id="footer-content">
            <p class="footer_info">Amtsvejen 133, Mellerup<p>
            <p class="footer_info">8930 Randers NØ<p>
            </div>
        </div>

        <div id="footer-container">
            <h3 class="footer_headline">Social</h3>
            <div id="footer-content">
            <a href="https://www.facebook.com/BraenderietEnghaven/" class="contact_link">Facebook</a><br>
            <a href="https://www.instagram.com/braenderietenghaven/" class="contact_link">Instagram</a><br><br>
            <a href="#" class="contact_link">Tilmeld dig vores nyhedsbrev</a>
        </div>
        </div>

        <div id ="footer-container">
            <h3 class="footer_headline">Forhandlere</h3>
            <div id="partner-content">
            <a href="#"><img src="./media/Water-of-life-logo.png" alt="logo" class="partner_img">
            <a href="#"><img src="./media/NF-Logo.png" alt="logo" class="partner_img">
            <a href="#"><img src="./media/Craft-makers-collective.png" alt="logo" class="partner_img">
            <a href="#"><img src="./media/vin-gaven.png" alt="logo" class="partner_img">
            </div>
        </div>
          

    </footer>
    `;
    }
}