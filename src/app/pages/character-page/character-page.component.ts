import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character, maxStamina, maxStun } from '../../data';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterMovesComponent } from './character-moves/character-moves.component';

@UntilDestroy()
@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss'],
  standalone: true,
  imports: [CommonModule, CharacterDetailsComponent, CharacterMovesComponent],
})
export class CharacterPageComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);

  public character$: Observable<Character> = this.route.data.pipe(map(resolveData => resolveData['character']));
  public maxStamina = maxStamina(1);
  public maxStun = maxStun(1);

  ngOnInit(): void {
    this.character$.pipe(untilDestroyed(this)).subscribe((character: Character) => {
      const titleText = this.translate.instant('pages.character.title', { character: character.name });
      this.title.setTitle(titleText);

      const description = `Street Fighter 4 Arcade Edition - ${character.name} moves`;
      this.meta.updateTag({ name: 'description', content: description });

      // 📖 : https://developers.facebook.com/docs/sharing/webmasters#markup
      this.meta.updateTag({ name: 'og:url', content: this.document.URL });
      this.meta.updateTag({ name: 'og:type', content: 'website' });
      this.meta.updateTag({ name: 'og:title', content: titleText });
      this.meta.updateTag({ name: 'og:description', content: description });
      this.meta.updateTag({
        name: 'og:image',
        content: `${this.document.baseURI}assets/characters/${character.id}_thumbnail.png`,
      });
    });
  }

  ngOnDestroy(): void {
    this.removeMetaTags();
  }

  private removeMetaTags(): void {
    ['description', 'og:url', 'og:type', 'og:title', 'og:description', 'og:image'].forEach(tag => this.meta.removeTag(`name='${tag}'`));
  }
}
