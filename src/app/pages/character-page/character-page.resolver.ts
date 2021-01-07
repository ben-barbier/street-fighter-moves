import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Character, data } from '../../data';

@Injectable({
    providedIn: 'root',
})
export class CharacterPageResolver implements Resolve<Character> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character> {
        return of(data[0].characters.find(c => c.id === route.params.characterId) as Character);
    }
}
