import { LayoutModule } from '@angular/cdk/layout';
import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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
import { GithubButtonModule } from 'ng-github-button';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './pages/character-page/character-details/character-details.component';
import { CharacterMovesComponent } from './pages/character-page/character-moves/character-moves.component';
import { MotionsComponent } from './pages/character-page/character-moves/motions/motions.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { CharactersListPageComponent } from './pages/characters-list-page/characters-list-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ControlsComponent } from './shared/controls/controls.component';
import { UpdateAppDialogComponent } from './shared/features/update-app/update-app-dialog/update-app-dialog.component';
import { UpdateAppIndicatorComponent } from './shared/features/update-app/update-app-indicator/update-app-indicator.component';
import { NavComponent } from './shared/nav/nav.component';

const loadTranslations = (translate: TranslateService, injector: Injector): (() => Promise<any>) => () =>
    new Promise<any>((resolve: any) => {
        const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
        locationInitialized.then(() => {
            const langToSet = navigator?.language?.split('-')[0] || 'fr';
            translate.setDefaultLang('fr');
            translate.use(langToSet).subscribe(
                () => console.log(`Successfully initialized '${langToSet}' language.`),
                () => console.error(`Problem with '${langToSet}' language initialization.`),
                () => resolve(),
            );
        });
    });

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
        CountryPageComponent,
        MotionsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        GithubButtonModule,
        HttpClientModule,
        LayoutModule,
        FormsModule,
        MatProgressBarModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatDialogModule,
        MatMenuModule,
        MatInputModule,
        MatFormFieldModule,
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
