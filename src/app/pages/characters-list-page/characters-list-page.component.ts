import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { data } from '../../data';

@Component({
    selector: 'app-characters-list-page',
    templateUrl: './characters-list-page.component.html',
    styleUrls: ['./characters-list-page.component.scss'],
})
export class CharactersListPageComponent {
    public characters = data[0].characters;

    constructor(private title: Title, private meta: Meta) {
        title.setTitle('Street Fighter Moves');
        meta.updateTag({ name: 'description', content: 'Street Fighter 4 Arcade Edition' });
    }
}
