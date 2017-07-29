webpackJsonp([1,5],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getUser = function (id) {
        return this.http.get('/users/user/' + id)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getPosts = function () {
        return this.http.get('/posts')
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getLatest = function () {
        return this.http.get('/posts/latest')
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getSlides = function () {
        return this.http.get('/posts/slider')
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getPostsbyPage = function (page) {
        var p = parseInt(page);
        return this.http.get('/posts/page/' + p)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getPopularPosts = function () {
        return this.http.get('/posts/popular')
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getCat = function (name) {
        return this.http.get('/cats/' + name)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getSingle = function (id) {
        return this.http.get('/posts/' + id)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.countView = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(id);
        return this.http.put('/posts/' + id, body, headers).map(function (res) { return res.json(); });
    };
    PostService.prototype.CommentUpdate = function (id, comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify(comment);
        console.log(comment);
        return this.http.put('/comment/' + id, comment, headers).map(function (res) { return res.json(); });
    };
    PostService.prototype.sendMessage = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('/messages', body, headers).map(function (res) { return res.json(); });
    };
    return PostService;
}());
PostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 205;


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(234);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(19);
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
    function AppComponent(router, titleService) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.titleService.setTitle('Ktimez | Tech-News Rwanda');
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(317),
        styles: [__webpack_require__(290)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_loginregistermodal_loginregistermodal_component__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sidebar_sidebar_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_body_body_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_post_post_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_category_category_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_pages_pages_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_categorypage_categorypage_component__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_mobilemenu_mobilemenu_component__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_ourteam_ourteam_component__ = __webpack_require__(230);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_body_body_component__["a" /* BodyComponent */] },
    { path: 'page/:page', component: __WEBPACK_IMPORTED_MODULE_12__components_body_body_component__["a" /* BodyComponent */] },
    { path: 'post/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_post_post_component__["a" /* PostComponent */] },
    { path: 'category/:name', component: __WEBPACK_IMPORTED_MODULE_14__components_category_category_component__["a" /* CategoryComponent */] },
    { path: 'Category/:name/:page', component: __WEBPACK_IMPORTED_MODULE_16__components_categorypage_categorypage_component__["a" /* CategorypageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_18__components_ourteam_ourteam_component__["a" /* OurteamComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_loginregistermodal_loginregistermodal_component__["a" /* LoginregistermodalComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_body_body_component__["a" /* BodyComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_post_post_component__["a" /* PostComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_pages_pages_component__["a" /* PagesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_categorypage_categorypage_component__["a" /* CategorypageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_mobilemenu_mobilemenu_component__["a" /* MobilemenuComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_ourteam_ourteam_component__["a" /* OurteamComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BodyComponent = (function () {
    /*pages = {
       page:[1,2,3,5,6]
    };*/
    function BodyComponent(activatedRoute, postService, p) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.p = p;
        this.baseUrl = '/uploads/featured/';
        postService.getSlides().subscribe(function (slides) {
            _this.slides = slides;
            console.log(slides);
        });
        postService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
        p.getPage().subscribe(function (list) {
            var l = list / 10;
            var pl = Math.round(l);
            var p = [];
            if (pl < 20) {
                for (var i = 1; i <= pl; i++) {
                    p.push(i);
                    _this.pages = p;
                }
            }
        });
    }
    BodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.
            map(function (params) { return params['page']; }).subscribe(function (page) {
            _this.postService.getPostsbyPage(page).subscribe(function (posts) {
                _this.posts = posts;
            });
        });
    };
    BodyComponent.prototype.formatDateTime = function (date) {
        var d = __WEBPACK_IMPORTED_MODULE_4_moment__(date);
        var isToday = d.startOf('day').isSame(__WEBPACK_IMPORTED_MODULE_4_moment__().startOf('day'));
        if (!date) {
            return '';
        }
        if (isToday) {
            return __WEBPACK_IMPORTED_MODULE_4_moment__(date).fromNow();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4_moment__(date).format('MMM. D, YYYY [at] h:mm A z');
        }
    };
    return BodyComponent;
}());
BodyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-body',
        template: __webpack_require__(318),
        styles: [__webpack_require__(291)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_2__services_page_service__["a" /* PageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service__["a" /* PageService */]) === "function" && _c || Object])
], BodyComponent);

var _a, _b, _c;
//# sourceMappingURL=body.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryComponent = (function () {
    function CategoryComponent(activatedRoute, cat, p) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.cat = cat;
        this.p = p;
        this.posts = [];
        this.baseUrl = '/uploads/featured/';
        this.activatedRoute.params.
            map(function (params) { return params['name']; }).subscribe(function (name) {
            _this.cat.getCat(name).subscribe(function (posts) {
                _this.posts = posts;
            });
        });
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.
            map(function (params) { return params['name']; }).subscribe(function (name) {
            _this.p.getPageCat(name).subscribe(function (list) {
                var l = list / 10;
                var pl = Math.round(l);
                var p = [];
                if (pl < 20) {
                    for (var i = 1; i <= pl; i++) {
                        p.push(i);
                        _this.pages = p;
                    }
                }
            });
        });
    };
    CategoryComponent.prototype.formatDateTime = function (date) {
        var d = __WEBPACK_IMPORTED_MODULE_4_moment__(date);
        var isToday = d.startOf('day').isSame(__WEBPACK_IMPORTED_MODULE_4_moment__().startOf('day'));
        if (!date) {
            return '';
        }
        if (isToday) {
            return __WEBPACK_IMPORTED_MODULE_4_moment__(date).fromNow();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4_moment__(date).format('MMM. D, YYYY [at] h:mm A z');
        }
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-category',
        template: __webpack_require__(319),
        styles: [__webpack_require__(292)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_3__services_page_service__["a" /* PageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service__["a" /* PageService */]) === "function" && _c || Object])
], CategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_page_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorypageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategorypageComponent = (function () {
    function CategorypageComponent(activatedRoute, cat, p) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.cat = cat;
        this.p = p;
        this.posts = [];
        this.baseUrl = '/uploads/featured/';
        this.activatedRoute.params.
            map(function (params) { return params['name']; }).subscribe(function (name) {
            _this.cat.getCat(name).subscribe(function (posts) {
                _this.posts = posts;
            });
        });
    }
    CategorypageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.
            map(function (params) { return params['name']; }).subscribe(function (name) {
            _this.p.getPageCat(name).subscribe(function (list) {
                var l = list / 10;
                var pl = Math.round(l);
                var p = [];
                if (pl < 20) {
                    for (var i = 1; i <= pl; i++) {
                        p.push(i);
                        _this.pages = p;
                    }
                }
                console.log(_this.pages);
            });
        });
    };
    CategorypageComponent.prototype.formatDateTime = function (date) {
        var d = __WEBPACK_IMPORTED_MODULE_4_moment__(date);
        var isToday = d.startOf('day').isSame(__WEBPACK_IMPORTED_MODULE_4_moment__().startOf('day'));
        if (!date) {
            return '';
        }
        if (isToday) {
            return __WEBPACK_IMPORTED_MODULE_4_moment__(date).fromNow();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_4_moment__(date).format('MMM. D, YYYY [at] h:mm A z');
        }
    };
    return CategorypageComponent;
}());
CategorypageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-categorypage',
        template: __webpack_require__(320),
        styles: [__webpack_require__(293)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_3__services_page_service__["a" /* PageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_page_service__["a" /* PageService */]) === "function" && _c || Object])
], CategorypageComponent);

var _a, _b, _c;
//# sourceMappingURL=categorypage.component.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = (function () {
    function FooterComponent(router, postService) {
        var _this = this;
        this.router = router;
        this.baseUrl = '/uploads/featured/';
        postService.getLatest().subscribe(function (latest) {
            _this.latest = latest;
            console.log(latest);
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.backTop = function () {
        console.log('fuck');
        window.scrollTo(0, 0);
    };
    FooterComponent.prototype.formatDateTime = function (date) {
        var d = __WEBPACK_IMPORTED_MODULE_3_moment__(date);
        var isToday = d.startOf('day').isSame(__WEBPACK_IMPORTED_MODULE_3_moment__().startOf('day'));
        if (!date) {
            return '';
        }
        if (isToday) {
            return __WEBPACK_IMPORTED_MODULE_3_moment__(date).fromNow();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_moment__(date).format('MMM. D, YYYY [at] h:mm A z');
        }
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(321),
        styles: [__webpack_require__(294)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _b || Object])
], FooterComponent);

var _a, _b;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(322),
        styles: [__webpack_require__(295)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(323),
        styles: [__webpack_require__(296)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginregistermodalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginregistermodalComponent = (function () {
    function LoginregistermodalComponent(postService) {
        this.postService = postService;
        this.success = false;
    }
    LoginregistermodalComponent.prototype.ngOnInit = function () {
    };
    LoginregistermodalComponent.prototype.sendMessage = function () {
        var _this = this;
        var body = {
            fname: this.fname,
            email: this.email,
            phone: this.phone,
            message: this.msg
        };
        this.postService.sendMessage(body).subscribe(function (messages) {
            _this.messages = messages;
            _this.success = true;
            _this.fname = '';
            _this.email = '';
            _this.phone = '';
            _this.msg = '';
        });
    };
    return LoginregistermodalComponent;
}());
LoginregistermodalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-loginregistermodal',
        template: __webpack_require__(324),
        styles: [__webpack_require__(297)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object])
], LoginregistermodalComponent);

var _a;
//# sourceMappingURL=loginregistermodal.component.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobilemenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobilemenuComponent = (function () {
    function MobilemenuComponent() {
    }
    MobilemenuComponent.prototype.ngOnInit = function () {
    };
    return MobilemenuComponent;
}());
MobilemenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-mobilemenu',
        template: __webpack_require__(325),
        styles: [__webpack_require__(298)]
    }),
    __metadata("design:paramtypes", [])
], MobilemenuComponent);

//# sourceMappingURL=mobilemenu.component.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(326),
        styles: [__webpack_require__(299)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurteamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurteamComponent = (function () {
    function OurteamComponent() {
    }
    OurteamComponent.prototype.ngOnInit = function () {
    };
    return OurteamComponent;
}());
OurteamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-ourteam',
        template: __webpack_require__(327),
        styles: [__webpack_require__(300)]
    }),
    __metadata("design:paramtypes", [])
], OurteamComponent);

