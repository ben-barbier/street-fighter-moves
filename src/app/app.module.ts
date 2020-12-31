import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './pages/character/character-details/character-details.component';
import { CharacterMovesComponent } from './pages/character/character-moves/character-moves.component';
import { CharacterPageComponent } from './pages/character/character-page.component';
import { CharactersListPageComponent } from './pages/characters-list-page/characters-list-page.component';
import { NavComponent } from './shared/nav/nav.component';

@NgModule({
    declarations: [
        AppComponent,
        CharacterPageComponent,
        CharacterDetailsComponent,
        CharacterMovesComponent,
        CharactersListPageComponent,
        NavComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        MatIconModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
