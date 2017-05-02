import {inject} from 'aurelia-framework';
import {HomeService} from './home-service';

@inject(HomeService)
export class Home {
    scrollBanners;
    service: HomeService;

    constructor(service: HomeService){
        this.service = service;
    }

    activate(){
        this.service.getScrollBanners().then(data => {
            this.scrollBanners = data;
        });
    }

}
