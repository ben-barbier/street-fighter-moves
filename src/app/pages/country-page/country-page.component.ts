import { Component, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-country-page',
    templateUrl: './country-page.component.html',
    styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent implements OnDestroy {
    public characters$ = this.route.data.pipe(map(resolveData => resolveData.character));

    constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {}

    ngOnDestroy(): void {
        this.removeMetaTags();
    }

    private removeMetaTags(): void {
        [].forEach(tag => this.meta.removeTag(`name='${tag}'`));
    }
}
