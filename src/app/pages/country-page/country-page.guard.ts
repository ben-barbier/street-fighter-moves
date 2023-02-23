import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { data } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class CountryPageGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const countryExists = data[0].characters.some(c => c.country === route.params['country']);
    return countryExists || this.router.createUrlTree(['/sf4']);
  }
}
