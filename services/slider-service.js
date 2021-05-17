class SliderService {
    constructor() {
        this.defaultSlider = "preview-slider";
    }

    init() {
        this.sliders = document.querySelectorAll(".slider");
        this.productItems = document.querySelectorAll(".product_items a");
        this.sliderChange();
    }

    hideAllSliders() {
        for (let slider of this.sliders) {
            slider.style.display = "none";
        }
    }

    showSlider(sliderId) {
        this.hideAllSliders();
        document.querySelector(`#${sliderId}`).style.display = "block";
        this.setActiveType(sliderId);
    }

    setActiveType(sliderId) {
        for (let productItem of this.productItems) {
            if (`#${sliderId}` === productItem.getAttribute("href")) {
                productItem.classList.add("active");
            } else {
                productItem.classList.remove("active");
            }
        }
    }

    sliderChange() {
        let slider = this.defaultSlider;
        if (window.location.hash) {
            slider = window.location.hash.slice(1);
        }
        this.showSlider(slider);
    }
} 

const sliderService = new SliderService();
export default sliderService;