// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import ProductsPage from "./pages/products.js";
import AboutPage from "./pages/about.js";
import ConceptPage from "./pages/concept.js";
import VisitPage from "./pages/visit.js";
import ShopPage from "./pages/shop.js";
import DetailsPage from "./pages/product-details.js";
import FooterSection from "./components/footer.js";
import spaService from "./services/spa.js";
import productService from "./services/product-service.js";

// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let productsPage = new ProductsPage();
let aboutPage = new AboutPage();
let conceptPage = new ConceptPage();
let visitPage = new VisitPage();
let shopPage = new ShopPage();
let detailsPage = new DetailsPage();
let footerSection = new FooterSection();

// init services
spaService.init();
productService.init();

window.pageChange = () => spaService.pageChange();
window.navigateTo = (pageId) => spaService.navigateTo(pageId);
window.fixedNav = () => navigation.fixedNav();

window.selectSpirit = (name, image, background) => {
    let nameInput = document.querySelector('.spirit-name');
    let imageInput = document.querySelector('.spirit_item"');
    nameInput.textContent = name;
    imageInput.style.backgroundImage = image;
    spaService.navigateTo("product-details");
}


window.selectProduct = (productName, productSeries, productStrength, productImage, productIllustration, productDescription) => {
    let productNameInput = document.querySelector('.product_name');
    let productSeriesInput = document.querySelector('.product_titles');
    let productStrenghtInput = document.querySelector('.product_titles');

    let productImageInput = document.querySelector('#product_image');
    let productIllustrationInput = document.querySelector('#product_illustration');
    let productDescriptionInput = document.querySelector('.product_description');
    productNameInput.textContent = productName;
    productSeriesInput.textContent = productSeries;
    productStrenghtInput.textContent = productStrength;
    productImageInput.style.backgroundImage = productImage;
    productIllustrationInput.style.backgroundImage = productIllustration;
    productDescriptionInput.textContent = productDescription;
    spaService.navigateTo("shop");
}

