import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import pkg from '../../../../package.json';
import { data } from '../../data';
import { ControlsComponent } from '../controls/controls.component';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
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