//# sourceMappingURL=ourteam.component.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagesComponent = (function () {
    function PagesComponent(activatedRoute, postService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.baseUrl = '/uploads/featured/';
        this.activatedRoute.params.
            map(function (params) { return params['page']; }).subscribe(function (page) {
            _this.postService.getPostsbyPage(page).subscribe(function (posts) {
                _this.posts = posts;
            });
        });
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    return PagesComponent;
}());
PagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-pages',
        template: __webpack_require__(328),
        styles: [__webpack_require__(301)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _b || Object])
], PagesComponent);

var _a, _b;
//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostComponent = (function () {
    function PostComponent(activatedRoute, singlepostService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.singlepostService = singlepostService;
        this.router = router;
        this.baseUrl = '/uploads/featured/';
        this.baseUrl2 = '/uploads/profiles/';
        this.post = {
            posted_by: '',
        };
        this.user = {};
        this.com = [];
        this.activatedRoute.params.
            map(function (params) { return params['id']; }).subscribe(function (id) {
            _this.singlepostService.getSingle(id).subscribe(function (post) {
                _this.post = post;
            });
        });
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationEnd */])) {
                return;
            }
            _this.activatedRoute.params.
                map(function (params) { return params['id']; }).subscribe(function (id) {
                _this.singlepostService.countView(id).subscribe(function (post) {
                    _this.post = post;
                    _this.singlepostService.getUser(_this.post.posted_by).subscribe(function (user) {
                        _this.user = user;
                    });
                });
            });
        });
    };
    PostComponent.prototype.CommentUpdate = function () {
        var _this = this;
        var comment = {
            user: this.name,
            content: this.content
        };
        this.activatedRoute.params.
            map(function (params) { return params['id']; }).subscribe(function (id) {
            _this.singlepostService.CommentUpdate(id, comment).subscribe(function (post) {
                _this.post = post;
                _this.name = '';
                _this.content = '';
                _this.ngOnInit();
            });
        });
    };
    PostComponent.prototype.formatDateTime = function (date) {
        var d = __WEBPACK_IMPORTED_MODULE_3_moment__(date);
        var isToday = d.startOf('day').isSame(__WEBPACK_IMPORTED_MODULE_3_moment__().startOf('day'));
        if (!date) {
            return '';
        }
        if (isToday) {
            return __WEBPACK_IMPORTED_MODULE_3_moment__(date).fromNow();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_moment__(date).format('MMM. D, YYYY [at] h:mm A z');
        }
    };
    return PostComponent;
}());
PostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-post',
        template: __webpack_require__(329),
        styles: [__webpack_require__(302)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], PostComponent);

var _a, _b, _c;
//# sourceMappingURL=post.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(activatedRoute, popular) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.popular = popular;
        this.baseUrl = '/uploads/featured/';
        this.posts = [];
        popular.getPopularPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.formatDateTime = function (date) {
        var d = __WEBPACK_IMPORTED_MODULE_3_moment__(date);
        var isToday = d.startOf('day').isSame(__WEBPACK_IMPORTED_MODULE_3_moment__().startOf('day'));
        if (!date) {
            return '';
        }
        if (isToday) {
            return __WEBPACK_IMPORTED_MODULE_3_moment__(date).fromNow();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_3_moment__(date).format('MMM. D, YYYY [at] h:mm A z');
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(330),
        styles: [__webpack_require__(303)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _b || Object])
], SidebarComponent);

var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#limitparagraph{\r\n  height: 80px;\r\n  white-space:inherit;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n#limitparagraphcarousel{\r\n  height: 50px;\r\n  white-space:inherit;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n#meter{\r\n  height:430px;\r\n  width: 900px;\r\n}\r\n#meter2{\r\n  height:180px;\r\n  width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#limitparagraph{\r\n  height: 80px;\r\n  white-space:inherit;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n#meter2{\r\n  height:180px;\r\n  width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#limitparagraph{\r\n  height: 80px;\r\n  white-space:inherit;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n#meter2{\r\n  height:180px;\r\n  width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#meter3{\r\n  height:80px;\r\n  width: 80px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#limitparagraph{\r\n  height: 80px;\r\n  white-space:inherit;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n#meter2{\r\n  height:180px;\r\n  width: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#meter{\r\n  height:430px;\r\n  width: 900px;\r\n}\r\nimg.block\r\n{\r\n  display:block;\r\n  height:430px;\r\n  width: 900px;\r\n}\r\n#avatar\r\n{\r\n  height:50px;\r\n  width:50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 76,
	"./af.js": 76,
	"./ar": 83,
	"./ar-dz": 77,
	"./ar-dz.js": 77,
	"./ar-kw": 78,
	"./ar-kw.js": 78,
	"./ar-ly": 79,
	"./ar-ly.js": 79,
	"./ar-ma": 80,
	"./ar-ma.js": 80,
	"./ar-sa": 81,
	"./ar-sa.js": 81,
	"./ar-tn": 82,
	"./ar-tn.js": 82,
	"./ar.js": 83,
	"./az": 84,
	"./az.js": 84,
	"./be": 85,
	"./be.js": 85,
	"./bg": 86,
	"./bg.js": 86,
	"./bn": 87,
	"./bn.js": 87,
	"./bo": 88,
	"./bo.js": 88,
	"./br": 89,
	"./br.js": 89,
	"./bs": 90,
	"./bs.js": 90,
	"./ca": 91,
	"./ca.js": 91,
	"./cs": 92,
	"./cs.js": 92,
	"./cv": 93,
	"./cv.js": 93,
	"./cy": 94,
	"./cy.js": 94,
	"./da": 95,
	"./da.js": 95,
	"./de": 98,
	"./de-at": 96,
	"./de-at.js": 96,
	"./de-ch": 97,
	"./de-ch.js": 97,
	"./de.js": 98,
	"./dv": 99,
	"./dv.js": 99,
	"./el": 100,
	"./el.js": 100,
	"./en-au": 101,
	"./en-au.js": 101,
	"./en-ca": 102,
	"./en-ca.js": 102,
	"./en-gb": 103,
	"./en-gb.js": 103,
	"./en-ie": 104,
	"./en-ie.js": 104,
	"./en-nz": 105,
	"./en-nz.js": 105,
	"./eo": 106,
	"./eo.js": 106,
	"./es": 108,
	"./es-do": 107,
	"./es-do.js": 107,
	"./es.js": 108,
	"./et": 109,
	"./et.js": 109,
	"./eu": 110,
	"./eu.js": 110,
	"./fa": 111,
	"./fa.js": 111,
	"./fi": 112,
	"./fi.js": 112,
	"./fo": 113,
	"./fo.js": 113,
	"./fr": 116,
	"./fr-ca": 114,
	"./fr-ca.js": 114,
	"./fr-ch": 115,
	"./fr-ch.js": 115,
	"./fr.js": 116,
	"./fy": 117,
	"./fy.js": 117,
	"./gd": 118,
	"./gd.js": 118,
	"./gl": 119,
	"./gl.js": 119,
	"./gom-latn": 120,
	"./gom-latn.js": 120,
	"./he": 121,
	"./he.js": 121,
	"./hi": 122,
	"./hi.js": 122,
	"./hr": 123,
	"./hr.js": 123,
	"./hu": 124,
	"./hu.js": 124,
	"./hy-am": 125,
	"./hy-am.js": 125,
	"./id": 126,
	"./id.js": 126,
	"./is": 127,
	"./is.js": 127,
	"./it": 128,
	"./it.js": 128,
	"./ja": 129,
	"./ja.js": 129,
	"./jv": 130,
	"./jv.js": 130,
	"./ka": 131,
	"./ka.js": 131,
	"./kk": 132,
	"./kk.js": 132,
	"./km": 133,
	"./km.js": 133,
	"./kn": 134,
	"./kn.js": 134,
	"./ko": 135,
	"./ko.js": 135,
	"./ky": 136,
	"./ky.js": 136,
	"./lb": 137,
	"./lb.js": 137,
	"./lo": 138,
	"./lo.js": 138,
	"./lt": 139,
	"./lt.js": 139,
	"./lv": 140,
	"./lv.js": 140,
	"./me": 141,
	"./me.js": 141,
	"./mi": 142,
	"./mi.js": 142,
	"./mk": 143,
	"./mk.js": 143,
	"./ml": 144,
	"./ml.js": 144,
	"./mr": 145,
	"./mr.js": 145,
	"./ms": 147,
	"./ms-my": 146,
	"./ms-my.js": 146,
	"./ms.js": 147,
	"./my": 148,
	"./my.js": 148,
	"./nb": 149,
	"./nb.js": 149,
	"./ne": 150,
	"./ne.js": 150,
	"./nl": 152,
	"./nl-be": 151,
	"./nl-be.js": 151,
	"./nl.js": 152,
	"./nn": 153,
	"./nn.js": 153,
	"./pa-in": 154,
	"./pa-in.js": 154,
	"./pl": 155,
	"./pl.js": 155,
	"./pt": 157,
	"./pt-br": 156,
	"./pt-br.js": 156,
	"./pt.js": 157,
	"./ro": 158,
	"./ro.js": 158,
	"./ru": 159,
	"./ru.js": 159,
	"./sd": 160,
	"./sd.js": 160,
	"./se": 161,
	"./se.js": 161,
	"./si": 162,
	"./si.js": 162,
	"./sk": 163,
	"./sk.js": 163,
	"./sl": 164,
	"./sl.js": 164,
	"./sq": 165,
	"./sq.js": 165,
	"./sr": 167,
	"./sr-cyrl": 166,
	"./sr-cyrl.js": 166,
	"./sr.js": 167,
	"./ss": 168,
	"./ss.js": 168,
	"./sv": 169,
	"./sv.js": 169,
	"./sw": 170,
	"./sw.js": 170,
	"./ta": 171,
	"./ta.js": 171,
	"./te": 172,
	"./te.js": 172,
	"./tet": 173,
	"./tet.js": 173,
	"./th": 174,
	"./th.js": 174,
	"./tl-ph": 175,
	"./tl-ph.js": 175,
	"./tlh": 176,
	"./tlh.js": 176,
	"./tr": 177,
	"./tr.js": 177,
	"./tzl": 178,
	"./tzl.js": 178,
	"./tzm": 180,
	"./tzm-latn": 179,
	"./tzm-latn.js": 179,
	"./tzm.js": 180,
	"./uk": 181,
	"./uk.js": 181,
	"./ur": 182,
	"./ur.js": 182,
	"./uz": 184,
	"./uz-latn": 183,
	"./uz-latn.js": 183,
	"./uz.js": 184,
	"./vi": 185,
	"./vi.js": 185,
	"./x-pseudo": 186,
	"./x-pseudo.js": 186,
	"./yo": 187,
	"./yo.js": 187,
	"./zh-cn": 188,
	"./zh-cn.js": 188,
	"./zh-hk": 189,
	"./zh-hk.js": 189,
	"./zh-tw": 190,
	"./zh-tw.js": 190
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 310;


