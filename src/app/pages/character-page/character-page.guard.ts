import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { data } from '../../data';

@Injectable({
    providedIn: 'root',
})
export class CharacterPageGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        const characterExists = data[0].characters.some(c => c.id === route.params.characterId);
        return characterExists || this.router.createUrlTree(['/sf4']);
    }
}
