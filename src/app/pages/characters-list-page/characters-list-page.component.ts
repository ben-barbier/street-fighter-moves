import { DOCUMENT, NgFor } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Character, data } from '../../data';

@Component({
  selector: 'app-characters-list-page',
  templateUrl: './characters-list-page.component.html',
  styleUrls: ['./characters-list-page.component.scss'],
  standalone: true,
  imports: [NgFor, RouterLink],
})
export class CharactersListPageComponent implements OnDestroy {
  public characters: Character[] = data[0].characters;

  public trackById = (index: number, character: Character) => character.id;

  constructor(private title: Title, private meta: Meta, @Inject(DOCUMENT) private document: Document) {
    const titleText = 'Street Fighter Moves';
    title.setTitle(titleText);

    const description = 'Street Fighter 4 Arcade Edition';
    meta.updateTag({ name: 'description', content: description });

    // 📖 : https://developers.facebook.com/docs/sharing/webmasters#markup
    meta.updateTag({ name: 'og:url', content: document.URL });
    meta.updateTag({ name: 'og:type', content: 'website' });
    meta.updateTag({ name: 'og:title', content: titleText });
    meta.updateTag({ name: 'og:description', content: description });
    meta.updateTag({ name: 'og:image', content: `${document.baseURI}assets/logo.png` });
  }

  ngOnDestroy(): void {
    this.removeMetaTags();
  }

  private removeMetaTags(): void {
    ['description', 'og:url', 'og:type', 'og:title', 'og:description', 'og:image'].forEach(tag => this.meta.removeTag(`name='${tag}'`));
  }
}
