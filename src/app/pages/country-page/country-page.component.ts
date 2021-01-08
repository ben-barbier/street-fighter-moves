import { Component, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { zoomInOnEnterAnimation } from 'angular-animations';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character, maxStamina, maxStun } from '../../data';

@Component({
    selector: 'app-country-page',
    templateUrl: './country-page.component.html',
    styleUrls: ['./country-page.component.scss'],
    animations: [zoomInOnEnterAnimation({ anchor: 'enter', duration: 800 })],
})
export class CountryPageComponent implements OnDestroy {
    public characters$: Observable<Character[]> = this.route.data.pipe(map(resolveData => resolveData.character));
    public maxStamina = maxStamina(1);
    public maxStun = maxStun(1);

    constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {}

    ngOnDestroy(): void {
        this.removeMetaTags();
    }

    private removeMetaTags(): void {
        [].forEach(tag => this.meta.removeTag(`name='${tag}'`));
    }
}
