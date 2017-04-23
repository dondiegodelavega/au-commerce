import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router){
        config.title = 'AuC';
        config.map([
            { route: '',              moduleId: './pages/home/home',    name: 'home', title: 'Home'},
            { route: 'catalog/:id',   moduleId: './pages/catalog/catalog', name: 'catalog'},
            { route: 'content/:id',   moduleId: './pages/content/content', name: 'content'}
        ]);

    this.router = router;
  }
}
