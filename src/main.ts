import {Aurelia} from 'aurelia-framework'
import environment from './environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .feature('resources')
      .plugin('aurelia-configuration',config => {
          config.setDirectory('src/config');
          config.setConfig('default.json');
          config.setEnvironment('local');
      });

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
