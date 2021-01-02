import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { data } from '../../data';
import { ControlsComponent } from '../controls/controls.component';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
    public characters = data[0].characters;

    public isHandset = false;

    constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog) {
        this.breakpointObserver
            .observe(Breakpoints.Handset)
            .pipe(map(result => result.matches))
            .subscribe(isHandset => (this.isHandset = isHandset));
    }

    public openControls(): void {
        this.dialog.open(ControlsComponent);
    }
}
