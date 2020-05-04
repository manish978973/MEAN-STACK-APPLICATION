import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ErrorComponent} from './error/error.component';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private dialog:MatDialog){}

  intercept(req:HttpRequest<any>,next:HttpHandler){              //angular will call this method for requests that will be living the app


            return next.handle(req).pipe(
              catchError((error: HttpErrorResponse)=>{
               // console.log(error);
               // alert(error.error.error.message);
               let errormessage = "An unknown error occured"
               if(error.error.message){
                     errormessage = error.error.message;
               }
               this.dialog.open(ErrorComponent,{data:{message:errormessage}});
                return throwError(error);
              })
            );
      }
}
