import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { slideInRightOnEnterAnimation } from 'angular-animations';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character, maxStamina, maxStun } from '../../data';

@UntilDestroy()
@Component({
    selector: 'app-character-page',
    templateUrl: './character-page.component.html',
    styleUrls: ['./character-page.component.scss'],
    animations: [slideInRightOnEnterAnimation({ anchor: 'enter', duration: 600 })],
})
export class CharacterPageComponent implements OnDestroy {
    public character$: Observable<Character> = this.route.data.pipe(map(resolveData => resolveData['character']));
    public maxStamina = maxStamina(1);
    public maxStun = maxStun(1);

    constructor(private route: ActivatedRoute, private title: Title, private meta: Meta, @Inject(DOCUMENT) private document: Document) {
        this.character$.pipe(untilDestroyed(this)).subscribe((character: Character) => {
            const titleText = `Street Fighter Moves - ${character.name}`;
            title.setTitle(titleText);

            const description = `Street Fighter 4 Arcade Edition - ${character.name} moves`;
            meta.updateTag({ name: 'description', content: description });

            // 📖 : https://developers.facebook.com/docs/sharing/webmasters#markup
            meta.updateTag({ name: 'og:url', content: document.URL });
            meta.updateTag({ name: 'og:type', content: 'website' });
            meta.updateTag({ name: 'og:title', content: titleText });
            meta.updateTag({ name: 'og:description', content: description });
            meta.updateTag({ name: 'og:image', content: `${document.baseURI}assets/characters/${character.id}_thumbnail.png` });
        });
    }

    ngOnDestroy(): void {
        this.removeMetaTags();
    }

    private removeMetaTags(): void {
        ['description', 'og:url', 'og:type', 'og:title', 'og:description', 'og:image'].forEach(tag => this.meta.removeTag(`name='${tag}'`));
    }
}
