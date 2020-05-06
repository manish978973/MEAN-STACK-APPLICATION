function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(n,t,e){"use strict";e.r(t);var i=e("3Pt+"),a=e("rhD1"),r=e("ofXK"),o=e("tyNb"),s=e("fXoL"),c=e("qXBG"),u=e("Wp6s"),l=e("Xa2L"),b=e("kmnG"),f=e("qFsG"),m=e("bTqV");function p(n,t){1&n&&s.Ob(0,"mat-spinner")}function d(n,t){1&n&&(s.Sb(0,"mat-error"),s.wc(1,"Please enter a valid email"),s.Rb())}function g(n,t){1&n&&(s.Sb(0,"mat-error"),s.wc(1,"Please enter a valid password"),s.Rb())}function v(n,t){1&n&&(s.Sb(0,"button",9),s.wc(1,"Login"),s.Rb())}function h(n,t){if(1&n){var e=s.Tb();s.Sb(0,"form",2,3),s.ac("submit",(function(n){s.pc(e);var t=s.nc(1);return s.ec().onLogin(t)})),s.Sb(2,"mat-form-field"),s.Ob(3,"input",4,5),s.vc(5,d,2,0,"mat-error",0),s.Rb(),s.Sb(6,"mat-form-field"),s.Ob(7,"input",6,7),s.vc(9,g,2,0,"mat-error",0),s.Rb(),s.vc(10,v,2,0,"button",8),s.Rb()}if(2&n){var i=s.nc(4),a=s.nc(8),r=s.ec();s.Bb(5),s.jc("ngIf",i.invalid),s.Bb(4),s.jc("ngIf",a.invalid),s.Bb(1),s.jc("ngIf",!r.isLoading)}}function w(n,t){1&n&&(s.Sb(0,"mat-error"),s.wc(1,"Please enter a valid email"),s.Rb())}function y(n,t){1&n&&(s.Sb(0,"mat-error"),s.wc(1,"Please enter a valid password"),s.Rb())}function S(n,t){if(1&n){var e=s.Tb();s.Sb(0,"form",1,2),s.ac("submit",(function(n){s.pc(e);var t=s.nc(1);return s.ec().onSignup(t)})),s.Sb(2,"mat-form-field"),s.Ob(3,"input",3,4),s.vc(5,w,2,0,"mat-error",5),s.Rb(),s.Sb(6,"mat-form-field"),s.Ob(7,"input",6,7),s.vc(9,y,2,0,"mat-error",5),s.Rb(),s.Sb(10,"button",8),s.wc(11,"Sign up"),s.Rb(),s.Rb()}if(2&n){var i=s.nc(4),a=s.nc(8);s.Bb(5),s.jc("ngIf",i.invalid),s.Bb(4),s.jc("ngIf",a.invalid)}}var k,C,I,L=[{path:"login",component:(C=function(){function n(t){_classCallCheck(this,n),this.authservice=t,this.isLoading=!1}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.authStatusSub=this.authservice.getAuthstatuslistener().subscribe((function(){n.isLoading=!1}))}},{key:"ngOnDestroy",value:function(){this.authStatusSub.unsubscribe()}},{key:"onLogin",value:function(n){n.invalid||(this.isLoading=!0,this.authservice.loginuser(n.value.email,n.value.password))}}]),n}(),C.\u0275fac=function(n){return new(n||C)(s.Nb(c.a))},C.\u0275cmp=s.Hb({type:C,selectors:[["login-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginform","ngForm"],["matInput","","type","email","name","email","ngModel","","placeholder","E-Mail","ngModel","","required","","email",""],["matinput","ngModel"],["matInput","","type","password","placeholder","Password","name","password","ngModel","","required",""],["matpassword","ngModel"],["mat-raised-button","","color","primary","type","submit",4,"ngIf"],["mat-raised-button","","color","primary","type","submit"]],template:function(n,t){1&n&&(s.Sb(0,"mat-card"),s.vc(1,p,1,0,"mat-spinner",0),s.vc(2,h,11,3,"form",1),s.Rb()),2&n&&(s.Bb(1),s.jc("ngIf",t.isLoading),s.Bb(1),s.jc("ngIf",!t.isLoading))},directives:[u.a,r.k,l.b,i.p,i.j,i.k,b.b,f.a,i.a,i.i,i.l,i.n,i.b,b.a,m.b],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),C)},{path:"signup",component:(k=function(){function n(t){_classCallCheck(this,n),this.userservice=t,this.isLoading=!1}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.subi=this.userservice.getAuthstatuslistener().subscribe((function(t){console.log("The subscription for duplicate is "+t),n.isLoading=!1}))}},{key:"ngOnDestroy",value:function(){this.subi.unsubscribe()}},{key:"onSignup",value:function(n){n.invalid||(this.isLoading=!0,this.userservice.inputuser(n.value.email,n.value.password))}}]),n}(),k.\u0275fac=function(n){return new(n||k)(s.Nb(c.a))},k.\u0275cmp=s.Hb({type:k,selectors:[["signup-component"]],decls:2,vars:1,consts:[[3,"submit",4,"ngIf"],[3,"submit"],["signupform","ngForm"],["matInput","","type","email","name","email","ngModel","","placeholder","E-Mail","required","","email",""],["matinput","ngModel"],[4,"ngIf"],["matInput","","type","password","placeholder","Password","name","password","ngModel","","required",""],["matpassword","ngModel"],["mat-raised-button","","color","primary","type","submit"]],template:function(n,t){1&n&&(s.Sb(0,"mat-card"),s.vc(1,S,12,2,"form",0),s.Rb()),2&n&&(s.Bb(1),s.jc("ngIf",!t.isLoading))},directives:[u.a,r.k,i.p,i.j,i.k,b.b,f.a,i.a,i.i,i.l,i.n,i.b,m.b,b.a],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),k)}],M=((I=function n(){_classCallCheck(this,n)}).\u0275mod=s.Lb({type:I}),I.\u0275inj=s.Kb({factory:function(n){return new(n||I)},imports:[[o.f.forChild(L)],o.f]}),I);e.d(t,"AuthModule",(function(){return _}));var P,_=((P=function n(){_classCallCheck(this,n)}).\u0275mod=s.Lb({type:P}),P.\u0275inj=s.Kb({factory:function(n){return new(n||P)},imports:[[i.m,a.a,r.c,o.f,i.g,M]]}),P)}}]);