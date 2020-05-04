import {Auth} from "./auth.model";
import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {environment} from '../../environments/environment';


const url = environment.mainurl + "user/";

@Injectable({providedIn:"root"})
export class AuthService{

  private token:string;
  private authstatuslistener = new Subject<boolean>();
  public isAuthenticated = false;
  private tokentimer: any;
  private userid:string;
//"http://localhost:3000/api/"


constructor(private http:HttpClient, private router:Router){}

inputuser(username:string,password:string){

  const user:Auth = {email:username,password:password};

  this.http.post(url+'signup',user).subscribe((result)=>{
    console.log(result);
    this.router.navigate(["/"]);
  },(err)=>{
    this.authstatuslistener.next(false);
  })

}

getToken(){
  return this.token;
}

getUserid(){
  return this.userid;
}


getAuthenticationstatus(){
  return this.isAuthenticated;
}

getAuthstatuslistener(){
  return this.authstatuslistener.asObservable();
}


loginuser(username:string,password:string){
 const loginuser:Auth = {email:username,password:password};
 this.http.post<{token:string,expiresin:number,userid:string}>(url+'login',loginuser).subscribe((result)=>{



  console.log("Expires in " + result.expiresin);
  this.token = result.token;
   if (this.token){
    const expirytime = result.expiresin;
    this.timeoutinsec(expirytime);
    this.authstatuslistener.next(true);
    this.isAuthenticated = true;
    this.userid = result.userid;
    const now = new Date();
    const expirationdate = new Date(now.getTime() + expirytime*1000);
    console.log(expirationdate);
    this.saveAuthdata(this.token,expirationdate,this.userid)
    this.router.navigate(["/"]);
  }

})
}


private timeoutinsec(x:number){
  this.tokentimer = setTimeout(() => {
    this.logout();
  }, x * 1000);
}


autoAuthuser(){
  const authinfo =  this.getAuthdata();
  const current = new Date();
  const timetoexpire = authinfo.expirationdate.getTime()-current.getTime();
  if (timetoexpire > 0){
    this.token = authinfo.token;
    this.isAuthenticated = true;
    this.userid = authinfo.userid;
    this.authstatuslistener.next(true);
    this.timeoutinsec(timetoexpire/1000);


  }

}

private getAuthdata(){
  const token = localStorage.getItem("token");
  const expirationdate = localStorage.getItem("expirydate");
  const userid = localStorage.getItem("userid");
  if(!token || !expirationdate ){
    return
  }
  return {token:token,expirationdate:new Date(expirationdate),userid:userid}
}


logout(){
  this.token = null;
  this.isAuthenticated = false;
  this.userid = null;
  this.authstatuslistener.next(false);
  clearTimeout(this.tokentimer);
  this.cleardata();
  this.router.navigate(["/"]);
}

private saveAuthdata(token:string,expirydate:Date,userid:string){
     localStorage.setItem("token",token);
     localStorage.setItem("expirydate",expirydate.toISOString());
     localStorage.setItem("userid",userid);
}

private cleardata(){
  localStorage.removeItem("token");
  localStorage.removeItem("expirydate");
  localStorage.removeItem("userid");
}



}
