import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwUpdate } from '@angular/service-worker';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UpdateAppDialogComponent } from './update-app-dialog/update-app-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class PromptUpdateService {
  private updates = inject(SwUpdate);
  private dialog = inject(MatDialog);

  public appHasUpdateAvailable$ = new BehaviorSubject<boolean>(false);

  constructor() {
    if (this.updates.isEnabled) {
      this.updates.versionUpdates.subscribe(evt => {
        switch (evt.type) {
          case 'VERSION_DETECTED':
            console.log(`Downloading new app version: ${evt.version.hash}`);
            break;
          case 'VERSION_READY':
            console.log(`Current app version: ${evt.currentVersion.hash}`);
            console.log(`New app version ready for use: ${evt.latestVersion.hash}`);
            this.appHasUpdateAvailable$.next(true);
            this.promptUpdateDialog();
            break;
          case 'VERSION_INSTALLATION_FAILED':
            console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
            break;
        }
      });
    }
  }

  public promptUpdateDialog(): void {
    this.dialog
      .open(UpdateAppDialogComponent)
      .afterClosed()
      .pipe(filter(response => !!response))
      .subscribe(() => {
        this.updates.activateUpdate().then(() => document.location.reload());
      });
  }
}
