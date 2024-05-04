/**
 * Title: sing-in.guard.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 5/4/2024
 * Description: Sign in guard
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const sessionUser = this.cookieService.get('session_user');

      if(sessionUser) {
        return true;
      } else {
        this.router.navigate(['/session/sign-in']);
        return false;
      }
  }

}
