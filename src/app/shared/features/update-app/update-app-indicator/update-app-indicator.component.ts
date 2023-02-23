import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConnectionService } from '../../../offline/connection.service';
import { PromptUpdateService } from '../prompt-update.service';

@Component({
  selector: 'app-update-app-indicator',
  templateUrl: './update-app-indicator.component.html',
  styleUrls: ['./update-app-indicator.component.scss'],
  standalone: true,
  imports: [NgIf, MatButtonModule, MatIconModule, AsyncPipe],
})
export class UpdateAppIndicatorComponent {
  public displayIndicator$ = combineLatest([this.connection.isOnline$, this.update.appHasUpdateAvailable$]).pipe(
    map(([isOnline, appHasUpdateAvailable]) => isOnline && appHasUpdateAvailable),
  );

  constructor(public update: PromptUpdateService, public connection: ConnectionService) {}
}
