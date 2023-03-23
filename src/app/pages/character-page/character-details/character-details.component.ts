import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Character } from '../../../data';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatProgressBarModule, RouterModule, TranslateModule, CommonModule],
})
export class CharacterDetailsComponent {
  @Input() character: Character | undefined;
  @Input() maxStamina = 1;
  @Input() maxStun = 1;
  @Input() countryLinkActive = false;
}
