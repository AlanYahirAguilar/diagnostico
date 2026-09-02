export class HomeView {
    constructor() {
        this.featuresContainer = document.getElementById('features-container');
        this.categoriesContainer = document.getElementById('categories-container');
        this.productsGrid = document.getElementById('products-grid');
        
        // SPA Views
        this.viewHome = document.getElementById('view-home');
        this.viewProducts = document.getElementById('view-products');
        
        // Navigation links
        this.navHome = document.getElementById('nav-home');
        this.navProducts = document.getElementById('nav-products');
        this.navBrand = document.getElementById('nav-brand');
        this.btnHeroProducts = document.getElementById('btn-hero-products');
        
        // Search
        this.searchInput = document.getElementById('search-input');
    }

    renderFeatures(features) {
        if (!this.featuresContainer) return;
        
        let html = '<div class="d-flex flex-column flex-md-row">';
        features.forEach((feature, index) => {
            const isLast = index === features.length - 1;
            const borderClass = isLast ? '' : 'border-bottom border-md-bottom-0 border-md-end';
            html += `
                <div class="flex-fill p-3 ${borderClass} d-flex align-items-center">
                    <div class="feature-icon-wrapper me-3">
                        <i class="bi ${feature.icon}"></i>
                    </div>
                    <div>
                        <div class="feature-title text-dark">${feature.title}</div>
                        <div class="feature-subtitle">${feature.subtitle}</div>
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
                <div class="col-4">
                    <div class="category-card p-2 p-md-3 rounded-3 text-center h-100">
                        <div class="category-img-wrapper ${category.bgClass}">
                            <img src="${category.image}" alt="${category.name}" class="category-img w-100 h-100 p-2" style="object-fit:contain;">
                        </div>
                        <div class="category-title text-dark">${category.name}</div>
                    </div>
                </div>
            `;
        });
        this.categoriesContainer.innerHTML = html;
    }

    renderProducts(products) {
        if (!this.productsGrid) return;
        
        if (products.length === 0) {
            this.productsGrid.innerHTML = '<div class="col-12 text-center py-5 text-muted">No se encontraron productos.</div>';
            return;
        }

        let html = '';
        products.forEach(product => {
            // Generate stars
            let starsHtml = '';
            for(let i=0; i<5; i++) {
                if(i < product.rating) {
                    starsHtml += '<i class="bi bi-star-fill text-warning" style="font-size:0.75rem;"></i> ';
                } else {
                    starsHtml += '<i class="bi bi-star text-warning" style="font-size:0.75rem;"></i> ';
                }
            }

            html += `
                <div class="col-12 col-md-6">
                    <div class="card border border-light shadow-sm h-100 rounded-4">
                        <div class="card-body p-3">
                            <div class="bg-light rounded-3 d-flex align-items-center justify-content-center p-4 mb-3" style="height: 180px;">
                                <img src="${product.image}" alt="${product.name}" class="img-fluid mix-blend-multiply" style="max-height: 100%; object-fit:contain;">
                            </div>
                            <h6 class="card-title fw-semibold text-dark mb-1 fs-6">${product.name}</h6>
                            <div class="fw-bold text-dark mb-2">$${product.price}</div>
                            <div class="d-flex align-items-center mb-1">
                                <div>${starsHtml}</div>
                                <span class="ms-2 text-muted small" style="font-size: 0.75rem;">(${product.reviews})</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        this.productsGrid.innerHTML = html;
    }

    showView(viewName) {
        if (viewName === 'home') {
            this.viewHome.classList.remove('d-none');
            this.viewProducts.classList.add('d-none');
            this.navHome.classList.add('active', 'fw-semibold');
            this.navHome.classList.remove('text-secondary');
            this.navProducts.classList.remove('active', 'fw-semibold');
            this.navProducts.classList.add('text-secondary');
        } else if (viewName === 'products') {
            this.viewHome.classList.add('d-none');
            this.viewProducts.classList.remove('d-none');
            this.navProducts.classList.add('active', 'fw-semibold');
            this.navProducts.classList.remove('text-secondary');
            this.navHome.classList.remove('active', 'fw-semibold');
            this.navHome.classList.add('text-secondary');
        }
    }

    bindNavigation(handler) {
        if(this.navHome) this.navHome.addEventListener('click', (e) => { e.preventDefault(); handler('home'); });
        if(this.navBrand) this.navBrand.addEventListener('click', (e) => { e.preventDefault(); handler('home'); });
        if(this.navProducts) this.navProducts.addEventListener('click', (e) => { e.preventDefault(); handler('products'); });
        if(this.btnHeroProducts) this.btnHeroProducts.addEventListener('click', (e) => { e.preventDefault(); handler('products'); });
    }

    bindSearch(handler) {
        if(this.searchInput) {
            this.searchInput.addEventListener('input', (e) => {
                handler(e.target.value);
            });
        }
    }
}
