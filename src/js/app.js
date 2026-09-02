import { HomeModel } from './models/HomeModel.js';
import { HomeView } from './views/HomeView.js';
import { HomeController } from './controllers/HomeController.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new HomeModel();
    const view = new HomeView();
    const controller = new HomeController(model, view);
    
    controller.init();
});
