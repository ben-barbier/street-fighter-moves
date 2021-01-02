import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { version } from '../../../../package.json';
import { data } from '../../data';
import { ControlsComponent } from '../controls/controls.component';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
    public characters = data[0].characters;
    public version: string = version;
    public isHandset = false;

    constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog, private translate: TranslateService) {
        this.breakpointObserver
            .observe(Breakpoints.Handset)
            .pipe(map(result => result.matches))
            .subscribe(isHandset => (this.isHandset = isHandset));
    }

    public openControls(): void {
        this.dialog.open(ControlsComponent);
    }

    setLang(lang: 'fr' | 'en'): void {
        this.translate.use(lang);
    }
}
