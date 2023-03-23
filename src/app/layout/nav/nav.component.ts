import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GithubButtonComponent } from 'ng-github-button';
import { map } from 'rxjs/operators';
import pkg from '../../../../package.json';
import { data } from '../../data';
import { UpdateAppIndicatorComponent } from '../../shared/features/update-app/update-app-indicator/update-app-indicator.component';
import { ControlsComponent } from './controls/controls.component';

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
})
export class NavComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  private dialog = inject(MatDialog);
  private translate = inject(TranslateService);

  public characters = data[0].characters;
  public filteredCharacters = [...this.characters];
  public version: string = pkg?.version;
  public isHandset = false;
  public search = '';

  ngOnInit(): void {
    this.breakpointObserver
      .observe('(max-width: 739px)')
      .pipe(map(result => result.matches))
      .subscribe(isHandset => (this.isHandset = isHandset));
  }

  public openControls(): void {
    this.dialog.open(ControlsComponent);
  }

  public setLang(lang: 'fr' | 'en'): void {
    this.translate.use(lang);
  }

  public filterCharacters(search: string): void {
    this.filteredCharacters = this.characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase()));
  }

  public clearSearch(): void {
    this.search = '';
    this.filterCharacters('');
  }
}
