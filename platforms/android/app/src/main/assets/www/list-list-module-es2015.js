(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color='danger'></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Ouro\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/Gold24k2H.png\" alt=\"\"/>\n    <ion-card-header>\n      <ion-card-subtitle>Seguraça e Liquidez</ion-card-subtitle>\n      <ion-card-title>Por que investir?</ion-card-title>\n      \n    </ion-card-header>\n  \n    <ion-card-content>\n        Pode ser vendido em qualquer momento e em qualquer lugar do planeta, por isso é chamado de “dinheiro real”. \n        Na prática, o ouro preserva patrimônio e compensa o risco de outras aplicações financeiras tradicionais.\n        <br><br>\n        É preciso lembrar que o ouro, diferentemente de um papel-moeda, é de prospecção limitada. \n        E, mais do que isso, um mineral já bastante explorado — há séculos — no Brasil e em outras nações colonizadas.\n        <br><br>\n        Dessa forma, com a escassez das jazidas mundiais, o metal amarelo ainda circulante no mercado tende a se valorizar ainda mais.\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <img src=\"/assets/Gold24k1H.png\" alt=\"\"/>\n    <ion-card-header>\n      <ion-card-subtitle>Qualidades do Metal</ion-card-subtitle>\n      <ion-card-title>Ouro 18k</ion-card-title>\n      \n    </ion-card-header>\n  \n    <ion-card-content>\n      De entre as características principais do Ouro, destacam-se a boa condutividade eléctrica, a resistência à corrosão, além de não reagir com a maioria dos produtos químicos (metal nobre).\n      <br><br>\n      Devido às suas características, o ouro é um metal que pode ser aplicado numa grande quantidade de produtos utilizados para os mais diferentes fins.\n      <br><br>\n      <strong> comprar Ouro na Mineradora Atalaia, clique no botão abaixo:</strong>\n    </ion-card-content>\n    <ion-item href=\"https://api.whatsapp.com/send?1=pt_BR&phone=5511966435275\" color=\"success\" class=\"activated\">\n      <ion-icon name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\n      <ion-label>Whatsapp</ion-label>\n    </ion-item>\n\n    <ion-item color=\"secondary\" (click)=\"openModal()\">\n      <ion-icon ios=\"ios-contacts\" md=\"md-contacts\" slot=\"start\"></ion-icon>\n      <ion-label>Contato</ion-label>\n    </ion-item>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
                }
            ])
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../modal/modal.page */ "./src/app/modal/modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let ListPage = class ListPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_1__["ModalPage"]
            });
            modal.onDidDismiss();
            return yield modal.present();
        });
    }
    ngOnInit() {
    }
};
ListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list/list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=list-list-module-es2015.js.map