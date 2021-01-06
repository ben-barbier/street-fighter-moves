import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './pages/character/character-page.component';
import { CharacterPageGuard } from './pages/character/character-page.guard';
import { CharacterPageResolver } from './pages/character/character-page.resolver';
import { CharactersListPageComponent } from './pages/characters-list-page/characters-list-page.component';

const routes: Routes = [
    {
        path: 'sf4',
        component: CharactersListPageComponent,
        data: { page: 'ListPage' },
    },
    {
        path: 'sf4/:characterId',
        component: CharacterPageComponent,
        canActivate: [CharacterPageGuard],
        resolve: { character: CharacterPageResolver },
        data: { page: 'CharacterPage' },
    },
    { path: '**', redirectTo: '/sf4' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
