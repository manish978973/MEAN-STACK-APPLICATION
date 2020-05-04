import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthService} from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private AuthService:AuthService ){}

  intercept(req:HttpRequest<any>,next:HttpHandler){              //angular will call this method for requests that will be living the app

            const authToken = this.AuthService.getToken();
            const authrequest = req.clone({
              headers:req.headers.set('Authorization',"Bearer "+ authToken)

            })
            return next.handle(authrequest);
      }
}
