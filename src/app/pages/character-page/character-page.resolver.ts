import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Character, data } from '../../data';

export const characterPageResolver: ResolveFn<Character> = (route: ActivatedRouteSnapshot): Observable<Character> => {
  return of(data[0].characters.find(c => c.id === route.params['characterId']) as Character);
};
