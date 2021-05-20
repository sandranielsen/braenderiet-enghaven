// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import ProductsPage from "./pages/products.js";
import AboutPage from "./pages/about.js";
import ConceptPage from "./pages/concept.js";
import VisitPage from "./pages/visit.js";
import ShopPage from "./pages/shop.js";
import RumDetails from "./pages/rum-details.js";
import VodkaDetails from "./pages/vodka-details.js";
import BrandyDetails from "./pages/brandy-details.js";
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
let rumDetails = new RumDetails();
let vodkaDetails = new VodkaDetails();
let brandyDetails = new BrandyDetails();
let footerSection = new FooterSection();

// init services
spaService.init();
productService.init();

window.pageChange = () => spaService.pageChange();
window.navigateTo = (pageId) => spaService.navigateTo(pageId);
window.fixedNav = () => navigation.fixedNav();
window.showVodka = () => homePage.showVodka();
window.showRum = () => homePage.showRum();
window.showBrandy = () => homePage.showBrandy();

window.selectProduct = (name, series, alcohol, notes, image, illustration, description) => {
  let nameInput = document.querySelector('.product_title');
  let seriesInput = document.querySelector('.product_series');
  let alcoholInput = document.querySelector('.product_strength');
  let notesInput = document.querySelector('.product_notes');
  let imageInput = document.querySelector('#image_container');
  let illustrationInput = document.querySelector('#sketch-container');
  let descriptionInput = document.querySelector('.product_description');
  nameInput.textContent = name;
  seriesInput.textContent = series;
  alcoholInput.textContent = alcohol;
  notesInput.textContent = notes;
  imageInput.style.backgroundImage = image;
  illustrationInput.style.backgroundImage = illustration;
  descriptionInput.textContent = description;
};

window.selectVodka = (vodkaName, vodkaSeries, vodkaAlcohol, vodkaNotes, vodkaImage, vodkaIllustration, vodkaDescription, vodkaSpirit) => {
  let vodkaNameInput = document.querySelector('.product_title');
  let vodkaSeriesInput = document.querySelector('.product_series');
  let vodkaAlcoholInput = document.querySelector('.product_strength');
  let vodkaNotesInput = document.querySelector('.product_notes');
  let vodkaImageInput = document.querySelector('.spirit_image');
  let vodkaIllustrationInput = document.querySelector('#sketch-container');
  let vodkaDescriptionInput = document.querySelector('.product_description');
  let vodkaSpiritInput = document.querySelector('.spirit-name');
  vodkaNameInput.textContent = vodkaName;
  vodkaSeriesInput.textContent = vodkaSeries;
  vodkaAlcoholInput.textContent = vodkaAlcohol;
  vodkaNotesInput.textContent = vodkaNotes;
  vodkaImageInput.style.backgroundImage = vodkaImage;
  vodkaIllustrationInput.style.backgroundImage = vodkaIllustration;
  vodkaDescriptionInput.textContent = vodkaDescription;
  vodkaSpiritInput.textContent = vodkaSpirit;
  spaService.navigateTo("vodka-details");
};

window.selectRum = (rumName, rumSeries, rumAlcohol, rumNotes, rumImage, rumIllustration, rumDescription, rumSpirit) => {
  let rumNameInput = document.querySelector('.product_title');
  let rumSeriesInput = document.querySelector('.product_series');
  let rumAlcoholInput = document.querySelector('.product_strength');
  let rumNotesInput = document.querySelector('.product_notes');
  let rumImageInput = document.querySelector('.spirit_image');
  let rumIllustrationInput = document.querySelector('#sketch-container');
  let rumDescriptionInput = document.querySelector('.product_description');
  let rumSpiritInput = document.querySelector('.spirit-name');
  rumNameInput.textContent = rumName;
  rumSeriesInput.textContent = rumSeries;
  rumAlcoholInput.textContent = rumAlcohol;
  rumNotesInput.textContent = rumNotes;
  rumImageInput.style.backgroundImage = rumImage;
  rumIllustrationInput.style.backgroundImage = rumIllustration;
  rumDescriptionInput.textContent = rumDescription;
  rumSpiritInput.textContent = rumSpirit;
  spaService.navigateTo("rum-details");
};

window.selectBrandy = (brandyName, brandySeries, brandyAlcohol, brandyNotes, brandyImage, brandyIllustration, brandyDescription, brandySpirit) => {
  let brandyNameInput = document.querySelector('.product_title');
  let brandySeriesInput = document.querySelector('.product_series');
  let brandyAlcoholInput = document.querySelector('.product_strength');
  let brandyNotesInput = document.querySelector('.product_notes');
  let brandyImageInput = document.querySelector('.spirit_image');
  let brandyIllustrationInput = document.querySelector('#sketch-container');
  let brandyDescriptionInput = document.querySelector('.product_description');
  let brandySpiritInput = document.querySelector('.spirit-name');
  brandyNameInput.textContent = brandyName;
  brandySeriesInput.textContent = brandySeries;
  brandyAlcoholInput.textContent = brandyAlcohol;
  brandyNotesInput.textContent = brandyNotes;
  brandyImageInput.style.backgroundImage = brandyImage;
  brandyIllustrationInput.style.backgroundImage = brandyIllustration;
  brandyDescriptionInput.textContent = brandyDescription;
  brandySpiritInput.textContent = brandySpirit;
  spaService.navigateTo("brandy-details");
};
