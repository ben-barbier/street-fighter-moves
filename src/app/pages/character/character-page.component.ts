import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs/operators';
import { data } from '../../data';

@UntilDestroy()
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

    constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {
        this.character$.pipe(untilDestroyed(this)).subscribe(character => {
            const titleText = character ? 'Street Fighter Moves - ' + character.name : 'Street Fighter Moves';
            title.setTitle(titleText);

            const description = character
                ? 'Street Fighter 4 Arcade Edition - ' + character.name + ' moves'
                : 'Street Fighter 4 Arcade Edition';
            meta.updateTag({ name: 'description', content: description });
        });
    }
}
