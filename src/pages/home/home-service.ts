import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {AureliaConfiguration} from 'aurelia-configuration';

@inject(HttpClient, AureliaConfiguration)
export class HomeService{
    config:AureliaConfiguration;
    http: HttpClient;

    constructor(http: HttpClient, config: AureliaConfiguration) {
        this.config = config;

        http.configure(config => {
            config
                .withBaseUrl(this.config.get("routes.api_root"))
                .withDefaults({headers: {'Accept': 'application/json'}
            });
        });
        this.http = http;
    }

    getScrollBanners() {
        return this.http.fetch('get_list_banner/Web@home')
                        .then(response => response.json())
    }

}