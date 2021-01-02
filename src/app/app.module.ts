import { LayoutModule } from '@angular/cdk/layout';
import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './pages/character/character-details/character-details.component';
import { CharacterMovesComponent } from './pages/character/character-moves/character-moves.component';
import { CharacterPageComponent } from './pages/character/character-page.component';
import { CharactersListPageComponent } from './pages/characters-list-page/characters-list-page.component';
import { ControlsComponent } from './shared/controls/controls.component';
import { UpdateAppDialogComponent } from './shared/features/update-app/update-app-dialog/update-app-dialog.component';
import { UpdateAppIndicatorComponent } from './shared/features/update-app/update-app-indicator/update-app-indicator.component';
import { NavComponent } from './shared/nav/nav.component';

@NgModule({
    declarations: [
        AppComponent,
        CharacterPageComponent,
        CharacterDetailsComponent,
        CharacterMovesComponent,
        CharactersListPageComponent,
        UpdateAppDialogComponent,
        UpdateAppIndicatorComponent,
        NavComponent,
        ControlsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LayoutModule,
        MatProgressBarModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatDialogModule,
        MatMenuModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
                deps: [HttpClient],
            },
        }),
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: loadTranslations,
            deps: [TranslateService, Injector],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

export function loadTranslations(translate: TranslateService, injector: Injector): () => Promise<any> {
    return () =>
        new Promise<any>((resolve: any) => {
            const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
            locationInitialized.then(() => {
                const langToSet = 'fr';
                translate.setDefaultLang('fr');
                translate.use(langToSet).subscribe(
                    () => console.log(`Successfully initialized '${langToSet}' language.`),
                    () => console.error(`Problem with '${langToSet}' language initialization.`),
                    () => resolve(),
                );
            });
        });
}
