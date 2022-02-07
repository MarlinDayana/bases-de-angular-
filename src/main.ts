import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));





  // codigo fuente seccion 4 - va aqui - https://github.com/Klerith/angular-basicos/tree/v0.1.0

  // codigo fuente seccion 4 -va aqui - https://github.com/Klerith/angular-basicos/releases/tag/v5.0.0

  // tener en cuenta en la seccion 5 https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
