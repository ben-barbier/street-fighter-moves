import { Component, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { map } from 'rxjs/operators';
import { Character, countries, maxStamina, maxStun } from '../../data';

@Component({
    selector: 'app-country-page',
    templateUrl: './country-page.component.html',
    styleUrls: ['./country-page.component.scss'],
    animations: [fadeInOnEnterAnimation({ anchor: 'enter', duration: 800 })],
})
export class CountryPageComponent implements OnDestroy {
    public characters: Character[] = [];
    public maxStamina = maxStamina(1);
    public maxStun = maxStun(1);
    public otherCountries: string[] = [];

    // TODO: manage title and tags

    constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {
        this.route.data.pipe(map(resolveData => resolveData.character)).subscribe(characters => {
            this.characters = characters;
            this.otherCountries = [...new Set(countries(1).filter(c => c !== this.characters[0].country))];
        });
    }

    ngOnDestroy(): void {
        this.removeMetaTags();
    }

    private removeMetaTags(): void {
        [].forEach(tag => this.meta.removeTag(`name='${tag}'`));
    }
}
