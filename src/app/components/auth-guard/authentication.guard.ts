import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {SessionTokenHolderService} from '../../services/session-token-holder.service';
// tslint:disable-next-line:max-line-length

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private sessionTokenHolderService: SessionTokenHolderService, private router: Router) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
      Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.sessionTokenHolderService.token) {
      this.router.navigateByUrl('/login').then( result => console.log('User not logged in!!!! Going home'));
    }
    return !!this.sessionTokenHolderService.token;
  }
}
