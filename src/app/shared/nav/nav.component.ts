import { BreakpointObserver } from '@angular/cdk/layout';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GithubButtonComponent } from 'ng-github-button';
import { map } from 'rxjs/operators';
import pkg from '../../../../package.json';
import { data } from '../../data';
import { ControlsComponent } from '../controls/controls.component';
import { UpdateAppIndicatorComponent } from '../features/update-app/update-app-indicator/update-app-indicator.component';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        MatSidenavModule,
        MatIconModule,
        RouterLinkWithHref,
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
export class NavComponent {
    public characters = data[0].characters;
    public filteredCharacters = [...this.characters];
    public version: string = pkg?.version;
    public isHandset = false;
    public search = '';

    constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog, private translate: TranslateService) {
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
