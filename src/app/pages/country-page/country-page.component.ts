import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { Character, countries, maxStamina, maxStun } from '../../data';
import { CharacterDetailsComponent } from '../character-page/character-details/character-details.component';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, CharacterDetailsComponent],
})
export class CountryPageComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);
  private translate = inject(TranslateService);

  public characters: Character[] = [];
  public maxStamina: number = maxStamina(1);
  public maxStun: number = maxStun(1);
  public country: string = '';
  public otherCountries: string[] = [];

  ngOnInit(): void {
    this.route.data.pipe(map(resolveData => resolveData['character'])).subscribe(characters => {
      this.country = characters[0].country;
      this.characters = characters;
      this.otherCountries = [...new Set(countries(1).filter(c => c !== this.characters[0].country))];

      const titleText = this.translate.instant('pages.country.title', { country: this.country });
      this.title.setTitle(titleText);

      const description = `Street Fighter 4 Arcade Edition - ${this.country} characters`;
      this.meta.updateTag({ name: 'description', content: description });

      // 📖 : https://developers.facebook.com/docs/sharing/webmasters#markup
      this.meta.updateTag({ name: 'og:url', content: document.URL });
      this.meta.updateTag({ name: 'og:type', content: 'website' });
      this.meta.updateTag({ name: 'og:title', content: titleText });
      this.meta.updateTag({ name: 'og:description', content: description });
      this.meta.updateTag({ name: 'og:image', content: `${document.baseURI}assets/countries/${this.country}.svg` });
    });
  }

  ngOnDestroy(): void {
    this.removeMetaTags();
  }

  private removeMetaTags(): void {
    ['description', 'og:url', 'og:type', 'og:title', 'og:description', 'og:image'].forEach(tag => this.meta.removeTag(`name='${tag}'`));
  }
}
