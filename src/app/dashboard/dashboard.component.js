System.register(['angular2/core', '../shared/login.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, login_service_1, router_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(loginService, router) {
                    this.loginService = loginService;
                    this.router = router;
                    this.pageTitle = "Dashboard";
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    console.log('ngOnInit: DashboardComponent');
                    this.isLoggedIn = this.loginService.isLoggedIn();
                    this.loggedInUser = this.loginService.getUserName() == null ? 'Not logged in' : this.loginService.getUserName();
                    console.log('logged in user:' + this.loginService.getUserName());
                };
                DashboardComponent.prototype.logIn = function () {
                    this.router.navigate(['Login']);
                };
                DashboardComponent.prototype.logOut = function () {
                    this.loginService.setLogin(null, null, null);
                    return this.router.navigate(['Welcome']); //TODO: create logout component
                };
                DashboardComponent.prototype.close = function () {
                    var parent = document.getElementById("alert-div");
                    var child = document.getElementById("alert");
                    parent.removeChild(child);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/dashboard/dashboard.component.html'
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map