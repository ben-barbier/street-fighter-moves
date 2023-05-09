import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, UrlTree } from '@angular/router';
import { data } from '../../data';

export const canActivateCountry: CanActivateFn = (route: ActivatedRouteSnapshot): boolean | UrlTree => {
  const countryExists = data[0].characters.some(c => c.country === route.params['country']);
  return countryExists || inject(Router).createUrlTree(['/sf4']);
};
