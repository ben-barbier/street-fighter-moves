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
      updates.available.subscribe(() => {
        this.appHasUpdateAvailable$.next(true);
        this.promptUpdateDialog();
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
