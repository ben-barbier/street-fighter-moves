import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.scss'],
    standalone: true,
    imports: [MatDialogModule, TranslateModule, MatButtonModule, MatIconModule],
})
export class ControlsComponent {}
