webpackJsonp([1,4],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePassword = function (password) {
        var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        return paswd.test(password);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/validate.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(507);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(681),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__validate_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(509);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_14_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(682),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.loggedIn()) {
            console.log(state.url);
            if (state.url == '/login' || state.url == '/register')
                this.router.navigate(['/dashboard']);
            return true;
        }
        else {
            if (state.url == '/profile' || state.url == '/dashboard')
                this.router.navigate(['/login']);
            return true;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(683),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/home.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show("You are now logged in!!!", { cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(684),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/login.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(685),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(686),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/profile.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validate_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(ValidateService, flashMessage, authService, router) {
        this.ValidateService = ValidateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
        };
        //REquied Fields
        if (!this.ValidateService.validateRegister(user)) {
            this.flashMessage.show('Please out all the fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //REquied Email
        if (!this.ValidateService.validateEmail(user.email)) {
            this.flashMessage.show('Please Enter the valid Email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //REquied PAssword
        if (!this.ValidateService.validatePassword(user.password)) {
            this.flashMessage.show('Password should contain 7 to 15 characters which contain at least one numeric digit and a special character', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //register USer
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(687),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/register.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/environment.js.map

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "body{\n  counter-reset:birds;\n  -webkit-touch-callout: none;\n-webkit-user-select: none;\n-moz-user-select: none;\n-ms-user-select: none;\nuser-select: none;\n  overflow:hidden;\n}\n/*hide checkbox*/\ninput{position:fixed; left:-10px; top:-10px;}\n\nh1{margin:0; text-align:center;}\nh2{position:fixed; right:20px; bottom:0; font-size:18px; color:red;}\n\n/*play area*/\n.wrapper{  \n  height:500px;\n  background: -webkit-linear-gradient(top, hsla(210,70%,80%,1) 0%,hsla(210,50%,100%,1) 100%);\n   position:fixed; z-index:100000; left:0; top:6.5%; bottom:0; right:0;\n  cursor:crosshair;\n}\n/*count dead birds*/\n.input-circle:checked{\n  counter-increment:birds;\n}\n\n.sum{position:fixed; left:45%; top:60px; font-size:24px; fonot-weight:bold;}\n\n/*print to screen dead birds*/\n.sum:after{\n  content: counter(birds);\n}\n\n.input-circle ~ .pajaro{\n  opacity:0;\n  transition:0.3s  cubic-bezier(0,.43,1,0);\n  -webkit-animation: move 8s infinite alternate;\n          animation: move 8s infinite alternate;\n}\n.input-circle1:not(:checked) ~ .pajaro1,\n.input-circle2:not(:checked) ~ .pajaro2,\n.input-circle3:not(:checked) ~ .pajaro3,\n.input-circle4:not(:checked) ~ .pajaro4,\n.input-circle5:not(:checked) ~ .pajaro5,\n.input-circle6:not(:checked) ~ .pajaro6\n{\n  opacity:1; \n}\n\n\n.input-circle1:checked ~ .pajaro1 span,\n.input-circle2:checked ~ .pajaro2 span,\n.input-circle3:checked ~ .pajaro3 span,\n.input-circle4:checked ~ .pajaro4 span,\n.input-circle5:checked ~ .pajaro5 span,\n.input-circle6:checked ~ .pajaro6 span\n{\n  display:block;\n  \n}\n\n.pajaro{   \n  position:absolute;\n  left:0;  \n  cursor:crosshair;\n}\n.pajaro>span{\n  display:none;position:absolute; z-index:2; left:-250%;bottom:-50%;  \n  background-color:white; border:solid 2px #000; width:80px; height:30px; padding:10px; border-radius:50%;\n}\n.pajaro>span:before{\n  content:\"I'm Dead!\"; color:red; font-weight:bold;\n}\n\n.pajaro1{top:50px;\n  -webkit-animation-delay: -2s!important;\n          animation-delay: -2s!important;\n  -webkit-transform:scale(0.9);\n          transform:scale(0.9);\n}\n.pajaro2{\n  top:100px;\n  -webkit-animation-delay: -4s!important;\n          animation-delay: -4s!important;\n  -webkit-transform:scale(0.5);\n          transform:scale(0.5); \n}\n.pajaro3{\n  top:200px;\n  -webkit-animation-delay: -3s!important;\n          animation-delay: -3s!important;\n  -webkit-transform:scale(1.4);\n          transform:scale(1.4); \n}\n\n.pajaro4{top:50px;\n  -webkit-animation-delay: -12s!important;\n          animation-delay: -12s!important;\n  -webkit-transform:scale(0.9);\n          transform:scale(0.9);\n}\n.pajaro5{\n  top:100px;\n  -webkit-animation-delay: -16s!important;\n          animation-delay: -16s!important;\n  -webkit-transform:scale(0.5);\n          transform:scale(0.5); \n}\n.pajaro6{\n  top:200px;\n  -webkit-animation-delay: -20s!important;\n          animation-delay: -20s!important;\n  -webkit-transform:scale(1.4);\n          transform:scale(1.4); \n}\n\n@-webkit-keyframes move{\n0%{left:0%;}\n20%{left:20%;top:50%; }\n40%{top:30%; left:60%;}\n60%{top:80%;left:80%;}\n80%{top:10%; left:20%;}\n100%{top:30%; left:20%; }\n}\n\n@keyframes move{\n0%{left:0%;}\n20%{left:20%;top:50%; }\n40%{top:30%; left:60%;}\n60%{top:80%;left:80%;}\n80%{top:10%; left:20%;}\n100%{top:30%; left:20%; }\n}\n\n\n.timer{\n  background-color:#333; width:300px;height:50px;top:8%;\n  position:fixed;\n}\n\n\n.timer span{\n  display:block;\n  background:repeating-linear-gradient(-45deg, #000, rgba(0, 0, 0, 0) 25px, #FFF 25px, #FFF 50px);\n  width:300px; height:50px;\n  -webkit-animation:timer 20s linear;\n          animation:timer 20s linear;\n}\n\n.timer span:before{  \n  content:\"TIME LEFT\";\n  display:block;\n  position:absolute; z-index:3;\n  left:0; \n  right:0;\n  top:0;\n  bottom:0;\n  text-align:center;\n  line-height:50px;\n  font-size:25px;\n  color:red;\n}\n@-webkit-keyframes timer{\n0%{width:10px;}\n100%{width:300px; display:block;}\n}\n@keyframes timer{\n0%{width:10px;}\n100%{width:300px; display:block;}\n}\n\n\n.gameover{\n  position:fixed; z-index:100000; left:0; top:0; bottom:0; right:0; background-color:rgba(0,0,0,0.8);\n  -webkit-animation:gameover 20s linear forwards;\n          animation:gameover 20s linear forwards;\n  font-size:80px; color:white; font-weight:bold; text-align:center; \n  text-indent:0;  \n  line-height:500px;\n}\n\n@-webkit-keyframes gameover{\n0%{left:-5000px;bottom:100%;}\n97%{left:-5000px;bottom:100%;}\n100%{ left:0px;}\n}\n\n@keyframes gameover{\n0%{left:-5000px;bottom:100%;}\n97%{left:-5000px;bottom:100%;}\n100%{ left:0px;}\n}\n\nfooter{position:fixed; left:0; bottom:0;}\n\n\n\n\n/*------------------------------------------------------ body of the bird\n*/\n\n.pajaro{\n  background:black;\n  border-radius: 50% 50% 20% 20%;\n  color:white;\n  line-height:20px;\n  letter-spacing: 2px;\n  font-size:0.8em;\n  text-align:center;\n  position:absolute;\n \n  margin-top:-20px; margin-left:-10px;\n  width:15px; height:15px;\n  -webkit-animation:planeo 0.8s linear infinite;\n          animation:planeo 0.8s linear infinite;\n  z-index:999;\n}\n\n.pajaro:after,\n.pajaro:before{\n  content:\"\";\n  position:absolute;\n  top:50%; left:50%;\n}\n\n/*------------------------------------------------------ bird wings\n*/\n\n.pajaro:after{\n  border-radius: 100% 100% 0 0;\n  box-shadow: inset 0px 5px 0 black;\n  width:100px; height:100px;\n  margin-top:-7px; margin-left:-50px;\n  -webkit-transform-origin: 100% 0%;\n          transform-origin: 100% 0%;\n  -webkit-animation:alas 3s linear infinite;\n          animation:alas 3s linear infinite;\n}\n\n/*------------------------------------------------------ bird beak\n*/\n\n.pajaro:before{\n  background:#FFC37F;\n  border-radius: 100% 0% 20% 0%;\n  margin-top:3px; margin-left:-4px;\n  width:6px; height:6px;\n  -webkit-transform:rotateZ(45deg);\n          transform:rotateZ(45deg);\n}\n\n/*------------------------------------------------------ wings animation\n*/\n\n@-webkit-keyframes alas {\n  50%{\n    -webkit-transform:rotateX(-1440deg);\n            transform:rotateX(-1440deg);\n  }\n}\n\n@keyframes alas {\n  50%{\n    -webkit-transform:rotateX(-1440deg);\n            transform:rotateX(-1440deg);\n  }\n}\n\n/*------------------------------------------------------ bird animation\n*/\n\n@-webkit-keyframes planeo {\n  40%{\n    -webkit-transform:rotateZ(2deg) translateX(2px) translateY(10px) translateZ(0);\n            transform:rotateZ(2deg) translateX(2px) translateY(10px) translateZ(0);\n    line-height:16px;\n    font-size:0.6em;\n  }\n  80%{\n    -webkit-transform:rotateZ(-2deg) translateX(5px) translateY(8px) translateZ(0);\n            transform:rotateZ(-2deg) translateX(5px) translateY(8px) translateZ(0);\n  }\n}\n\n@keyframes planeo {\n  40%{\n    -webkit-transform:rotateZ(2deg) translateX(2px) translateY(10px) translateZ(0);\n            transform:rotateZ(2deg) translateX(2px) translateY(10px) translateZ(0);\n    line-height:16px;\n    font-size:0.6em;\n  }\n  80%{\n    -webkit-transform:rotateZ(-2deg) translateX(5px) translateY(8px) translateZ(0);\n            transform:rotateZ(-2deg) translateX(5px) translateY(8px) translateZ(0);\n  }\n}"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = " \t\n/*\n    Note: It is best to use a less version of this file ( see http://css2less.cc\n    For the media queries use @screen-sm-min instead of 768px.\n    For .omb_spanOr use @body-bg instead of white.\n*/\n\n@media (min-width: 768px) {\n    .omb_row-sm-offset-3 div:first-child[class*=\"col-\"] {\n        margin-left: 25%;\n    }\n}\n\n.omb_login .omb_authTitle {\n    text-align: center;\n\tline-height: 300%;\n}\n\t\n.omb_login .omb_socialButtons a {\n\tcolor: white; // In yourUse @body-bg \n\topacity:0.9;\n}\n.omb_login .omb_socialButtons a:hover {\n    color: white;\n\topacity:1;    \t\n}\n.omb_login .omb_socialButtons .omb_btn-facebook {background: #3b5998;}\n.omb_login .omb_socialButtons .omb_btn-twitter {background: #00aced;}\n.omb_login .omb_socialButtons .omb_btn-google {background: #c32f10;}\n\n\n.omb_login .omb_loginOr {\n\tposition: relative;\n\tfont-size: 1.5em;\n\tcolor: #aaa;\n\tmargin-top: 1em;\n\tmargin-bottom: 1em;\n\tpadding-top: 0.5em;\n\tpadding-bottom: 0.5em;\n}\n.omb_login .omb_loginOr .omb_hrOr {\n\tbackground-color: #cdcdcd;\n\theight: 1px;\n\tmargin-top: 0px !important;\n\tmargin-bottom: 0px !important;\n}\n.omb_login .omb_loginOr .omb_spanOr {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 50%;\n\ttop: -0.6em;\n\tmargin-left: -1.5em;\n\tbackground-color: white;\n\twidth: 3em;\n\ttext-align: center;\n}\t\t\t\n\n.omb_login .omb_loginForm .input-group.i {\n\twidth: 2em;\n}\n.omb_login .omb_loginForm  .help-block {\n    color: red;\n}\n\n\t\n@media (min-width: 768px) {\n    .omb_login .omb_forgotPwd {\n        text-align: right;\n\t\tmargin-top:10px;\n \t}\t\t\n}"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = " \t\n/*\n    Note: It is best to use a less version of this file ( see http://css2less.cc\n    For the media queries use @screen-sm-min instead of 768px.\n    For .omb_spanOr use @body-bg instead of white.\n*/\n\n@media (min-width: 768px) {\n    .omb_row-sm-offset-3 div:first-child[class*=\"col-\"] {\n        margin-left: 25%;\n    }\n}\n\n.omb_login .omb_authTitle {\n    text-align: center;\n\tline-height: 300%;\n}\n\t\n.omb_login .omb_socialButtons a {\n\tcolor: white; // In yourUse @body-bg \n\topacity:0.9;\n}\n.omb_login .omb_socialButtons a:hover {\n    color: white;\n\topacity:1;    \t\n}\n.omb_login .omb_socialButtons .omb_btn-facebook {background: #3b5998;}\n.omb_login .omb_socialButtons .omb_btn-twitter {background: #00aced;}\n.omb_login .omb_socialButtons .omb_btn-google {background: #c32f10;}\n\n\n.omb_login .omb_loginOr {\n\tposition: relative;\n\tfont-size: 1.2em;\n\tcolor: #aaa;\n\tmargin-top: 1em;\n\tmargin-bottom: 1em;\n\tpadding-top: 0.5em;\n\tpadding-bottom: 0.5em;\n}\n.omb_login .omb_loginOr .omb_hrOr {\n\tbackground-color: #cdcdcd;\n\theight: 1px;\n\tmargin-top: 0px !important;\n\tmargin-bottom: 0px !important;\n}\n.omb_login .omb_loginOr .omb_spanOr {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 50%;\n\ttop: -0.6em;\n\tmargin-left: -1.9em;\n\tbackground-color: white;\n\twidth: 3em;\n\ttext-align: center;\n}\t\t\t\n\n.omb_login .omb_loginForm .input-group.i {\n\twidth: 2em;\n}\n.omb_login .omb_loginForm  .help-block {\n    color: red;\n}\n\n\t\n@media (min-width: 768px) {\n    .omb_login .omb_forgotPwd {\n        text-align: right;\n\t\tmargin-top:10px;\n \t}\t\t\n}"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n  <div class=\"timer\">\n       <span></span>    \n  </div>\n  <div class=\"gameover\">GAME OVER</div>\n  <br><br><br>\n  <h1>KILL THE BIRDS <span>(shoot the birds)</span></h1>\n  <input class=\"input-circle input-circle1\" type=\"radio\" id=\"circle1\" >\n <input class=\"input-circle input-circle2\" type=\"radio\" id=\"circle2\" >\n <input class=\"input-circle input-circle3\" type=\"radio\" id=\"circle3\" >\n <input class=\"input-circle input-circle4\" type=\"radio\" id=\"circle4\" >\n <input class=\"input-circle input-circle5\" type=\"radio\" id=\"circle5\" >\n <input class=\"input-circle input-circle6\" type=\"radio\" id=\"circle6\" >\n  \n  <label for=\"circle1\" class=\"pajaro pajaro1\"><span></span></label>\n  <label for=\"circle2\" class=\"pajaro pajaro2\"><span></span></label>\n  <label for=\"circle3\" class=\"pajaro pajaro3\"><span></span></label>\n  <label for=\"circle4\" class=\"pajaro pajaro4\"><span></span></label>\n  <label for=\"circle5\" class=\"pajaro pajaro5\"><span></span></label>\n  <label for=\"circle6\" class=\"pajaro pajaro6\"><span></span></label>\n  <div class=\"sum\">SCORE:</div>\n </div>\n\n\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1>MEAN Authentication App</h1>\n    <p class=\"lead\">Welcome to our custom MEAN authentication app built from scratch</p>\n    <div>\n        <a class=\"btn btn-primary\" [routerLink]=\"['/register']\"> Register </a>\n        <a class=\"btn btn-default\" [routerLink]=\"['/login']\"> Login </a>\n   </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-4\">\n        <h3>Ecpress Backend</h3>\n        <p>A rock Solid Node.js/Express server using Mongoose to organize models and query the database</p>\n    </div>\n    <div class=\"col-md-4\">\n        <h3>Angular-cli</h3>\n        <p>Angular-cli to generate components, services and more. Local dev server and easy complication\n        </p>\n    </div>\n    <div class=\"col-md-4\">\n            <h3>JWT Tokens</h3>\n            <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\" rel=\"stylesheet\">\n\n<div class=\"container\">\n    \n\n    <div class=\"omb_login\">\n\t\t\n\n\t\t<div class=\"row omb_row-sm-offset-3 omb_loginOr\">\n\t\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t\t<hr class=\"omb_hrOr\">\n\t\t\t\t<span class=\"omb_spanOr\">Login</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row omb_row-sm-offset-3\">\n\t\t\t<div class=\"col-xs-12 col-sm-6\">\t\n\t\t\t    <form (submit)=\"onLoginSubmit()\" class=\"omb_loginForm\" action=\"\" autocomplete=\"off\" method=\"POST\">\n\t\t\t\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" name=\"username\" placeholder=\"username\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"help-block\"></span>\t\t\t\t\t\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\n\t\t\t\t\t\t<input  type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<span class=\"help-block\"></span>\n\t\t\t\t\t\t\n\t\t\t\t\t<button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Login</button>\n\t\t\t\t</form>\n\t\t\t</div>\n    \t</div>\n\t\t<div class=\"row omb_row-sm-offset-3\">\n\t\t\t<div class=\"col-xs-12 col-sm-3\">\n\t\t\t\t<label class=\"checkbox\">\n\t\t\t\t\t<input type=\"checkbox\" value=\"remember-me\">Remember Me\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 col-sm-3\">\n\t\t\t\t<p class=\"omb_forgotPwd\">\n\t\t\t\t\t<a href=\"#\">Forgot password?</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\t    \t\n\t</div>\n\n\n\n        </div>\n\n\n "

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">MEAN app</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active'] \"[routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active'] \"[routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li> \n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active'] \"[routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n\n\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active'] \"[routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active'] \"[routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">{{user.name}}</h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\">Username: {{user.username}}\n\t\t</li>\n\t\t<li class=\"list-group-item\">Email: {{user.email}}\n\t\t</li>\n\t\t\n\t</ul>\n\t\n</div>"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\" rel=\"stylesheet\">\n\n<div class=\"container\">\n    \n\n    <div class=\"omb_login\">\n\n\t\t<div class=\"row omb_row-sm-offset-3 omb_loginOr\">\n\t\t\t<div class=\"col-xs-12 col-sm-6\">\n\t\t\t\t<hr class=\"omb_hrOr\">\n\t\t\t\t<span class=\"omb_spanOr\">Register</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row omb_row-sm-offset-3\">\n\t\t\t<div class=\"col-xs-12 col-sm-6\">\t\n\t\t\t    <form (submit)=\"onRegisterSubmit()\" class=\"omb_loginForm\" action=\"\" autocomplete=\"off\" method=\"POST\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-users\"></i></span>\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"name\" class=\"form-control\" name=\"name\" placeholder=\"Name\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"help-block\"></span>\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n\t\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" name=\"username\" placeholder=\"username\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"help-block\"></span>\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n\t\t\t\t\t\t<input type=\"text\"  [(ngModel)]=\"email\" class=\"form-control\" name=\"email\" placeholder=\"email address\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"help-block\"></span>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\n\t\t\t\t\t\t<input  type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<span class=\"help-block\"></span>\n\t\t\t\t\t\t\n\t\t\t\t\t<button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Register</button>\n\t\t\t\t</form>\n\t\t\t</div>\n    \t</div>\n\t\t<div class=\"row omb_row-sm-offset-3\">\n\t\t\t<div class=\"col-xs-12 col-sm-3\">\n\t\t\t\t<label class=\"checkbox\">\n\t\t\t\t\t<input type=\"checkbox\" value=\"remember-me\">Remember Me\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 col-sm-3\">\n\t\t\t\t<p class=\"omb_forgotPwd\">\n\t\t\t\t\t<a href=\"#\">Forgot password?</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\t    \t\n\t</div>\n\n\n\n        </div>\n\n\n "

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/auth');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        // console.log(this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://kctf.tk/' + ep;
        }
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/mr_robot/Documents/mean/auth-app/angular-src/src/auth.service.js.map

/***/ })

},[711]);
//# sourceMappingURL=main.bundle.map