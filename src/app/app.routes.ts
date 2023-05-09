import { Routes } from '@angular/router';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { canActivateCharacter } from './pages/character-page/character-page.guard';
import { characterPageResolver } from './pages/character-page/character-page.resolver';
import { CharactersListPageComponent } from './pages/characters-list-page/characters-list-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { canActivateCountry } from './pages/country-page/country-page.guard';
import { countryPageResolver } from './pages/country-page/country-page.resolver';

export const routes: Routes = [
  {
    path: 'sf4',
    component: CharactersListPageComponent,
    data: { animation: 'CharactersListPage' },
  },
  {
    path: 'sf4/characters/:characterId',
    component: CharacterPageComponent,
    canActivate: [canActivateCharacter],
    resolve: { character: characterPageResolver },
    data: { animation: 'CharacterPage' },
  },
  {
    path: 'sf4/countries/:country',
    component: CountryPageComponent,
    canActivate: [canActivateCountry],
    resolve: { character: countryPageResolver },
    data: { animation: 'CountryPage' },
  },
  { path: '**', redirectTo: '/sf4' },
];
