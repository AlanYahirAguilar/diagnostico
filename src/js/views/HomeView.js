export class HomeView {
    constructor() {
        this.featuresContainer = document.getElementById('features-container');
        this.categoriesContainer = document.getElementById('categories-container');
        this.productsGrid = document.getElementById('products-grid');
        this.detailContainer = document.getElementById('detail-container');
        
        // SPA Views
        this.viewHome = document.getElementById('view-home');
        this.viewProducts = document.getElementById('view-products');
        this.viewDetail = document.getElementById('view-detail');
        
        // Navigation elements
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
                <div class="flex-fill p-3 ${borderClass} border-light d-flex align-items-center">
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
                    <div class="category-card p-2 p-md-3 rounded-4 text-center h-100 border-0 shadow-sm">
                        <div class="category-img-wrapper ${category.bgClass} rounded-3">
                            <img src="${category.image}" alt="${category.name}" class="category-img w-100 h-100 p-2 mix-blend-multiply" style="object-fit:contain;">
                        </div>
                        <div class="category-title text-dark fw-semibold" style="font-size: 0.8rem;">${category.name}</div>
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
            let starsHtml = '';
            for(let i=0; i<5; i++) {
                if(i < product.rating) starsHtml += '<i class="bi bi-star-fill text-warning" style="font-size:0.75rem;"></i> ';
                else starsHtml += '<i class="bi bi-star text-warning" style="font-size:0.75rem;"></i> ';
            }

            html += `
                <div class="col-12 col-md-6">
                    <div class="card border border-light shadow-sm h-100 rounded-4 product-card" data-id="${product.id}" style="cursor: pointer;">
                        <div class="card-body p-3">
                            <div class="bg-light rounded-3 d-flex align-items-center justify-content-center p-3 mb-3" style="height: 160px;">
                                <img src="${product.image}" alt="${product.name}" class="img-fluid mix-blend-multiply" style="max-height: 100%; object-fit:contain;">
                            </div>
                            <h6 class="card-title fw-bold text-dark mb-1 fs-6">${product.name}</h6>
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

    renderDetail(product) {
        if(!this.detailContainer || !product) return;
        
        let starsHtml = '';
        for(let i=0; i<5; i++) {
            if(i < product.rating) starsHtml += '<i class="bi bi-star-fill text-warning" style="font-size:0.9rem;"></i> ';
            else starsHtml += '<i class="bi bi-star text-warning" style="font-size:0.9rem;"></i> ';
        }

        this.detailContainer.innerHTML = `
            <div class="mb-4 text-muted small fw-medium">
                <a href="#" class="text-primary text-decoration-none" id="detail-nav-home">Inicio</a> / 
                <a href="#" class="text-primary text-decoration-none" id="detail-nav-products">Productos</a> / 
                <span class="text-secondary">${product.name}</span>
            </div>

            <div class="row g-4 mb-5">
                <div class="col-12 col-md-6">
                    <div class="bg-light rounded-4 d-flex align-items-center justify-content-center p-4 h-100" style="min-height: 250px;">
                        <img src="${product.image}" class="img-fluid mix-blend-multiply" style="max-height: 250px;">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <h2 class="fw-bold fs-3 text-dark mb-2">${product.name}</h2>
                    <div class="fs-4 fw-bold text-dark mb-2">$${product.price}</div>
                    <div class="d-flex align-items-center mb-4">
                        <div>${starsHtml}</div>
                        <span class="ms-2 text-muted small">(${product.reviews})</span>
                    </div>
                    <div class="mb-4">
                        <div class="fw-bold fs-6 mb-2 text-dark">Descripción</div>
                        <p class="text-secondary fs-6" style="line-height: 1.6;">${product.description}</p>
                    </div>
                    
                    <div class="d-flex align-items-center gap-3 mb-4">
                        <div class="fw-semibold text-dark fs-6">Cantidad</div>
                        <div class="input-group" style="width: 120px;">
                            <button class="btn btn-outline-light border text-dark bg-white shadow-none" type="button"><i class="bi bi-dash"></i></button>
                            <input type="text" class="form-control text-center border-light shadow-none bg-white fw-medium" value="1" readonly>
                            <button class="btn btn-outline-light border text-dark bg-white shadow-none" type="button"><i class="bi bi-plus"></i></button>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary btn-brand px-5 py-3 rounded-3 fw-medium w-100 w-md-auto">Agregar al carrito</button>
                </div>
            </div>
        `;
    }

    showView(viewName) {
        this.viewHome.classList.add('d-none');
        this.viewProducts.classList.add('d-none');
        this.viewDetail.classList.add('d-none');

        this.navHome.classList.remove('active', 'fw-semibold');
        this.navHome.classList.add('text-secondary');
        this.navProducts.classList.remove('active', 'fw-semibold');
        this.navProducts.classList.add('text-secondary');

        if (viewName === 'home') {
            this.viewHome.classList.remove('d-none');
            this.navHome.classList.add('active', 'fw-semibold');
            this.navHome.classList.remove('text-secondary');
        } else if (viewName === 'products') {
            this.viewProducts.classList.remove('d-none');
            this.navProducts.classList.add('active', 'fw-semibold');
            this.navProducts.classList.remove('text-secondary');
        } else if (viewName === 'detail') {
            this.viewDetail.classList.remove('d-none');
            this.navProducts.classList.add('active', 'fw-semibold');
            this.navProducts.classList.remove('text-secondary');
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
            this.searchInput.addEventListener('input', (e) => handler(e.target.value));
        }
    }

    bindProductClick(handler) {
        this.productsGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (card) {
                const id = card.getAttribute('data-id');
                handler(id);
            }
        });
    }

    bindDetailNavigation(handler) {
        this.detailContainer.addEventListener('click', (e) => {
            if(e.target.id === 'detail-nav-home') {
                e.preventDefault();
                handler('home');
            }
            if(e.target.id === 'detail-nav-products') {
                e.preventDefault();
                handler('products');
            }
        });
    }
}
