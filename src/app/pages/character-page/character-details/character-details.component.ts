import { Component, Input } from '@angular/core';
import { Character } from '../../../data';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.component.html',
    styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
    @Input() character: Character | undefined;
    @Input() maxStamina = 1;
    @Input() maxStun = 1;
    @Input() countryLinkActive = false;
}
