// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import ProductsPage from "./pages/products.js";
import AboutPage from "./pages/about.js";
import ConceptPage from "./pages/concept.js";
import VisitPage from "./pages/visit.js";
import ShopPage from "./pages/shop.js";
import ProductDetails from "./pages/product-details.js";
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
let productDetails = new ProductDetails();
let footerSection = new FooterSection();

// init services
spaService.init();
productService.init();

window.pageChange = () => spaService.pageChange();
window.navigateTo = (pageId) => spaService.navigateTo(pageId);
window.fixedNav = () => navigation.fixedNav();

window.selectProduct = (name, series, alcohol, image, illustration, description) => {
    let nameInput = document.querySelector('.product_title');
    let seriesInput = document.querySelector('.product_series');
    let alcoholInput = document.querySelector('.product_strength');
    let imageInput = document.querySelector('#image_container');
    let illustrationInput = document.querySelector('#sketch-container');
    let descriptionInput = document.querySelector('.product_description');
    nameInput.textContent = name;
    seriesInput.textContent = series;
    alcoholInput.textContent = alcohol;
    imageInput.style.backgroundImage = image;
    illustrationInput.style.backgroundImage = illustration;
    descriptionInput.textContent = description;
    spaService.navigateTo("product-details");
};

