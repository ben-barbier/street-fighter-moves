import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Character, data } from '../../data';

export const countryPageResolver: ResolveFn<Character[]> = (route: ActivatedRouteSnapshot): Observable<Character[]> => {
  return of(data[0].characters.filter(c => c.country === route.params['country']));
};
