import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { data } from '../../data';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
    public characters = data[0].characters;

    public isHandset = false;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver
            .observe(Breakpoints.Handset)
            .pipe(map(result => result.matches))
            .subscribe(isHandset => (this.isHandset = isHandset));
    }
}
