import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Character, data } from '../../data';

@Component({
  selector: 'app-characters-list-page',
  templateUrl: './characters-list-page.component.html',
  styleUrls: ['./characters-list-page.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class CharactersListPageComponent implements OnInit, OnDestroy {
  private title = inject(Title);
  private meta = inject(Meta);
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);

  public characters: Character[] = data[0].characters;

  public trackById = (index: number, character: Character) => character.id;

  ngOnInit(): void {
    const titleText = this.translate.instant('pages.characters-list.title');
    this.title.setTitle(titleText);

    const description = 'Street Fighter 4 Arcade Edition';
    this.meta.updateTag({ name: 'description', content: description });

    // 📖 : https://developers.facebook.com/docs/sharing/webmasters#markup
    this.meta.updateTag({ name: 'og:url', content: this.document.URL });
    this.meta.updateTag({ name: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'og:title', content: titleText });
    this.meta.updateTag({ name: 'og:description', content: description });
    this.meta.updateTag({ name: 'og:image', content: `${this.document.baseURI}assets/logo.png` });
  }

  ngOnDestroy(): void {
    this.removeMetaTags();
  }

  private removeMetaTags(): void {
    ['description', 'og:url', 'og:type', 'og:title', 'og:description', 'og:image'].forEach(tag => this.meta.removeTag(`name='${tag}'`));
  }
}
