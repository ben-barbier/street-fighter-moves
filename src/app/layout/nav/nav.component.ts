import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { fromObservable } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GithubButtonComponent } from 'ng-github-button';
import { map } from 'rxjs/operators';
import pkg from '../../../../package.json';
import { data } from '../../data';
import { UpdateAppIndicatorComponent } from '../../shared/features/update-app/update-app-indicator/update-app-indicator.component';
import { ControlsComponent } from './controls/controls.component';
import { slideInAnimation } from './nav.animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    RouterLink,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    TranslateModule,
    GithubButtonComponent,
    MatToolbarModule,
    MatMenuModule,
    RouterOutlet,
    UpdateAppIndicatorComponent,
  ],
  animations: [slideInAnimation],
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private dialog = inject(MatDialog);
  private translate = inject(TranslateService);
  private contexts = inject(ChildrenOutletContexts);

  public characters = data[0].characters;
  public version: string = pkg?.version;
  public isHandset: Signal<boolean> = fromObservable(
    this.breakpointObserver.observe('(max-width: 739px)').pipe(map(result => result.matches)),
    false,
  );
  public role = computed(() => (this.isHandset() ? 'dialog' : 'navigation'));
  public mode = computed(() => (this.isHandset() ? 'over' : 'side'));
  public opened = computed(() => !this.isHandset());
  public search = signal('');
  public filteredCharacters = computed(() => this.characters.filter(c => c.name.toLowerCase().includes(this.search().toLowerCase())));

  public openControls(): void {
    this.dialog.open(ControlsComponent);
  }

  public setLang(lang: 'fr' | 'en'): void {
    this.translate.use(lang);
  }

  public getRouteAnimationData(): string | undefined {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
