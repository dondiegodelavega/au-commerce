import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class HomeService{

    http: HttpClient;
    constructor(http: HttpClient) {
        http.configure(config => {
            config
                .withBaseUrl('http://jazznco/')
                .withDefaults({
                    headers: {
                        'Accept': 'application/json',
                    }
            });
        });
        this.http = http;
    }

    getList() {
        return this.http.fetch('api/portal/get_List_Menu_Header')
                        .then(response => response.json())
    }

}