export class HomeModel {
    constructor() {
        this.features = [
            { id: 1, icon: 'bi-truck', title: 'Envío gratis', subtitle: 'En pedidos +$50' },
            { id: 2, icon: 'bi-shield-check', title: 'Garantía', subtitle: '30 días' },
            { id: 3, icon: 'bi-headset', title: 'Soporte', subtitle: '24/7' }
        ];

        this.categories = [
            { id: 1, name: 'Tecnología', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80', bgClass: 'bg-cat-tech' },
            { id: 2, name: 'Hogar', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80', bgClass: 'bg-cat-home' },
            { id: 3, name: 'Accesorios', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', bgClass: 'bg-cat-accs' }
        ];
    }

    getFeatures() {
        return this.features;
    }

    getCategories() {
        return this.categories;
    }
}
