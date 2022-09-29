import { NgFor, NgStyle } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { map } from 'rxjs/operators';
import { Character, countries, maxStamina, maxStun } from '../../data';
import { CharacterDetailsComponent } from '../character-page/character-details/character-details.component';

@Component({
    selector: 'app-country-page',
    templateUrl: './country-page.component.html',
    styleUrls: ['./country-page.component.scss'],
    animations: [fadeInOnEnterAnimation({ anchor: 'enter', duration: 800 })],
    standalone: true,
    imports: [NgFor, NgStyle, RouterLinkWithHref, CharacterDetailsComponent],
})
export class CountryPageComponent implements OnDestroy {
    public characters: Character[] = [];
    public maxStamina = maxStamina(1);
    public maxStun = maxStun(1);
    public country = '';
    public otherCountries: string[] = [];

    constructor(private route: ActivatedRoute, private title: Title, private meta: Meta) {
        this.route.data.pipe(map(resolveData => resolveData['character'])).subscribe(characters => {
            this.country = characters[0].country;
            this.characters = characters;
            this.otherCountries = [...new Set(countries(1).filter(c => c !== this.characters[0].country))];

            const titleText = `Street Fighter Moves - ${this.country}`;
            title.setTitle(titleText);

            const description = `Street Fighter 4 Arcade Edition - ${this.country} characters`;
            meta.updateTag({ name: 'description', content: description });

            // 📖 : https://developers.facebook.com/docs/sharing/webmasters#markup
            meta.updateTag({ name: 'og:url', content: document.URL });
            meta.updateTag({ name: 'og:type', content: 'website' });
            meta.updateTag({ name: 'og:title', content: titleText });
            meta.updateTag({ name: 'og:description', content: description });
            meta.updateTag({ name: 'og:image', content: `${document.baseURI}assets/countries/${this.country}.svg` });
        });
    }

    ngOnDestroy(): void {
        this.removeMetaTags();
    }

    private removeMetaTags(): void {
        ['description', 'og:url', 'og:type', 'og:title', 'og:description', 'og:image'].forEach(tag => this.meta.removeTag(`name='${tag}'`));
    }
}
