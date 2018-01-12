System.register(['angular2/core', '../shared/login.service', 'angular2/router', '../shared/user.service', '../shared/user'], function(exports_1, context_1) {
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
    var core_1, login_service_1, router_1, user_service_1, user_1;
    var LoginFormComponent;
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
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            LoginFormComponent = (function () {
                function LoginFormComponent(userService, loginService, router) {
                    this.userService = userService;
                    this.loginService = loginService;
                    this.router = router;
                    this.pageTitle = "Welcome";
                    //@Input() private user:User=new User();
                    this.user = new user_1.User();
                    this.showLoading = false;
                    this.errorMessage = null;
                }
                LoginFormComponent.prototype.ngOnInit = function () {
                    console.log('ngOnInit: LoginComponent');
                    this.isLoggedIn = this.loginService.isLoggedIn();
                };
                LoginFormComponent.prototype.logOut = function () {
                    //todo: may also send to a server api method?
                    this.loginService.setLogin(null, null, null);
                    this.router.navigate(['Dashboard']);
                };
                LoginFormComponent.prototype.onClick = function (event) {
                    var _this = this;
                    event.preventDefault();
                    this.showLoading = true;
                    this.errorMessage = null;
                    // console.log("user:::" + JSON.stringify(this.user));              
                    this.userService.insert(this.user).subscribe(function (result) { return _this.onLoginResult(result); }, function (error) { return _this.onLoginError(error); });
                };
                LoginFormComponent.prototype.onLoginResult = function (result) {
                    console.log(result);
                    console.log('token: ' + result.access_token);
                    console.log('username: ' + result.userName);
                    this.loginService.setLogin(result.userName, result.access_token, result.userName);
                    this.router.navigate(['Dashboard']);
                };
                LoginFormComponent.prototype.onLoginError = function (error) {
                    //console.log(JSON.stringify(error));
                    this.showLoading = false;
                    this.errorMessage = error.json().error_description;
                };
                LoginFormComponent = __decorate([
                    core_1.Component({
                        selector: 'login-form',
                        templateUrl: 'app/shared/loginform.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, login_service_1.LoginService, router_1.Router])
                ], LoginFormComponent);
                return LoginFormComponent;
            }());
            exports_1("LoginFormComponent", LoginFormComponent);
        }
    }
});
//# sourceMappingURL=loginform.component.js.map