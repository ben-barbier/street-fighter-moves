import { Component, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { data } from '../../data';

@Component({
    selector: 'app-characters-list-page',
    templateUrl: './characters-list-page.component.html',
    styleUrls: ['./characters-list-page.component.scss'],
})
export class CharactersListPageComponent implements OnDestroy {
    public characters = data[0].characters;

    constructor(private title: Title, private meta: Meta) {
        const titleText = 'Street Fighter Moves';
        title.setTitle(titleText);

        const description = 'Street Fighter 4 Arcade Edition';
        meta.updateTag({ name: 'description', content: description });

        // 📖 : https://developers.facebook.com/docs/sharing/webmasters#markup
        meta.updateTag({ name: 'og:url', content: window.location.href });
        meta.updateTag({ name: 'og:type', content: 'website' });
        meta.updateTag({ name: 'og:title', content: titleText });
        meta.updateTag({ name: 'og:description', content: description });
        meta.updateTag({ name: 'og:image', content: `${window.location.origin}/assets/logo.png` });
    }

    ngOnDestroy(): void {
        this.removeMetaTags();
    }

    private removeMetaTags(): void {
        ['description', 'og:url', 'og:type', 'og:title', 'og:description', 'og:image'].forEach(tag => this.meta.removeTag(`name='${tag}'`));
    }
}
