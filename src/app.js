export class App {
  configureRouter(config, router) {
    config.title = 'Jazz & Co';
    config.map([
            { route: '',              moduleId: './pages/home/home',    name: 'home', title: 'Home'},
            { route: 'catalog/:id',   moduleId: './pages/home/catalog', name: 'catalog'},
            { route: 'content/:id',   moduleId: './pages/home/content', name: 'content'}
    ]);

    this.router = router;
  }
}
