import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-update-app-dialog',
    templateUrl: './update-app-dialog.component.html',
    styleUrls: ['./update-app-dialog.component.scss'],
    standalone: true,
    imports: [MatIconModule, MatDialogModule, TranslateModule, MatButtonModule],
})
export class UpdateAppDialogComponent {}
