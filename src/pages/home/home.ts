import {inject} from 'aurelia-framework';
import {HomeService} from './home-service';

@inject(HomeService)
export class Home {
    service: HomeService;
    constructor(service: HomeService){
        this.service = service;
    }

    myData;
    activate(){
        this.service.getList().then(data => {
            this.myData = data;
            console.log(data);
        });
    }

}
