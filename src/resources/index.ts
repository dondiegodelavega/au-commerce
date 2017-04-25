import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
    config.globalResources(['./elements/app-header/app-header', './elements/app-footer/app-footer']);
}
