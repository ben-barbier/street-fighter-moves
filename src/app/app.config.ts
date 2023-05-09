import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, Injector, importProvidersFrom, isDevMode } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { finalize, tap } from 'rxjs';
import { routes } from './app.routes';

const availableLanguages = ['fr', 'en'];

const loadTranslations =
  (translate: TranslateService, injector: Injector): (() => Promise<void>) =>
  () =>
    new Promise<void>(resolve => {
      const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
      locationInitialized.then(() => {
        const browserLanguage = navigator?.language?.split('-')[0];
        const langToSet = availableLanguages.find(l => l === browserLanguage) || 'en';
        translate.setDefaultLang('fr');
        translate
          .use(langToSet)
          .pipe(
            tap({
              next: () => console.log(`Successfully initialized '${langToSet}' language.`),
              error: () => console.error(`Problem with '${langToSet}' language initialization.`),
            }),
            finalize(() => resolve()),
          )
          .subscribe();
      });
    });

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatDialogModule),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
          deps: [HttpClient],
        },
      }),
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: loadTranslations,
      deps: [TranslateService, Injector],
      multi: true,
    },
  ],
};
