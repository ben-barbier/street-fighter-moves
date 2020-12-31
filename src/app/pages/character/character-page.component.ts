import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { data } from '../../data';

@Component({
    selector: 'app-character-page',
    templateUrl: './character-page.component.html',
    styleUrls: ['./character-page.component.scss'],
})
export class CharacterPageComponent {
    public characters = data[0].characters;

    public selectedCharacter = this.characters[0];

    public maxStamina = data[0].characters.reduce((acc, c) => Math.max(acc, c.stamina), 0);

    public maxStun = data[0].characters.reduce((acc, c) => Math.max(acc, c.stun), 0);

    public character$ = this.route.params.pipe(
        map(params => params.characterId),
        map(id => data[0].characters.find(c => c.id === id)),
    );

    constructor(private route: ActivatedRoute) {}
}
