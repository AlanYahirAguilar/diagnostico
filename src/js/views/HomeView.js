export class HomeView {
    constructor() {
        this.featuresContainer = document.getElementById('features-container');
        this.categoriesContainer = document.getElementById('categories-container');
    }

    renderFeatures(features) {
        if (!this.featuresContainer) return;
        
        let html = '<div class="row g-3">';
        features.forEach(feature => {
            html += `
                <div class="col-12 col-md-4">
                    <div class="d-flex align-items-center p-3 border rounded-3 bg-white h-100">
                        <div class="feature-icon-wrapper me-3">
                            <i class="bi ${feature.icon}"></i>
                        </div>
                        <div>
                            <div class="feature-title text-dark">${feature.title}</div>
                            <div class="feature-subtitle">${feature.subtitle}</div>
                        </div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        this.featuresContainer.innerHTML = html;
    }

    renderCategories(categories) {
        if (!this.categoriesContainer) return;

        let html = '';
        categories.forEach(category => {
            html += `
                <div class="col-4 col-md-4">
                    <div class="category-card p-2 p-md-3 rounded-3 text-center h-100">
                        <div class="category-img-wrapper ${category.bgClass}">
                            <img src="${category.image}" alt="${category.name}" class="category-img">
                        </div>
                        <div class="category-title text-dark">${category.name}</div>
                    </div>
                </div>
            `;
        });
        this.categoriesContainer.innerHTML = html;
    }
}
