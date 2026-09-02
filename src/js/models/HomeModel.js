export class HomeModel {
    constructor() {
        this.features = [
            { id: 1, icon: 'bi-truck', title: 'Envío gratis', subtitle: 'En pedidos +$50' },
            { id: 2, icon: 'bi-shield-check', title: 'Garantía', subtitle: '30 días' },
            { id: 3, icon: 'bi-headset', title: 'Soporte', subtitle: '24/7' }
        ];

        this.categories = [
            { id: 1, name: 'Tecnología', image: './src/assets/phones.jpg', bgClass: 'bg-cat-tech' },
            { id: 2, name: 'Hogar', image: './src/assets/sofa.jpg', bgClass: 'bg-cat-home' },
            { id: 3, name: 'Accesorios', image: './src/assets/backpack.jpg', bgClass: 'bg-cat-accs' }
        ];

        this.products = [
            { 
                id: 1, 
                name: 'Audífonos Inalámbricos', 
                price: 59.99, 
                rating: 4, 
                reviews: 128, 
                image: './src/assets/headphones.jpg',
                description: 'Sonido de alta calidad, conexión bluetooth y batería de larga duración. Ideales para música y llamadas.'
            },
            { 
                id: 2, 
                name: 'Smartwatch Pro', 
                price: 89.99, 
                rating: 4, 
                reviews: 85, 
                image: './src/assets/smartwatch.png',
                description: 'Monitorea tu actividad física, recibe notificaciones y controla tu música desde tu muñeca. Pantalla táctil HD y resistente al agua.'
            },
            { 
                id: 3, 
                name: 'Cámara Digital', 
                price: 199.99, 
                rating: 5, 
                reviews: 42, 
                image: './src/assets/camera.jpg',
                description: 'Captura los mejores momentos con esta cámara de alta resolución, enfoque automático rápido y grabación en 4K. Incluye lente intercambiable.'
            },
            { 
                id: 4, 
                name: 'Mochila Urbana', 
                price: 39.99, 
                rating: 4, 
                reviews: 210, 
                image: './src/assets/backpack.jpg',
                description: 'Mochila resistente al agua, con múltiples compartimentos incluyendo uno acolchado para laptop. Diseño ergonómico perfecto para el uso diario.'
            }
        ];
    }

    getFeatures() { return this.features; }
    getCategories() { return this.categories; }
    getProducts() { return this.products; }

    getProductById(id) {
        return this.products.find(p => p.id === parseInt(id));
    }

    searchProducts(query) {
        if (!query) return this.products;
        const lowerQuery = query.toLowerCase();
        return this.products.filter(p => p.name.toLowerCase().includes(lowerQuery));
    }
}
