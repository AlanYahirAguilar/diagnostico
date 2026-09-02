import { HomeModel } from './core/models/HomeModel.js';
import { HomeView } from './core/views/HomeView.js';
import { HomeController } from './core/controllers/HomeController.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new HomeModel();
    const view = new HomeView();
    const controller = new HomeController(model, view);
    
    controller.init();
});
