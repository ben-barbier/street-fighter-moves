import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { CharacterPageGuard } from './pages/character-page/character-page.guard';
import { characterPageResolver } from './pages/character-page/character-page.resolver';
import { CharactersListPageComponent } from './pages/characters-list-page/characters-list-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryPageGuard } from './pages/country-page/country-page.guard';
import { countryPageResolver } from './pages/country-page/country-page.resolver';

const routes: Routes = [
  {
    path: 'sf4',
    component: CharactersListPageComponent,
  },
  {
    path: 'sf4/characters/:characterId',
    component: CharacterPageComponent,
    canActivate: [CharacterPageGuard],
    resolve: { character: characterPageResolver },
  },
  {
    path: 'sf4/countries/:country',
    component: CountryPageComponent,
    canActivate: [CountryPageGuard],
    resolve: { character: countryPageResolver },
  },
  { path: '**', redirectTo: '/sf4' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
