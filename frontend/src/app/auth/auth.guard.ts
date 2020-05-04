import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()        //since we are injecting one service inside a service , as per angular rule
export class AuthGuard implements CanActivate {

  constructor(private authservice:AuthService, private router:Router){}
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    // return true;
    const isauth = this.authservice.getAuthenticationstatus();
    console.log('The value of isauth is ' + isauth);
    if (!isauth){
        this.router.navigate(['/auth/login']);
    }
    return isauth;
  }

}
