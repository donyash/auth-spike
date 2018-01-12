System.register(['angular2/core', 'angular2/http', '../shared/login.service'], function(exports_1, context_1) {
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
    var core_1, http_1, login_service_1;
    var HeadersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            HeadersService = (function () {
                function HeadersService(_login) {
                    this._login = _login;
                }
                HeadersService.prototype.getContentTypeHeaders = function (token) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    if (token)
                        //headers.append('x-access-token',token)
                        headers.append('Authorization', 'Bearer ' + token);
                    return { headers: headers };
                };
                HeadersService.prototype.getUserToken = function () {
                    //console.log('user token: ' + this._login.getToken());
                    //console.log('user: ' + this._login.getUser());
                    var headers = new http_1.Headers();
                    headers.append('Authorization', 'Bearer ' + this._login.getToken());
                    return { headers: headers };
                };
                HeadersService.prototype.formatUserLogin = function (user) {
                    var data = "username=" + user.email + "&password=" + user.password + "&grant_type=password";
                    return data;
                };
                HeadersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], HeadersService);
                return HeadersService;
            }());
            exports_1("HeadersService", HeadersService);
        }
    }
});
//# sourceMappingURL=headers.service.js.map