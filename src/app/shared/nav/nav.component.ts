import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, pluck } from 'rxjs/operators';
import { version } from '../../../../package.json';
import { data } from '../../data';
import { slideInAnimation } from '../animations';
import { ControlsComponent } from '../controls/controls.component';

const PAGES_WITHOUT_NAV = ['ListPage'];

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    animations: [slideInAnimation],
})
export class NavComponent {
    @ViewChild('drawer') drawer: MatDrawer | undefined;

    public characters = data[0].characters;
    public version: string = version;
    public isHandset = false;

    // public xxx: Observable<boolean>;

    constructor(
        private breakpointObserver: BreakpointObserver,
        private dialog: MatDialog,
        private translate: TranslateService,
        private router: Router,
    ) {
        this.breakpointObserver
            .observe('(max-width: 739px)')
            .pipe(map(result => result.matches))
            .subscribe(isHandset => (this.isHandset = isHandset));

        // this.xxx =
        this.router.events
            .pipe(
                filter(e => e instanceof ActivationEnd),
                pluck('snapshot', 'data', 'page'),
                map(page => PAGES_WITHOUT_NAV.some(pwn => pwn === page)),
            )
            .subscribe(() => this.drawer?.close());
    }

    public openControls(): void {
        this.dialog.open(ControlsComponent);
    }

    public setLang(lang: 'fr' | 'en'): void {
        this.translate.use(lang);
    }

    public prepareRoute(outlet: RouterOutlet): string | undefined {
        return outlet?.activatedRouteData?.page;
    }
}
