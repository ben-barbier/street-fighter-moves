import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { data } from '../../data';

export const canActivateCharacter: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
  const characterExists = data[0].characters.some(c => c.id === route.params['characterId']);
  return characterExists || inject(Router).createUrlTree(['/sf4']);
};