/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 mb-4\">\n<div id=\"carousel-home-blog\" class=\"carousel ms-carousel slide card\" data-ride=\"carousel\" >\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" >\n    <li data-target=\"#carousel-home-blog\" data-slide-to=\"0\"></li>\n    <li data-target=\"#carousel-home-blog\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carousel-home-blog\" data-slide-to=\"2\"></li>\n    <li data-target=\"#carousel-home-blog\" data-slide-to=\"3\"></li>\n    <li data-target=\"#carousel-home-blog\" data-slide-to=\"4\"></li>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div id=\"CAROUSEL_CONTENTHERE\" class=\"carousel-inner\" role=\"listbox\" >\n\n    <div class=\"item\" *ngFor=\"let slide of slides\">\n      <img src=\"{{baseUrl}}{{slide.featured}}\" class=\"img-responsive\" alt=\"...\" id=\"meter\">\n      <div class=\"carousel-caption-blog\">\n        <h2 class=\"color-primary\"><a [routerLink]=\"['/post',slide.slug]\">{{slide.title}}</a></h2>\n       \n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"col-md-12\">\n<div class=\"row\">\n\n  <article class=\"card wow fadeInLeft animation-delay-5 mb-4\" *ngFor=\"let post of posts\">\n             <div class=\"card-block\" >\n               <div class=\"row\">\n                 <div class=\"col-lg-6\" >\n                   <img src=\"{{baseUrl}}{{post.featured}}\" alt=\"\" class=\"img-responsive mb-4\" id=\"meter2\"> </div>\n                 <div class=\"col-lg-6\">\n                   <h3 class=\"no-mt\">\n                     <a [routerLink]=\"['/post',post.slug]\">{{post.title}}</a>\n                   </h3>\n                   <p class=\"mb-4\" id=\"limitparagraph\" [innerHtml]=\"post.body\"></p>\n                 </div>\n               </div>\n               <div class=\"row\">\n                 <div class=\"col-lg-8\">\n                    by\n                   <a href=\"javascript:void(0)\">{{post.posted_by}}</a> in\n                   <a   *ngFor=\"let cat of post.category\">\n                     <span *ngIf=\"cat == 'Android' \"><a class=\"ms-tag ms-tag-success\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'IOS' \"><a class=\"ms-tag ms-tag-royal\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Windows Phone' \"><a class=\"ms-tag ms-tag-info\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Tech News' \"><a class=\"ms-tag ms-tag-danger\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Linux' \"><a class=\"ms-tag ms-tag-default\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Windows' \"><a class=\"ms-tag ms-tag-warning\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Mac OS' \"><a class=\"ms-tag ms-tag-primary\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Hacking' \"><a class=\"ms-tag ms-tag-danger\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'How To' \"><a class=\"ms-tag ms-tag-success\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Web Dev' \"><a class=\"ms-tag ms-tag-warning\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Troubleshooting' \"><a class=\"ms-tag ms-tag-royal\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Dev Ops' \"><a class=\"ms-tag ms-tag-primary\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      </a>\n                   <span class=\"ml-1 hidden-xs\">\n                     <i class=\"zmdi zmdi-time mr-05 color-info\"></i>\n                     <span class=\"color-medium-dark\">{{formatDateTime(post.created_at)}} </span>\n                   </span>\n                 </div>\n                 <div class=\"col-lg-4 text-right\">\n                   <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-raised btn-block animate-icon\" [routerLink]=\"['/post',post.slug]\">Read More\n                     <i class=\"ml-1 no-mr zmdi zmdi-long-arrow-right\"></i>\n                   </a>\n                 </div>\n               </div>\n             </div>\n           </article>\n\n     \n\n            <nav aria-label=\"Page navigation\">\n                <ul class=\"pagination pagination-plain\">\n                  <li>\n                    <a href=\"javascript:void(0)\" aria-label=\"Previous\">\n                      <span aria-hidden=\"true\">&laquo;</span>\n                    </a>\n                  </li>\n                  <li class=\"\">\n                    <a [routerLink]=\"['/page',p]\" *ngFor=\"let p of pages\">{{p}}</a>\n                  </li>\n\n                  <li>\n                    <a href=\"javascript:void(0)\" aria-label=\"Next\">\n                      <span aria-hidden=\"true\">&raquo;</span>\n                    </a>\n                  </li>\n                </ul>\n              </nav>\n              \n\n</div>\n\n</div>\n\n</div>\n<app-sidebar></app-sidebar>\n"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 mb-4\">\n<div class=\"col-md-12\" *ngIf=\"posts\">\n  <article class=\"card wow fadeInLeft animation-delay-5 mb-4\" *ngFor=\"let post of posts\" >\n             <div class=\"card-block\" >\n               <div class=\"row\">\n                 <div class=\"col-lg-6\" >\n                   <img src=\"{{baseUrl}}{{post.featured}}\" alt=\"\" class=\"img-responsive mb-4\" id=\"meter2\"> </div>\n                 <div class=\"col-lg-6\">\n                   <h3 class=\"no-mt\">\n                     <a [routerLink]=\"['/post',post.slug]\">{{post.title}}</a>\n                   </h3>\n                   <p class=\"mb-4\" id=\"limitparagraph\" [innerHtml]=\"post.body\"></p>\n                 </div>\n               </div>\n               <div class=\"row\">\n                 <div class=\"col-lg-8\">\n                   by\n                   <a href=\"javascript:void(0)\">{{post.posted_by}}</a> in\n                   <a   *ngFor=\"let cat of post.category\">\n                     <span *ngIf=\"cat == 'Android' \"><a class=\"ms-tag ms-tag-success\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'IOS' \"><a class=\"ms-tag ms-tag-royal\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Windows Phone' \"><a class=\"ms-tag ms-tag-info\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Tech News' \"><a class=\"ms-tag ms-tag-danger\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Linux' \"><a class=\"ms-tag ms-tag-default\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Windows' \"><a class=\"ms-tag ms-tag-warning\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Mac OS' \"><a class=\"ms-tag ms-tag-primary\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Hacking' \"><a class=\"ms-tag ms-tag-danger\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'How To' \"><a class=\"ms-tag ms-tag-success\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Web Dev' \"><a class=\"ms-tag ms-tag-warning\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Troubleshooting' \"><a class=\"ms-tag ms-tag-royal\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Dev Ops' \"><a class=\"ms-tag ms-tag-primary\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      </a>\n                   <span class=\"ml-1 hidden-xs\">\n                     <i class=\"zmdi zmdi-time mr-05 color-info\"></i>\n                     <span class=\"color-medium-dark\">{{formatDateTime(post.created_at)}} </span>\n                   </span>\n                 </div>\n                 <div class=\"col-lg-4 text-right\">\n                   <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-raised btn-block animate-icon\" [routerLink]=\"['/post',post.slug]\">Read More\n                     <i class=\"ml-1 no-mr zmdi zmdi-long-arrow-right\"></i>\n                   </a>\n                 </div>\n               </div>\n             </div>\n           </article>\n        \n\n</div>\n\n<div class=\"col-md-12\" *ngIf=\"posts==''\">\n\n  \n  <div class=\"card animated fadeInUp animation-delay-7 color-primary withripple\">\n              <div class=\"card-block-big color-dark\">\n                <div class=\"text-center\">\n                  <h1 class=\"color-primary\">Not Found</h1>\n                  <h2>No Posts in This Category Yet</h2>\n                  <p class=\"lead lead-sm\">We have not found what you are looking for.\n                    <br>This category has no post yet, be patient While We still updating our website.</p>\n                  <a [routerLink]=\"['/']\" class=\"btn btn-primary btn-raised\">\n                    <i class=\"zmdi zmdi-home\"></i> Go Home</a>\n                </div>\n              </div>\n            </div>\n\n   <nav aria-label=\"Page navigation\">\n               <ul class=\"pagination pagination-plain\">\n                 <li>\n                   <a href=\"javascript:void(0)\" aria-label=\"Previous\">\n                     <span aria-hidden=\"true\">&laquo;</span>\n                   </a>\n                 </li>\n                 <li class=\"\">\n                   <a [routerLink]=\"['/category',p]\" *ngFor=\"let p of pages\">{{p}}</a>\n                 </li>\n\n                 <li>\n                   <a href=\"javascript:void(0)\" aria-label=\"Next\">\n                     <span aria-hidden=\"true\">&raquo;</span>\n                   </a>\n                 </li>\n               </ul>\n             </nav>\n</div>\n</div>\n<app-sidebar></app-sidebar>"

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 mb-4\">\n<div class=\"col-md-12\">\n  <article class=\"card wow fadeInLeft animation-delay-5 mb-4\" *ngFor=\"let post of posts\">\n             <div class=\"card-block\" >\n               <div class=\"row\">\n                 <div class=\"col-lg-6\" >\n                   <img src=\"{{baseUrl}}{{post.featured}}\" alt=\"\" class=\"img-responsive mb-4\" id=\"meter2\"> </div>\n                 <div class=\"col-lg-6\">\n                   <h3 class=\"no-mt\">\n                     <a [routerLink]=\"['/post',post.slug]\">{{post.title}}</a>\n                   </h3>\n                   <p class=\"mb-4\" id=\"limitparagraph\" [innerHtml]=\"post.body\"></p>\n                 </div>\n               </div>\n               <div class=\"row\">\n                 <div class=\"col-lg-8\">\n                   by\n                  <a href=\"javascript:void(0)\">{{post.posted_by}}</a> in\n                   <a   *ngFor=\"let cat of post.category\">\n                     <span *ngIf=\"cat == 'Android' \"><a class=\"ms-tag ms-tag-success\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'IOS' \"><a class=\"ms-tag ms-tag-royal\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Windows Phone' \"><a class=\"ms-tag ms-tag-info\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Tech News' \"><a class=\"ms-tag ms-tag-danger\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Linux' \"><a class=\"ms-tag ms-tag-default\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Windows' \"><a class=\"ms-tag ms-tag-warning\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Mac OS' \"><a class=\"ms-tag ms-tag-primary\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Hacking' \"><a class=\"ms-tag ms-tag-danger\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'How To' \"><a class=\"ms-tag ms-tag-success\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Web Dev' \"><a class=\"ms-tag ms-tag-warning\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Troubleshooting' \"><a class=\"ms-tag ms-tag-royal\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Dev Ops' \"><a class=\"ms-tag ms-tag-primary\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      </a>\n                   <span class=\"ml-1 hidden-xs\">\n                     <i class=\"zmdi zmdi-time mr-05 color-info\"></i>\n                     <span class=\"color-medium-dark\">{{formatDateTime(post.created_at)}} </span>\n                   </span>\n                 </div>\n                 <div class=\"col-lg-4 text-right\">\n                   <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-raised btn-block animate-icon\" [routerLink]=\"['/post',post.slug]\">Read More\n                     <i class=\"ml-1 no-mr zmdi zmdi-long-arrow-right\"></i>\n                   </a>\n                 </div>\n               </div>\n             </div>\n           </article>\n           <nav aria-label=\"Page navigation\">\n               <ul class=\"pagination pagination-plain\">\n                 <li>\n                   <a href=\"javascript:void(0)\" aria-label=\"Previous\">\n                     <span aria-hidden=\"true\">&laquo;</span>\n                   </a>\n                 </li>\n                 <li class=\"\" *ngFor=\"let cat of post.category\">\n                   <a [routerLink]=\"['/Category/',p]\" *ngFor=\"let p of pages\">{{p}}</a>\n                 </li>\n\n                 <li>\n                   <a href=\"javascript:void(0)\" aria-label=\"Next\">\n                     <span aria-hidden=\"true\">&raquo;</span>\n                   </a>\n                 </li>\n               </ul>\n             </nav>\n\n</div>\n</div>\n<app-sidebar></app-sidebar>"

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "<aside class=\"ms-footbar\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 ms-footer-col\">\r\n        <div class=\"ms-footbar-block\">\r\n          <h3 class=\"ms-footbar-title\">Sitemap</h3>\r\n          <ul class=\"list-unstyled ms-icon-list three_cols\">\r\n            <li>\r\n              <a [routerLink]=\"['/']\"><i class=\"zmdi zmdi-home\"></i> Home</a>\r\n              \r\n                \r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/category','Tech News']\">\r\n                <i class=\"zmdi zmdi-edit\"></i> Tech News</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/category','Dev Ops']\">\r\n                <i class=\"zmdi zmdi-image-o\"></i> Dev Ops</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/category','Android']\">\r\n                <i class=\"zmdi zmdi-case\"></i> Android</a>\r\n            </li>\r\n\r\n           \r\n            <li>\r\n              <a [routerLink]=\"['/category','IOS']\">\r\n                <i class=\"zmdi zmdi-case\"></i> IOS</a>\r\n            </li>\r\n             \r\n            \r\n            <li>\r\n              <a [routerLink]=\"['/category','Linux']\">\r\n                <i class=\"zmdi zmdi-time\"></i> Linux</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/category','Windows']\">\r\n                <i class=\"zmdi zmdi-time\"></i> Windows</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/category','Mac OS']\">\r\n                <i class=\"zmdi zmdi-time\"></i> Mac OS</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/category','How To']\">\r\n                <i class=\"zmdi zmdi-money\"></i> Tutorials</a>\r\n            </li>\r\n            <li>\r\n              <a [routerLink]=\"['/category','Hacking']\">\r\n                <i class=\"zmdi zmdi-favorite-outline\"></i> Hacking</a>\r\n            </li>\r\n          \r\n          <li>\r\n              <a [routerLink]=\"['/category','How To']\">\r\n                <i class=\"zmdi zmdi-favorite-outline\"></i> How To</a>\r\n            </li>\r\n            \r\n            <li>\r\n              <a [routerLink]=\"['/category','Web Dev']\">\r\n                <i class=\"zmdi zmdi-favorite-outline\"></i> Web Dev</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"ms-footbar-block\">\r\n          <h3 class=\"ms-footbar-title\">Subscribe</h3>\r\n          <p class=\"\">Shyiramo Email yawe Hano tujye tukohereza amakuru yose kuri email yawe! </p>\r\n          <form>\r\n            <div class=\"form-group label-floating mt-2 mb-1\">\r\n              <div class=\"input-group ms-input-subscribe\">\r\n                <label class=\"control-label\" for=\"ms-subscribe\">\r\n                  <i class=\"zmdi zmdi-email\"></i> Email Adress</label>\r\n                <input type=\"email\" id=\"ms-subscribe\" class=\"form-control\"> </div>\r\n            </div>\r\n            <button class=\"ms-subscribre-btn\" type=\"button\">Subscribe</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-5 col-sm-7 ms-footer-col ms-footer-alt-color\">\r\n        <div class=\"ms-footbar-block\">\r\n          <h3 class=\"ms-footbar-title text-center mb-2\">Last Articles</h3>\r\n          <div class=\"ms-footer-media\">\r\n\r\n            <div class=\"media\" *ngFor=\"let lat of latest\">\r\n              <div class=\"media-left media-middle\">\r\n                <a href=\"javascript:void(0)\">\r\n                  <img class=\"media-object media-object-circle\" src=\"{{baseUrl}}{{lat.featured}}\" alt=\"...\" id=\"meter3\"> </a>\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">\r\n                  <a href=\"javascript:void(0)\">{{lat.title}}</a>\r\n                </h4>\r\n                <div class=\"media-footer\">\r\n                  <span>\r\n                    <i class=\"zmdi zmdi-time color-info-light\"></i>{{formatDateTime(lat.created_at)}}</span>\r\n                  <span>\r\n                    <i class=\"zmdi zmdi-folder-outline color-warning-light\"></i>\r\n                    <a href=\"javascript:void(0)\" *ngFor=\"let c of lat.category\">{{c}}</a>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n           \r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-5 ms-footer-col ms-footer-text-right\">\r\n        <div class=\"ms-footbar-block\">\r\n          <div class=\"ms-footbar-title\">\r\n            <span class=\"ms-logo ms-logo-white ms-logo-sm mr-1\">K</span>\r\n            <h3 class=\"no-m ms-site-title\">ktimez\r\n              <span>.com</span>\r\n            </h3>\r\n          </div>\r\n          <address class=\"no-mb\">\r\n            <p>\r\n              <i class=\"color-danger-light zmdi zmdi-pin mr-1\"></i> Kigali, Rwanda</p>\r\n            <p>\r\n              <i class=\"color-warning-light zmdi zmdi-map mr-1\"></i> CA 94107 Downtown</p>\r\n            <p>\r\n              <i class=\"color-info-light zmdi zmdi-email mr-1\"></i>\r\n              <a href=\"#\">info@ktimez.com</a>\r\n            </p>\r\n            <p>\r\n              <i class=\"color-royal-light zmdi zmdi-phone mr-1\"></i>+250784226895 </p>\r\n            <p>\r\n              <i class=\"color-success-light fa fa-fax mr-1\"></i>+250782535706 </p>\r\n          </address>\r\n        </div>\r\n        <div class=\"ms-footbar-block\">\r\n          <h3 class=\"ms-footbar-title\">Social Media</h3>\r\n          <div class=\"ms-footbar-social\">\r\n            <a href=\"https://www.facebook.com/ktimezcom/\" class=\"btn-circle btn-facebook\">\r\n              <i class=\"zmdi zmdi-facebook\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\" class=\"btn-circle btn-twitter\">\r\n              <i class=\"zmdi zmdi-twitter\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\" class=\"btn-circle btn-youtube\">\r\n              <i class=\"zmdi zmdi-youtube\"></i>\r\n            </a>\r\n            <br>\r\n            <a href=\"javascript:void(0)\" class=\"btn-circle btn-google\">\r\n              <i class=\"zmdi zmdi-google\"></i>\r\n            </a>\r\n            <a href=\"javascript:void(0)\" class=\"btn-circle btn-instagram\">\r\n              <i class=\"zmdi zmdi-instagram\"></i>\r\n            </a>\r\n            <a href=\"https://github.com/ktimez\" class=\"btn-circle btn-github\">\r\n              <i class=\"zmdi zmdi-github\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</aside>\r\n\r\n<footer class=\"ms-footer\">\r\n  <div class=\"container\">\r\n    <p>Copyright &copy; Ktimez.com 2017</p>\r\n  </div>\r\n</footer>\r\n<div class=\"btn-back-top\" >\r\n  <a  data-scroll id=\"backtop\" class=\"btn-circle btn-circle-primary btn-circle-sm btn-circle-raised \" (click)=\"backTop()\">\r\n    <i class=\"zmdi zmdi-long-arrow-up\"></i>\r\n  </a>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = "<header class=\"ms-header ms-header-primary\">\n  <div class=\"container container-full\">\n    <div class=\"ms-title\">\n      <a href=\"index-2.html\">\n        <!-- <img src=\"assets/img/demo/logo-header.png\" alt=\"\"> -->\n        <span class=\"ms-logo animated zoomInDown animation-delay-5\">K</span>\n        <h1 class=\"animated fadeInRight animation-delay-6\">Ktimez\n          <span>.com</span>\n        </h1>\n      </a>\n    </div>\n    <div class=\"header-right\">\n      <div class=\"share-menu\">\n        <ul class=\"share-menu-list\">\n          \n          <li class=\"animated fadeInRight animation-delay-2\">\n            <a href=\"http://faceboook.com\" class=\"btn-circle btn-facebook\">\n              <i class=\"zmdi zmdi-facebook\"></i>\n            </a>\n          </li>\n          <li class=\"animated fadeInRight animation-delay-1\">\n            <a href=\"http://twitter.com\" class=\"btn-circle btn-twitter\">\n              <i class=\"zmdi zmdi-twitter\"></i>\n            </a>\n          </li>\n        </ul>\n        <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-primary animated zoomInDown animation-delay-7\">\n          <i class=\"zmdi zmdi-share\"></i>\n        </a>\n      </div>\n     \n      <form class=\"search-form animated zoomInDown animation-delay-9\">\n        <input id=\"search-box\" type=\"text\" class=\"search-input\" placeholder=\"Search...\" name=\"q\" />\n        <label for=\"search-box\">\n          <i class=\"zmdi zmdi-search\"></i>\n        </label>\n      </form>\n      <a href=\"javascript:void(0)\" class=\"btn-ms-menu btn-circle btn-circle-primary sb-toggle-left animated zoomInDown animation-delay-10\" >\n        <i class=\"zmdi zmdi-menu\"></i>\n      </a>\n    </div>\n  </div>\n</header>\n<nav class=\"navbar navbar-static-top yamm ms-navbar ms-navbar-primary\">\n  <div class=\"container container-full\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <!-- <img src=\"assets/img/demo/logo-navbar.png\" alt=\"\"> -->\n        <span class=\"ms-logo ms-logo-sm\">K</span>\n        <span class=\"ms-title\">Ktimez\n          <strong>.com</strong>\n        </span>\n      </a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n\n        <li class=\"dropdown active\">\n          <a [routerLink]=\"['/']\" class=\"dropdown-toggle animated fadeIn animation-delay-4\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-name=\"home\">Home\n            <i class=\"zmdi zmdi-chevron-down\"></i>\n          </a>\n          </li>\n\n        <li class=\"dropdown\">\n          <a  class=\"dropdown-toggle animated fadeIn animation-delay-5\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-name=\"page\" [routerLink]=\"['/category','Tech News']\">Tech News\n            <i class=\"zmdi zmdi-chevron-down\"></i>\n          </a>\n            </li>\n\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle animated fadeIn animation-delay-6\" data-toggle=\"dropdown\" data-hover=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" data-name=\"component\">Smartphones\n            <i class=\"zmdi zmdi-chevron-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a [routerLink]=\"['/category','Android']\">\n                <i class=\"zmdi zmdi-android\" ></i> Android</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/category','IOS']\">\n                <i class=\"zmdi zmdi-apple\" ></i> IOS</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/category','Windows Phone']\">\n                <i class=\"zmdi zmdi-windows\" ></i> Windows Phone</a>\n            </li>\n\n\n          </ul>\n        </li>\n\n        <li class=\"dropdown\">\n          <a href=\"/\" class=\"dropdown-toggle animated fadeIn animation-delay-7\" data-toggle=\"dropdown\" data-hover=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" data-name=\"blog\">Computers\n            <i class=\"zmdi zmdi-chevron-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a [routerLink]=\"['/category','Windows']\">\n                <i class=\"zmdi zmdi-windows\"></i> Windows</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/category','Linux']\">\n                <i class=\"zmdi zmdi-playstation\"></i> Linux</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/category','Mac Os']\">\n                <i class=\"zmdi zmdi-apple\"></i> Mac OS</a>\n            </li>\n\n          </ul>\n        </li>\n      \n\n        <li class=\"dropdown\">\n          <a href=\"/\" class=\"dropdown-toggle animated fadeIn animation-delay-9\" data-toggle=\"dropdown\" data-hover=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" data-name=\"ecommerce\">Tutorials\n            <i class=\"zmdi zmdi-chevron-down\"></i>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a [routerLink]=\"['/category','Hacking']\"><i class=\"zmdi zmdi-dns\"></i>Hacking</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/category','Web Dev']\"><i class=\"zmdi zmdi-code-setting\"></i>Web Dev</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/category','Dev Ops']\"><i class=\"zmdi zmdi-code\"></i>Dev Ops</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/category','Troubleshooting']\"><i class=\"zmdi zmdi-code-smartphone\"></i>Troubleshooting</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/category','How To']\"><i class=\"zmdi zmdi-youtube-play\"></i>How To</a>\n            </li>\n          </ul>\n        </li>\n         <li class=\"dropdown\">\n          <a [routerLink]=\"['/about']\" class=\"dropdown-toggle animated fadeIn animation-delay-8\" data-toggle=\"dropdown\" data-hover=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" data-name=\"portfolio\">About us\n            <i class=\"zmdi zmdi-chevron-down\"></i>\n          </a>\n          </li>\n        <!-- <li class=\"btn-navbar-menu\"><a href=\"javascript:void(0)\" class=\"sb-toggle-left\"><i class=\"zmdi zmdi-menu\"></i></a></li> -->\n      </ul>\n    </div>\n    <!-- navbar-collapse collapse -->\n    <a href=\"javascript:void(0)\" class=\"sb-toggle-left btn-navbar-menu\">\n      <i class=\"zmdi zmdi-menu\"></i>\n    </a>\n  </div>\n  <!-- container -->\n</nav>\n<!-- sb-site-container -->\n"

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"sb-site-container\">\n      <!-- Modal Register Login Modal-->\n      <app-loginregistermodal></app-loginregistermodal>\n      <app-mobilemenu></app-mobilemenu>\n      <!-- End Of Modal -->\n\n      <!-- start of Header -->\n      <app-header></app-header>\n\n      <div class=\"container\">\n        <div class=\"row\">\n          \n            <router-outlet></router-outlet>\n         \n            \n        </div>\n\n        <!-- row -->\n\n      </div>\n      <!-- container -->\n      <app-footer></app-footer>\n      \n      </div>"

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal modal-primary\" id=\"ms-account-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog animated zoomIn animated-3x\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header shadow-2dp no-pb\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">\n            <i class=\"zmdi zmdi-close\"></i>\n          </span>\n        </button>\n        <div class=\"modal-title text-center\">\n          <span class=\"ms-logo ms-logo-white ms-logo-sm mr-1\">K</span>\n          <h3 class=\"no-m ms-site-title\">Ktimez\n            <span>.com</span>\n          </h3>\n        </div>\n        <div class=\"modal-header-tabs\">\n          <ul class=\"nav nav-tabs nav-tabs-full nav-tabs-3 nav-tabs-primary\" role=\"tablist\">\n           \n           \n            \n          </ul>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"tab-content\">\n         <div class=\"alert alert-success alert-dismissible\" role=\"alert\" *ngIf=\"success==true\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                      <i class=\"zmdi zmdi-close\"></i>\n                    </button>\n                    <strong>\n                      <i class=\"zmdi zmdi-check\"></i> Success!</strong> Message Sent! . \n                      </div>\n          <div role=\"tabpanel\" class=\"tab-pane fade active in\" id=\"ms-register-tab\">\n            <form (submit)=\"sendMessage()\">\n              <fieldset>\n                <div class=\"form-group label-floating\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                      <i class=\"zmdi zmdi-account\"></i>\n                    </span>\n                    <label class=\"control-label\" for=\"ms-form-user\">Fullnames</label>\n                    <input type=\"text\" id=\"ms-form-user\" class=\"form-control\"  [(ngModel)]=\"fname\" name=\"fname\"> </div>\n                </div>\n                <div class=\"form-group label-floating\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                      <i class=\"zmdi zmdi-email\"></i>\n                    </span>\n                    <label class=\"control-label\" for=\"ms-form-email\">Email</label>\n                    <input type=\"email\" id=\"ms-form-email\" class=\"form-control\"  [(ngModel)]=\"email\" name=\"email\"> </div>\n                </div>\n                <div class=\"form-group label-floating\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                      <i class=\"zmdi zmdi-phone\"></i>\n                    </span>\n                    <label class=\"control-label\" for=\"ms-form-pass\">Phone Number</label>\n                    <input type=\"text\" id=\"ms-form-pass\" class=\"form-control\"  [(ngModel)]=\"phone\" name=\"phone\">  </div>\n                </div>\n                <div class=\"form-group label-floating\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\">\n                      <i class=\"zmdi zmdi-email\"></i>\n                    </span>\n                    <label class=\"control-label\" for=\"ms-form-pass\">Message</label>\n                    <input type=\"text\" id=\"ms-form-pass\" class=\"form-control\"  [(ngModel)]=\"msg\" name=\"msg\"> </div>\n                </div>\n                <button class=\"btn btn-raised btn-block btn-primary\" type=\"submit\">Submit</button>\n              </fieldset>\n            </form>\n          </div>\n         \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-slidebar sb-slidebar sb-left sb-style-overlay\" id=\"mySidenav\">\n      <div class=\"sb-slidebar-container\">\n        <header class=\"ms-slidebar-header\">\n          <div class=\"ms-slidebar-login\">\n            <a href=\"https://agmstudio.io/themes/material-style/1.3/index.html\" class=\"withripple\">\n              <i class=\"zmdi zmdi-account\"></i> Login</a>\n            <a href=\"javascript:void(0)\" class=\"withripple\">\n              <i class=\"zmdi zmdi-account-add\"></i> Register</a>\n          </div>\n          <div class=\"ms-slidebar-title\">\n            <form class=\"search-form\">\n              <input id=\"search-box-slidebar\" type=\"text\" class=\"search-input\" placeholder=\"Search...\" name=\"q\" />\n              <label for=\"search-box-slidebar\">\n                <i class=\"zmdi zmdi-search\"></i>\n              </label>\n            </form>\n            <div class=\"ms-slidebar-t\">\n              <span class=\"ms-logo ms-logo-sm\">M</span>\n              <h3>Material\n                <span>Style</span>\n              </h3>\n            </div>\n          </div>\n        </header>\n\n        <ul class=\"ms-slidebar-menu\" id=\"slidebar-menu\" role=\"tablist\" aria-multiselectable=\"true\">\n          <li class=\"panel\" role=\"tab\" id=\"sch1\">\n            <a href=\"#\" class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#slidebar-menu\"  aria-expanded=\"false\" aria-controls=\"sc1\">\n              <i class=\"zmdi zmdi-home\"></i> Home </a>\n            <ul id=\"sc1\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"sch1\">\n              <li>\n                <a href=\"#\">Default Home</a>\n              </li>\n              <li>\n                <a href=\"#\">Home Black Slider</a>\n              </li>\n              <li>\n                <a href=\"#\">Home Landing Intro</a>\n              </li>\n              <li>\n                <a href=\"#\">Home Landing Video</a>\n              </li>\n              <li>\n                <a href=\"#\">Home Shop 1</a>\n              </li>\n            </ul>\n          </li>\n          <li class=\"panel\" role=\"tab\" id=\"sch2\">\n            <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#slidebar-menu\" href=\"#sc2\" aria-expanded=\"false\" aria-controls=\"sc2\">\n              <i class=\"zmdi zmdi-desktop-mac\"></i> Pages </a>\n            <ul id=\"sc2\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"sch2\">\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/page-about.html\">About US</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/page-team.html\">Our Team</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/page-product.html\">Products</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/page-services.html\">Services</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/page-faq.html\">FAQ</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/page-timeline_left.html\">Timeline</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/page-contact.html\">Contact Option</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/page-login.html\">Login</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/page-pricing.html\">Pricing</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/page-coming.html\">Coming Soon</a>\n              </li>\n            </ul>\n          </li>\n          <li class=\"panel\" role=\"tab\" id=\"sch4\">\n            <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#slidebar-menu\" href=\"#sc4\" aria-expanded=\"false\" aria-controls=\"sc4\">\n              <i class=\"zmdi zmdi-edit\"></i> Blog </a>\n            <ul id=\"sc4\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"sch4\">\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/blog-sidebar.html\">Blog Sidebar 1</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/blog-sidebar2.html\">Blog Sidebar 2</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/blog-masonry.html\">Blog Masonry 1</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/blog-masonry2.html\">Blog Masonry 2</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/blog-full.html\">Blog Full Page 1</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/blog-full2.html\">Blog Full Page 2</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/blog-post.html\">Blog Post 1</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/blog-post2.html\">Blog Post 2</a>\n              </li>\n            </ul>\n          </li>\n          <li class=\"panel\" role=\"tab\" id=\"sch5\">\n            <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#slidebar-menu\" href=\"#sc5\" aria-expanded=\"false\" aria-controls=\"sc5\">\n              <i class=\"zmdi zmdi-shopping-basket\"></i> E-Commerce </a>\n            <ul id=\"sc5\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"sch5\">\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/ecommerce-filters.html\">E-Commerce Sidebar</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/ecommerce-filters-full.html\">E-Commerce Sidebar Full</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/ecommerce-filters-full2.html\">E-Commerce Topbar Full</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/ecommerce-item.html\">E-Commerce Item</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/ecommerce-cart.html\">E-Commerce Cart</a>\n              </li>\n            </ul>\n          </li>\n          <li class=\"panel\" role=\"tab\" id=\"sch6\">\n            <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#slidebar-menu\" href=\"#sc6\" aria-expanded=\"false\" aria-controls=\"sc6\">\n              <i class=\"zmdi zmdi-collection-image-o\"></i> Portfolio </a>\n            <ul id=\"sc6\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"sch6\">\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/portfolio-filters_sidebar.html\">Portfolio Sidebar Filters</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/portfolio-filters_topbar.html\">Portfolio Topbar Filters</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/portfolio-filters_sidebar_fluid.html\">Portfolio Sidebar Fluid</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/portfolio-filters_topbar_fluid.html\">Portfolio Topbar Fluid</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/portfolio-cards.html\">Porfolio Cards</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/portfolio-masonry.html\">Porfolio Masonry</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/portfolio-item.html\">Portfolio Item 1</a>\n              </li>\n              <li>\n                <a href=\"https://agmstudio.io/themes/material-style/1.3/portfolio-item2.html\">Portfolio Item 2</a>\n              </li>\n            </ul>\n          </li>\n          <li>\n            <a class=\"link\" href=\"https://agmstudio.io/themes/material-style/1.3/component-typography.html\">\n              <i class=\"zmdi zmdi-view-compact\"></i> UI Elements</a>\n          </li>\n          <li>\n            <a class=\"link\" href=\"https://agmstudio.io/themes/material-style/1.3/page-all.html\">\n              <i class=\"zmdi zmdi-link\"></i> All Pages</a>\n          </li>\n        </ul>\n        <div class=\"ms-slidebar-social ms-slidebar-block\">\n          <h4 class=\"ms-slidebar-block-title\">Social Links</h4>\n          <div class=\"ms-slidebar-social\">\n            <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-facebook\">\n              <i class=\"zmdi zmdi-facebook\"></i>\n              <span class=\"badge badge-pink\">12</span>\n              <div class=\"ripple-container\"></div>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-twitter\">\n              <i class=\"zmdi zmdi-twitter\"></i>\n              <span class=\"badge badge-pink\">4</span>\n              <div class=\"ripple-container\"></div>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-google\">\n              <i class=\"zmdi zmdi-google\"></i>\n              <div class=\"ripple-container\"></div>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-instagram\">\n              <i class=\"zmdi zmdi-instagram\"></i>\n              <div class=\"ripple-container\"></div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n "

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "<p>\n  navbar works!\n</p>\n"

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ms-hero-page-override ms-hero-img-city ms-hero-bg-primary\">\n        <div class=\"container\">\n          <div class=\"text-center\">\n            <span class=\"ms-logo ms-logo-lg ms-logo-white center-block mb-2 mt-2 animated zoomInDown animation-delay-5\">M</span>\n            <h1 class=\"no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5\">Material\n              <span>Style</span>\n            </h1>\n            <p class=\"lead lead-lg color-white text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7\">Discover our projects and the\n              <span class=\"color-warning\">rigorous process</span> of creation. Our principles are creativity, design, experience and knowledge.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"card card-hero animated slideInUp animation-delay-8 mb-6\">\n          <div class=\"card-block\">\n            <h2 class=\"color-primary\">About Us</h2>\n            <div class=\"row\">\n              <div class=\"col-md-6 text-justify\">\n                <p class=\"dropcaps\">Ktimez.com ni urubuga rukorera mu Rwanda, rwashinzwe muri Kanama 2016, rwandika ku bumenyi n'ikoranabuhanga rigezweho, rwibanda kuri za mudasobwa, telephone ndetse na internet muri rusange.\nTuri abambere mu Rwanda bandika ku ikoranabuhanga ryonyine kandi mu rurimi rwacu rw'Ikinyarwanda kuko intego yacu ari ukugeza ku bantu bose babikunda amakuru yizewe kandi mashya ajyanye n'ikoranabuhanga aho riva rikagera.</p>\n                \n              </div>\n              <div class=\"col-md-6 text-justify\">\n                <p>\nBitewe n'ubwiyongere ndetse n'umubare munini w'abakoresha internet mu Rwanda, Ktimez.com yahisemo kujya ibagezaho ibijyanye n'ikoranabuhanga itarobanuye ibyiciro guhera ku babifitemo ubumenyi buciriritse kugeza ku babizobereyemo.\nUramutse wifuza ibindi bisobanuro, hari igitekerezo, inyunganizi cyangwa ubufasha waduha kanda hano.</p>\n              </div>\n            </div>\n          \n          \n          </div>\n        </div>\n      </div>\n      <div class=\"wrap ms-hero-bg-dark-light ms-hero-img-airplane ms-bg-fixed mb-6 mt-4\">\n        <div class=\"container\">\n          <h2 class=\"text-center color-white no-mt mb-6 wow fadeInUp\">Our Services</h2>\n          <div class=\"col-md-4 col-sm-6\">\n\n            <div class=\"ms-icon-feature wow flipInX animation-delay-4\">\n              <div class=\"ms-icon-feature-icon\">\n                <span class=\"ms-icon ms-icon-lg ms-icon-inverse ms-icon-white\">\n                  <i class=\"fa fa-desktop\"></i>\n                </span>\n              </div>\n              <div class=\"ms-icon-feature-content color-white\">\n                <h4 class=\"color-primary\">Desktop Application development</h4>\n                \n                <p> Dukora software zitandukanye zifashishwa muri za mudasobwa, bitewe nibyifuzo ndetse n'akamaro abatugana bifuza.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6\">\n            <div class=\"ms-icon-feature wow flipInX animation-delay-4\">\n              <div class=\"ms-icon-feature-icon\">\n                <span class=\"ms-icon ms-icon-lg ms-icon-inverse ms-icon-white\">\n                  <i class=\"fa fa-tablet\"></i>\n                </span>\n              </div>\n              <div class=\"ms-icon-feature-content color-white\">\n                <h4 class=\"color-primary\">Mobile Application development</h4>\n                <p> Dukora software zitandukanye zifashishwa muri za telephone, bitewe n'ibyifuzo ndetse n'akamaro abatugana bifuza.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6\">\n            <div class=\"ms-icon-feature wow flipInX animation-delay-4\">\n              <div class=\"ms-icon-feature-icon\">\n                <span class=\"ms-icon ms-icon-lg ms-icon-inverse ms-icon-white\">\n                  <i class=\"fa fa-wordpress\"></i>\n                </span>\n              </div>\n              <div class=\"ms-icon-feature-content color-white\">\n                <h4 class=\"color-primary\">Web based Apps development</h4>\n                <p>Dukora imbuga za internet (Websites) bitewe n'ibyifuzo ndetse n'akamaro abatugana bifuza, dukoresheje ikoranabuhanga rigezweho</p>\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6\">\n            <div class=\"ms-icon-feature wow flipInX animation-delay-4\">\n              <div class=\"ms-icon-feature-icon\">\n                <span class=\"ms-icon ms-icon-lg ms-icon-inverse ms-icon-white\">\n                  <i class=\"fa fa-graduation-cap\"></i>\n                </span>\n              </div>\n              <div class=\"ms-icon-feature-content color-white\">\n                <h4 class=\"color-primary\">IT-related Training</h4>\n                <p>Duhugura abatugana mubijyanye n'ikoranabuhanga muri rusange cyane cyane ibyerekeye mudasobwa, internet.                       </p>\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6\">\n            <div class=\"ms-icon-feature wow flipInX animation-delay-4\">\n              <div class=\"ms-icon-feature-icon\">\n                <span class=\"ms-icon ms-icon-lg ms-icon-inverse ms-icon-white\">\n                  <i class=\"fa fa-desktop\"></i>\n                </span>\n              </div>\n              <div class=\"ms-icon-feature-content color-white\">\n                <h4 class=\"color-primary\">IT Consultancy</h4>\n                <p> Dutanga ubufasha n'inyunganizi kubijyanye n'ikoranabuhanga, n'ibitekerezo bitandukanye ku mishinga ijyanjye n'ikoranabuhanga </p>  \n                \n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6\">\n            <div class=\"ms-icon-feature wow flipInX animation-delay-4\">\n              <div class=\"ms-icon-feature-icon\">\n                <span class=\"ms-icon ms-icon-lg ms-icon-inverse ms-icon-white\">\n                  <i class=\"fa fa-send\"></i>\n                </span>\n              </div>\n              <div class=\"ms-icon-feature-content color-white\">\n                <h4 class=\"color-primary\">Networking</h4>\n                <p>Dutanga services nyinshi zitandukanye zijyanye na Networking, Troubleshoot za network yawe, n'ibindi bibazo byose Network yawe yagira</p>\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"text-center\">\n            <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-info wow flipInX animation-delay-8\" data-toggle=\"modal\" data-target=\"#ms-account-modal\">\n              <i class=\"fa fa-space-shuttle\"></i> Hire Us</a>\n            \n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <h1 class=\"color-primary text-center wow fadeInUp animation-delay-4\">Our Team</h1>\n        <p class=\"lead text-center wow fadeInUp animation-delay-4\">We are a team of professionals, our illusion is your project.</p>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"card card-warning wow zoomInUp animation-delay-5\">\n              <div class=\"withripple zoom-img\">\n                <a href=\"javascript:void()\" class=\"\">\n                  <img src=\"assets/users/killah.jpeg\" alt=\"...\" class=\"img-responsive\">\n                </a>\n              </div>\n              <div class=\"card-block\">\n                <span class=\"label label-warning pull-right\">CEO</span>\n                <h3 class=\"color-warning\">Mateso Alain</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudiandae beatae magni es magnam autem molestias.</p>\n                <div class=\"row\">\n                  <div class=\"col-xs-6\">\n                    <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook\">\n                      <i class=\"zmdi zmdi-facebook\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter\">\n                      <i class=\"zmdi zmdi-twitter\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram\">\n                      <i class=\"zmdi zmdi-instagram\"></i>\n                    </a>\n                  </div>\n                  <div class=\"col-xs-6 text-right\">\n                    <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-sm btn-warning\">\n                      <i class=\"zmdi zmdi-account\"></i> Perfil</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <div class=\"card card-success wow zoomInUp animation-delay-7\">\n              <div class=\"withripple zoom-img\">\n                <a href=\"javascript:void()\" class=\"\">\n                  <img src=\"assets/img/demo/p1.jpg\" alt=\"...\" class=\"img-responsive\">\n                </a>\n              </div>\n              <div class=\"card-block\">\n                <span class=\"label label-success pull-right\">Marketing</span>\n                <h3 class=\"color-success\">Sophie Austin</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudiandae beatae magni es magnam autem molestias.</p>\n                <div class=\"row\">\n                  <div class=\"col-xs-6\">\n                    <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook\">\n                      <i class=\"zmdi zmdi-facebook\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter\">\n                      <i class=\"zmdi zmdi-twitter\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram\">\n                      <i class=\"zmdi zmdi-instagram\"></i>\n                    </a>\n                  </div>\n                  <div class=\"col-xs-6 text-right\">\n                    <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-sm btn-success\">\n                      <i class=\"zmdi zmdi-account\"></i> Perfil</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card card-royal wow zoomInUp animation-delay-9\">\n              <div class=\"withripple zoom-img\">\n                <a href=\"javascript:void()\" class=\"\">\n                  <img src=\"assets/img/demo/p3.jpg\" alt=\"...\" class=\"img-responsive\">\n                </a>\n              </div>\n              <div class=\"card-block\">\n                <span class=\"label label-royal pull-right\">Developer</span>\n                <h3 class=\"color-royal\">Lyana Morgan</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudiandae beatae magni es magnam autem molestias.</p>\n                <div class=\"row\">\n                  <div class=\"col-xs-6\">\n                    <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook\">\n                      <i class=\"zmdi zmdi-facebook\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter\">\n                      <i class=\"zmdi zmdi-twitter\"></i>\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram\">\n                      <i class=\"zmdi zmdi-instagram\"></i>\n                    </a>\n                  </div>\n                  <div class=\"col-xs-6 text-right\">\n                    <a href=\"javascript:void(0)\" class=\"btn btn-raised btn-sm btn-royal\">\n                      <i class=\"zmdi zmdi-account\"></i> Perfil</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- container -->"

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 mb-4\">\n<div class=\"col-md-12\">\n  <article class=\"card wow fadeInLeft animation-delay-5 mb-4\" *ngFor=\"let post of posts\">\n             <div class=\"card-block\" >\n               <div class=\"row\">\n                 <div class=\"col-lg-6\" >\n                   <img src=\"{{baseUrl}}{{post.featured}}\" alt=\"\" class=\"img-responsive mb-4\" id=\"meter2\"> </div>\n                 <div class=\"col-lg-6\">\n                   <h3 class=\"no-mt\">\n                     <a [routerLink]=\"['/post',post._id]\">{{post.title}}</a>\n                   </h3>\n                   <p class=\"mb-4\" id=\"limitparagraph\">{{post.body}}</p>\n                 </div>\n               </div>\n               <div class=\"row\">\n                 <div class=\"col-lg-8\">\n                   by\n                   <a href=\"javascript:void(0)\">{{post.posted_by}}</a> in\n                   <a   *ngFor=\"let cat of post.category\">\n                     <span *ngIf=\"cat == 'Android' \"><a class=\"ms-tag ms-tag-success\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'IOS' \"><a class=\"ms-tag ms-tag-royal\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Windows Phone' \"><a class=\"ms-tag ms-tag-info\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Tech News' \"><a class=\"ms-tag ms-tag-danger\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Linux' \"><a class=\"ms-tag ms-tag-default\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Windows' \"><a class=\"ms-tag ms-tag-warning\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Mac OS' \"><a class=\"ms-tag ms-tag-primary\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Hacking' \"><a class=\"ms-tag ms-tag-danger\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'How To' \"><a class=\"ms-tag ms-tag-success\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Web Dev' \"><a class=\"ms-tag ms-tag-warning\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Troubleshooting' \"><a class=\"ms-tag ms-tag-royal\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Dev Ops' \"><a class=\"ms-tag ms-tag-primary\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      </a>\n                   <span class=\"ml-1 hidden-xs\">\n                     <i class=\"zmdi zmdi-time mr-05 color-info\"></i>\n                     <span class=\"color-medium-dark\">{{post.created_at}}</span>\n                   </span>\n                 </div>\n                 <div class=\"col-lg-4 text-right\">\n                   <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-raised btn-block animate-icon\" [routerLink]=\"['/post',post._id]\">Read More\n                     <i class=\"ml-1 no-mr zmdi zmdi-long-arrow-right\"></i>\n                   </a>\n                 </div>\n               </div>\n             </div>\n           </article>\n\n\n</div>\n</div>\n<app-sidebar></app-sidebar>"

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 mb-4\">\n<div class=\"card animated fadeInLeftTiny animation-delay-5\">\n              <div class=\"card-block card-block-big\">\n                <h1 class=\"no-mt\">{{post.title}}</h1>\n                <div class=\"mb-4\">\n                  <img src=\"{{baseUrl2}}{{user.avatar}}\" id = \"avatar\" alt=\"...\" class=\"img-circle mr-1\"> by\n                  <a href=\"javascript:void(0)\">{{post.posted_by}}</a> in\n                  \n                   <a   *ngFor=\"let cat of post.category\">\n                     <span *ngIf=\"cat == 'Android' \"><a class=\"ms-tag ms-tag-success\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'IOS' \"><a class=\"ms-tag ms-tag-royal\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Windows Phone' \"><a class=\"ms-tag ms-tag-info\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Tech News' \"><a class=\"ms-tag ms-tag-danger\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Linux' \"><a class=\"ms-tag ms-tag-default\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Windows' \"><a class=\"ms-tag ms-tag-warning\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Mac OS' \"><a class=\"ms-tag ms-tag-primary\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Hacking' \"><a class=\"ms-tag ms-tag-danger\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'How To' \"><a class=\"ms-tag ms-tag-success\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Web Dev' \"><a class=\"ms-tag ms-tag-warning\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Troubleshooting' \"><a class=\"ms-tag ms-tag-royal\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      <span *ngIf=\"cat == 'Dev Ops' \"><a class=\"ms-tag ms-tag-primary\" style=\"color:white\" [routerLink]=\"['/category',cat]\">{{cat}}</a></span>\n                      </a>\n                  <span class=\"ml-1 hidden-xs\">\n                    <i class=\"zmdi zmdi-time mr-05 color-info\"></i>\n                    <span class=\"color-medium-dark\">{{formatDateTime(post.created_at)}} </span>\n                  </span>\n                  <span class=\"ml-1\">\n                    <i class=\"zmdi zmdi-comments color-royal mr-05\"></i> 25</span>\n                    <span class=\"ml-1\">\n                      <i class=\"zmdi zmdi-eye color-success mr-05\"></i> {{post.views}}</span>\n                </div>\n                <img src=\"{{baseUrl}}{{post.featured}}\" alt=\"\" class=\"img-responsive mb-4\" id=\"meter\">\n                \n                <div [innerHtml]=\"post.body\">\n                 \n              </div>\n             \n                 \n\n               <hr class=\"color\">\n\n                \n                  <div class=\"row\">\n                   <a  class=\"ms-tag ms-tag-success\" ><a style=\"color:white\" [routerLink]=\"['/category','Android']\">Android</a></a>\n                   <a  class=\"ms-tag ms-tag-royal\" ><a style=\"color:white\" [routerLink]=\"['/category','IOS']\">IOS</a></a>\n                   <a  class=\"ms-tag ms-tag-info\" ><a style=\"color:white\" [routerLink]=\"['/category','Windows Phone']\">Windows Phone</a></a>\n                   <a  class=\"ms-tag ms-tag-danger\" ><a style=\"color:white\" [routerLink]=\"['/category','Tech News']\">Tech News</a></a>\n                   <a  class=\"ms-tag ms-tag-warning\" ><a style=\"color:white\" [routerLink]=\"['/category','Windows']\">Windows</a></a>\n                   <a  class=\"ms-tag ms-tag-default\" ><a style=\"color:white\" [routerLink]=\"['/category','Linux']\">Linux</a></a>\n                   <a  class=\"ms-tag ms-tag-primary\" ><a style=\"color:white\" [routerLink]=\"['/category','Mac OS']\">Mac OS</a></a>\n                   <a  class=\"ms-tag ms-tag-success\" ><a style=\"color:white\" [routerLink]=\"['/category','Mac OS']\">How To</a></a>\n                   <a  class=\"ms-tag ms-tag-danger\" ><a style=\"color:white\" [routerLink]=\"['/category','Hacking']\">Hacking</a></a>\n                   \n\n\n                  </div>\n                 <br/>\n                 <section class=\"ms-component-section\">\n                  <h2 class=\"section-title\">Comments</h2>\n                  \n              <div class=\"card-block\" *ngFor=\"let com of post.comments\">\n               <div class=\"row\">\n               \n                 <div class=\"col-lg-12\" >\n                   <img src=\"assets/img/user.png\" alt=\"...\" class=\"img-circle mr-1\"> by\n                   <a href=\"javascript:void(0)\">{{com.user}}</a>\n                   <span class=\"ml-1 hidden-xs\">\n                    <i class=\"zmdi zmdi-time mr-05 color-info\"></i>\n                    <span class=\"color-medium-dark\">{{formatDateTime(com.date)}}</span>\n                  </span> \n                   <p>{{com.content}}</p>\n                   \n                 </div>\n                 </div>\n              </div>\n              <div class=\"card-block\">\n               <div class=\"row\">\n                  <section class=\"ms-component-section\">\n                     <h2 class=\"section-title\">Write your comment</h2>\n                  <form (submit)=\"CommentUpdate()\">\n                  <div class=\"form-group label-floating\">\n                    <label class=\"control-label\" for=\"name\" >Your Name</label>\n                    <input class=\"form-control\" id=\"name\" type=\"text\" [(ngModel)]=\"name\" name=\"name\"> </div>\n                  <div class=\"form-group label-floating\">\n                    <label class=\"control-label\" for=\"focusedInput2\" >Comment</label>\n                    <input class=\"form-control\" id=\"focusedInput2\" type=\"text\" [(ngModel)]=\"content\" name=\"content\">\n                    \n                  </div>\n                  <div class=\"form-group\">\n                        <div class=\"col-md-8\">\n                          <button type=\"submit\" class=\"btn btn-raised btn-primary\">Submit</button>\n                          \n                        </div>\n                      </div>\n                  </form>\n                  </section>\n               </div>\n               </div>\n             \n            \n          \n                 </section>\n              </div>\n            </div>\n</div>\n<div class=\"col-md-4\">\n            <div class=\"row\">\n\n<div class=\"col-md-12 col-sm-4\" >\n       <div class=\"card animated fadeInUp animation-delay-7\">\n              <div class=\"ms-hero-bg-royal ms-hero-img-coffee\">\n                <h3 class=\"color-white index-1 text-center no-m pt-4\">{{user.first_name}} {{user.last_name}}</h3>\n                <div class=\"color-medium index-1 text-center np-m\">@{{user.username}}</div>\n                <img src=\"{{baseUrl2}}{{user.avatar}}\" alt=\"...\" class=\"img-avatar-circle\"> </div>\n              <div class=\"card-block pt-4 text-center\">\n                <h3 class=\"color-primary\">About me</h3>\n                <p>{{user.description}}</p>\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook\">\n                  <i class=\"zmdi zmdi-facebook\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter\">\n                  <i class=\"zmdi zmdi-twitter\"></i>\n                </a>\n                <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram\">\n                  <i class=\"zmdi zmdi-instagram\"></i>\n                </a>\n              </div>\n            </div>\n            </div>\n\n\n  <div class=\"col-md-12 col-sm-4\">\n\n      <div class=\"card card-primary\">\n                        <div class=\"card-header\">\n                          <h3 class=\"card-title\">\n                            <i class=\"zmdi zmdi-graduation-cap\"></i> Learn Programming With Us</h3>\n                        </div>\n                        <div class=\"withripple zoom-img\">\n                          <a href=\"javascript:void(0);\">\n                            <img src=\"assets/img/languages.jpg\" alt=\"\" class=\"img-responsive\"> </a>\n                        </div>\n                        <div class=\"card-block text-center\">\n                          <h4 class=\"color-info\">Want To Improve in your Programming Skills?</h4>\n                          <p>Here at Ktimez Inc we have qualified programmers that can teach you every language you are willing to know.</p>\n                          <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-raised\" data-toggle=\"modal\" data-target=\"#ms-account-modal\">\n                            <i class=\"fa fa-envelope\"></i> Hire Us</a>\n                        </div>\n                      </div>\n     \n      </div>\n    \n  <div class=\"col-md-12 col-sm-4\">\n    <div class=\"card\">\n                        <div class=\"withripple zoom-img\">\n                          <a href=\"javascript:void(0);\">\n                            <img src=\"assets/img/webdesignbanner.png\" alt=\"\" class=\"img-responsive\"> </a>\n                        </div>\n                        <div class=\"card-block text-center\">\n                          <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-primary btn-circle-raised btn-card-float wow zoomInDown\">\n                            <i class=\"zmdi zmdi-star\"></i>\n                          </a>\n                          <h4 class=\"color-primary\">Software And IT Home Training</h4>\n                          <p>You like our daily ICT and Tech news? Hire us, we have a lot of engineers and qualified and skilled IT specialist to train you.</p>\n                          <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-raised\" data-toggle=\"modal\" data-target=\"#ms-account-modal\">\n                            <i class=\"fa fa-envelope\"></i> Hire us </a>\n                        </div>\n                      </div>\n  </div>\n    </div>\n            \n           \n\n  </div>"

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "  <div class=\"col-md-4\">\n            <div class=\"row\">\n  <div class=\"col-md-12 col-sm-4\">\n\n      <div class=\"card card-primary\">\n                        <div class=\"card-header\">\n                          <h3 class=\"card-title\">\n                            <i class=\"zmdi zmdi-graduation-cap\"></i> Learn Programming With Us</h3>\n                        </div>\n                        <div class=\"withripple zoom-img\">\n                          <a href=\"javascript:void(0);\">\n                            <img src=\"assets/img/languages.jpg\" alt=\"\" class=\"img-responsive\"> </a>\n                        </div>\n                        <div class=\"card-block text-center\">\n                          <h4 class=\"color-info\">Want To Improve in your Programming Skills?</h4>\n                          <p>Here at Ktimez Inc we have qualified programmers that can teach you every language you are willing to know.</p>\n                          <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-raised\" data-toggle=\"modal\" data-target=\"#ms-account-modal\">\n                            <i class=\"fa fa-envelope\"></i> Hire Us</a>\n                        </div>\n                      </div>\n     \n      </div>\n    \n  <div class=\"col-md-12 col-sm-4\">\n    <div class=\"card\">\n                        <div class=\"withripple zoom-img\">\n                          <a href=\"javascript:void(0);\">\n                            <img src=\"assets/img/webdesignbanner.png\" alt=\"\" class=\"img-responsive\"> </a>\n                        </div>\n                        <div class=\"card-block text-center\">\n                          <a href=\"javascript:void(0)\" class=\"btn-circle btn-circle-primary btn-circle-raised btn-card-float wow zoomInDown\">\n                            <i class=\"zmdi zmdi-star\"></i>\n                          </a>\n                          <h4 class=\"color-primary\">Software And IT Home Training</h4>\n                          <p>You like our daily ICT and Tech news? Hire us, we have a lot of engineers and qualified and skilled IT specialist to train you.</p>\n                          <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-raised\" data-toggle=\"modal\" data-target=\"#ms-account-modal\">\n                            <i class=\"fa fa-envelope\"></i> Hire us </a>\n                        </div>\n                      </div>\n  </div>\n    </div>\n            \n            <div class=\"row\">\n             \n              <div class=\"col-md-12 col-sm-4\">\n                 \n                 <div class=\"card\">\n                        <div class=\"list-group\">\n                          <a href=\"javascript:void(0)\" class=\"list-group-item withripple active\">\n                            <i class=\"zmdi zmdi-favorite\"></i>Most Viewed Articles\n                            \n                          </a></div></div>\n\n                <div class=\"home-news-box\" *ngFor=\"let popular of posts\">\n                  <h4 class=\"no-m\">\n                    <a [routerLink]=\"['/post',popular.slug]\">{{popular.title}}</a>\n                  </h4>\n                  <small>\n                    <a href=\"#\">{{popular.posted_by}}</a> | {{formatDateTime(popular.created_at)}}</small>\n                  <div class=\"card\"> \n                    <div class=\"withripple zoom-img\">\n                    <a [routerLink]=\"['/post',popular.slug]\">\n                    <img src=\"{{baseUrl}}{{popular.featured}}\" alt=\"\" class=\"img-responsive\"> </a>\n                    </div></div>\n                  </div>\n                </div>\n              </div>\n\n  </div>\n\n    "

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageService = (function () {
    function PageService(http) {
        this.http = http;
    }
    PageService.prototype.getPage = function () {
        return this.http.get('http://localhost:3000/postscount')
            .map(function (res) { return res.json(); });
    };
    PageService.prototype.getPageCat = function (name) {
        return this.http.get('http://localhost:3000/postscountcat/' + name)
            .map(function (res) { return res.json(); });
    };
    return PageService;
}());
PageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.js.map

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(206);


/***/ })

},[386]);
//# sourceMappingURL=main.bundle.js.map