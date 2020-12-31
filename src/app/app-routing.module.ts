import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './pages/character/character-page.component';
import { CharactersListPageComponent } from './pages/characters-list-page/characters-list-page.component';

const routes: Routes = [
    // TODO: chnager les characterId par des noms
    { path: 'sf4', component: CharactersListPageComponent },
    { path: 'sf4/:characterId', component: CharacterPageComponent },
    { path: '**', redirectTo: '/sf4' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
