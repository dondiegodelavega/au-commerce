export class App {
  configureRouter(config, router) {
    config.title = 'AuC';
    config.map([
            { route: '',              moduleId: './pages/home/home',    name: 'home', title: 'Home'},
            { route: 'catalog/:id',   moduleId: './pages/catalog/catalog', name: 'catalog'},
            { route: 'content/:id',   moduleId: './pages/content/content', name: 'content'}
    ]);

    this.router = router;
  }
}
