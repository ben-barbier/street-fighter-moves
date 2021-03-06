import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwUpdate } from '@angular/service-worker';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UpdateAppDialogComponent } from './update-app-dialog/update-app-dialog.component';

@Injectable({
    providedIn: 'root',
})
export class PromptUpdateService {
    public appHasUpdateAvailable$ = new BehaviorSubject<boolean>(false);

    constructor(private updates: SwUpdate, private dialog: MatDialog) {
        if (this.updates.isEnabled) {
            updates.available.subscribe(() => {
                this.appHasUpdateAvailable$.next(true);
                this.promptUpdateDilog();
            });
        }
    }

    public promptUpdateDilog(): void {
        this.dialog
            .open(UpdateAppDialogComponent)
            .afterClosed()
            .pipe(filter(response => !!response))
            .subscribe(() => {
                this.updates.activateUpdate().then(() => document.location.reload());
            });
    }
}
