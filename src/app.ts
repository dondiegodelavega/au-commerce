import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router){
        config.title = 'AuC';
        config.options.pushState = true;

        config.map([
            { route: '',              moduleId: './pages/home/home',    name: 'home', title: 'Home'},
            { route: 'catalog/:id',   moduleId: './pages/catalog/catalog', name: 'catalog'},
            { route: 'content/:id',   moduleId: './pages/content/content', name: 'content'}
        ]);

        config.mapUnknownRoutes('./pages/not-found/not-found.html');

    this.router = router;
  }
}