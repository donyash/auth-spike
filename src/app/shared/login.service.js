System.register(['angular2/core', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService() {
                    this.user = null;
                    this.token = null;
                }
                LoginService.prototype.setLogin = function (u, t, uname) {
                    this.user = u;
                    this.token = t;
                    this.uname = uname;
                };
                LoginService.prototype.getToken = function () {
                    return this.token;
                };
                LoginService.prototype.getUser = function () {
                    return this.user;
                };
                LoginService.prototype.getUserName = function () {
                    return this.uname;
                };
                LoginService.prototype.isLoggedIn = function () {
                    //    var result = this.user!=null && this.token!=null; 
                    //    if( typeof result == "undefined")
                    //     return false;
                    //    //return this.user!=null && this.token!=null; 
                    //    return result;
                    return this.user != null && this.token != null;
                };
                LoginService.prototype.logout = function () {
                    this.user = null;
                    this.token = null;
                };
                LoginService.prototype.check = function () {
                    return Observable_1.Observable.of(this.isLoggedIn);
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=login.service.js.map