export class HomeController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        const features = this.model.getFeatures();
        const categories = this.model.getCategories();
        const products = this.model.getProducts();

        // Initial render
        this.view.renderFeatures(features);
        this.view.renderCategories(categories);
        this.view.renderProducts(products);

        // Bind events
        this.view.bindNavigation(this.handleNavigation.bind(this));
        this.view.bindSearch(this.handleSearch.bind(this));
    }

    handleNavigation(viewName) {
        this.view.showView(viewName);
        window.scrollTo(0, 0);
    }

    handleSearch(query) {
        const filteredProducts = this.model.searchProducts(query);
        this.view.renderProducts(filteredProducts);
    }
}
