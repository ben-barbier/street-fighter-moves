import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-update-app-dialog',
    templateUrl: './update-app-dialog.component.html',
    styleUrls: ['./update-app-dialog.component.scss'],
    standalone: true,
    imports: [MatIconModule, MatDialogModule, TranslateModule, MatButtonModule],
})
export class UpdateAppDialogComponent {}
