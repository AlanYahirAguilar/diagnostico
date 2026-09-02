export class HomeController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init() {
        const features = this.model.getFeatures();
        const categories = this.model.getCategories();

        this.view.renderFeatures(features);
        this.view.renderCategories(categories);
    }
}
