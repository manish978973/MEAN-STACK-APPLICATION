(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(n,t,i){"use strict";i.r(t);var e=i("3Pt+"),s=i("rhD1"),a=i("ofXK"),o=i("tyNb"),r=i("fXoL"),c=i("qXBG"),u=i("Wp6s"),b=i("Xa2L"),m=i("kmnG"),l=i("qFsG"),d=i("bTqV");function p(n,t){1&n&&r.Ob(0,"mat-spinner")}function f(n,t){1&n&&(r.Sb(0,"mat-error"),r.wc(1,"Please enter a valid email"),r.Rb())}function g(n,t){1&n&&(r.Sb(0,"mat-error"),r.wc(1,"Please enter a valid password"),r.Rb())}function h(n,t){1&n&&(r.Sb(0,"button",9),r.wc(1,"Login"),r.Rb())}function v(n,t){if(1&n){const n=r.Tb();r.Sb(0,"form",2,3),r.ac("submit",(function(t){r.pc(n);const i=r.nc(1);return r.ec().onLogin(i)})),r.Sb(2,"mat-form-field"),r.Ob(3,"input",4,5),r.vc(5,f,2,0,"mat-error",0),r.Rb(),r.Sb(6,"mat-form-field"),r.Ob(7,"input",6,7),r.vc(9,g,2,0,"mat-error",0),r.Rb(),r.vc(10,h,2,0,"button",8),r.Rb()}if(2&n){const n=r.nc(4),t=r.nc(8),i=r.ec();r.Bb(5),r.jc("ngIf",n.invalid),r.Bb(4),r.jc("ngIf",t.invalid),r.Bb(1),r.jc("ngIf",!i.isLoading)}}function w(n,t){1&n&&(r.Sb(0,"mat-error"),r.wc(1,"Please enter a valid email"),r.Rb())}function y(n,t){1&n&&(r.Sb(0,"mat-error"),r.wc(1,"Please enter a valid password"),r.Rb())}function S(n,t){if(1&n){const n=r.Tb();r.Sb(0,"form",1,2),r.ac("submit",(function(t){r.pc(n);const i=r.nc(1);return r.ec().onSignup(i)})),r.Sb(2,"mat-form-field"),r.Ob(3,"input",3,4),r.vc(5,w,2,0,"mat-error",5),r.Rb(),r.Sb(6,"mat-form-field"),r.Ob(7,"input",6,7),r.vc(9,y,2,0,"mat-error",5),r.Rb(),r.Sb(10,"button",8),r.wc(11,"Sign up"),r.Rb(),r.Rb()}if(2&n){const n=r.nc(4),t=r.nc(8);r.Bb(5),r.jc("ngIf",n.invalid),r.Bb(4),r.jc("ngIf",t.invalid)}}const I=[{path:"login",component:(()=>{class n{constructor(n){this.authservice=n,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authservice.getAuthstatuslistener().subscribe(()=>{this.isLoading=!1})}ngOnDestroy(){this.authStatusSub.unsubscribe()}onLogin(n){n.invalid||(this.isLoading=!0,this.authservice.loginuser(n.value.email,n.value.password))}}return n.\u0275fac=function(t){return new(t||n)(r.Nb(c.a))},n.\u0275cmp=r.Hb({type:n,selectors:[["login-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginform","ngForm"],["matInput","","type","email","name","email","ngModel","","placeholder","E-Mail","ngModel","","required","","email",""],["matinput","ngModel"],["matInput","","type","password","placeholder","Password","name","password","ngModel","","required",""],["matpassword","ngModel"],["mat-raised-button","","color","primary","type","submit",4,"ngIf"],["mat-raised-button","","color","primary","type","submit"]],template:function(n,t){1&n&&(r.Sb(0,"mat-card"),r.vc(1,p,1,0,"mat-spinner",0),r.vc(2,v,11,3,"form",1),r.Rb()),2&n&&(r.Bb(1),r.jc("ngIf",t.isLoading),r.Bb(1),r.jc("ngIf",!t.isLoading))},directives:[u.a,a.k,b.b,e.p,e.j,e.k,m.b,l.a,e.a,e.i,e.l,e.n,e.b,m.a,d.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n})()},{path:"signup",component:(()=>{class n{constructor(n){this.userservice=n,this.isLoading=!1}ngOnInit(){this.subi=this.userservice.getAuthstatuslistener().subscribe(n=>{console.log("The subscription for duplicate is "+n),this.isLoading=!1})}ngOnDestroy(){this.subi.unsubscribe()}onSignup(n){n.invalid||(this.isLoading=!0,this.userservice.inputuser(n.value.email,n.value.password))}}return n.\u0275fac=function(t){return new(t||n)(r.Nb(c.a))},n.\u0275cmp=r.Hb({type:n,selectors:[["signup-component"]],decls:2,vars:1,consts:[[3,"submit",4,"ngIf"],[3,"submit"],["signupform","ngForm"],["matInput","","type","email","name","email","ngModel","","placeholder","E-Mail","required","","email",""],["matinput","ngModel"],[4,"ngIf"],["matInput","","type","password","placeholder","Password","name","password","ngModel","","required",""],["matpassword","ngModel"],["mat-raised-button","","color","primary","type","submit"]],template:function(n,t){1&n&&(r.Sb(0,"mat-card"),r.vc(1,S,12,2,"form",0),r.Rb()),2&n&&(r.Bb(1),r.jc("ngIf",!t.isLoading))},directives:[u.a,a.k,e.p,e.j,e.k,m.b,l.a,e.a,e.i,e.l,e.n,e.b,d.b,m.a],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n})()}];let L=(()=>{class n{}return n.\u0275mod=r.Lb({type:n}),n.\u0275inj=r.Kb({factory:function(t){return new(t||n)},imports:[[o.f.forChild(I)],o.f]}),n})();i.d(t,"AuthModule",(function(){return M}));let M=(()=>{class n{}return n.\u0275mod=r.Lb({type:n}),n.\u0275inj=r.Kb({factory:function(t){return new(t||n)},imports:[[e.m,s.a,a.c,o.f,e.g,L]]}),n})()}}]);