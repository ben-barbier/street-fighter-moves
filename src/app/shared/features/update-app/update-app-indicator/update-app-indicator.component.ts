import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConnectionService } from '../../../offline/connection.service';
import { PromptUpdateService } from '../prompt-update.service';

@Component({
  selector: 'app-update-app-indicator',
  templateUrl: './update-app-indicator.component.html',
  styleUrls: ['./update-app-indicator.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class UpdateAppIndicatorComponent {
  public update = inject(PromptUpdateService);
  private connection = inject(ConnectionService);

  public displayIndicator$ = combineLatest([this.connection.isOnline$, this.update.appHasUpdateAvailable$]).pipe(
    map(([isOnline, appHasUpdateAvailable]) => isOnline && appHasUpdateAvailable),
  );
}
