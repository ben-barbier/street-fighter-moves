import { Component } from '@angular/core';
import { data } from '../../data';

@Component({
    selector: 'app-characters-list-page',
    templateUrl: './characters-list-page.component.html',
    styleUrls: ['./characters-list-page.component.scss'],
})
export class CharactersListPageComponent {
    public characters = data[0].characters;
}
