import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Character } from '../../../data';
import { MotionsComponent } from './motions/motions.component';

@Component({
    selector: 'app-character-moves',
    templateUrl: './character-moves.component.html',
    styleUrls: ['./character-moves.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, NgSwitch, NgSwitchDefault, MotionsComponent, MatIconModule, NgSwitchCase],
})
export class CharacterMovesComponent {
    @Input() character: Character | undefined;
}
