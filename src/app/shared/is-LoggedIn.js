// export function isLoggedIn() {
//     return false;
// }
System.register(['../app-injector', './login.service', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_injector_1, login_service_1, router_1;
    var isLoggedIn;
    return {
        setters:[
            function (app_injector_1_1) {
                app_injector_1 = app_injector_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            //ComponentInstruction
            exports_1("isLoggedIn", isLoggedIn = function (next, previous) {
                var injector = app_injector_1.appInjector(); // get the stored reference to the injector
                var auth = injector.get(login_service_1.LoginService);
                var router = injector.get(router_1.Router);
                // return a boolean or a promise that resolves a boolean
                return new Promise(function (resolve) {
                    auth.check()
                        .subscribe(function (result) {
                        if (result) {
                            resolve(true);
                        }
                        else {
                            router.navigate(['Login']);
                            resolve(false);
                        }
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=is-LoggedIn.js.map