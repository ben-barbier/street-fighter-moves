import { Component, Input } from '@angular/core';
import { Character } from '../../../data';

@Component({
    selector: 'app-character-moves',
    templateUrl: './character-moves.component.html',
    styleUrls: ['./character-moves.component.scss'],
})
export class CharacterMovesComponent {
    @Input() character: Character | undefined;
}
