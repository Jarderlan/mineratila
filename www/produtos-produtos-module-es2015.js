(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produtos-produtos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color='danger'></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Pedras Preciosas\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">Diamantes</ion-card-title>\n    </ion-card-header>\n    <ion-card-content >\n      <ion-slides #sliders (ionSlidesDidLoad)='slidesDidLoad(sliders)' pager='true' [options]='slideOpts'>\n        <ion-slide>\n          <img src=\"/assets/preciosos/diamente.jpg\" alt=\"Diamantes\">\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"/assets/preciosos/diamante2.jpg\" alt=\"Diamantes\">\n        </ion-slide>\n      </ion-slides>\n\n      <p class=\"ion-text-justify\">\n        <br>\n        O diamante é o mais duro material de ocorrência natural que se conhece, com uma dureza de 10 (valor máximo da escala de Mohs). \n        Isto significa que não pode ser riscado por nenhum outro mineral ou substância, exceto o próprio diamante, funcionando como um importante material abrasivo.\n        <br><br>\n        A densidade é de 3,48. O brilho é adamantino, derivado do elevadíssimo índice de refracção (2,42). Recorde-se que todos os minerais com índice de refracção maior ou igual a 1,9 possuem este brilho. \n        No entanto, os cristais não cortados podem apresentar um brilho gorduroso. Pode apresentar fluorescência, ou seja, a incidência dos raios ultravioleta produzem luminescência com cores variadas originando colorações azul, rosa, amarela ou verde.\n      </p>\n    </ion-card-content >\n\n    <ion-item href=\"https://api.whatsapp.com/send?1=pt_BR&phone=5511966435275\" color=\"success\" class=\"activated\">\n      <ion-icon name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\n      <ion-label>Whatsapp</ion-label>\n    </ion-item>\n\n    <ion-item color=\"secondary\" (click)=\"openModal()\">\n      <ion-icon ios=\"ios-contacts\" md=\"md-contacts\" slot=\"start\"></ion-icon>\n      <ion-label>Contato</ion-label>\n    </ion-item>\n\n  </ion-card>\n  \n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">Esmeraldas</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-slides pager='true' [options]='slideOpts'>\n        <ion-slide>\n          <img src=\"/assets/preciosos/esmeralda-1.jpg\" alt=\"Esmeraldas\">\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"/assets/preciosos/esmeralda-2.jpg\" alt=\"Esmeraldas\">\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"/assets/preciosos/esmeralda-3.jpg\" alt=\"Esmeraldas\">\n        </ion-slide>\n      </ion-slides>\n\n      <p class=\"ion-text-justify\">\n        <br>\n        A esmeralda é a variedade de cor verde do Berilo, mineral que apresenta-se comumente em cristais prismáticos com bases hexagonais, raramente biterminados, com vários centímetros de comprimento, usualmente estriados e corroídos, com fraturas e fissuras, muitas delas preenchidas por impurezas.\n      <br><br>\n        As esmeraldas são utilizadas como gemas, ou seja, em joias, em adornos e objetos de decoração.\n      <br><br>\n        Medida aproximada das pedras: de 4 cm à 8 cm.\n      </p>\n    </ion-card-content>\n\n    <ion-item href=\"https://api.whatsapp.com/send?1=pt_BR&phone=5511966435275\" color=\"success\" class=\"activated\">\n      <ion-icon name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\n      <ion-label>Whatsapp</ion-label>\n    </ion-item>\n\n    <ion-item color=\"secondary\" (click)=\"openModal()\">\n      <ion-icon ios=\"ios-contacts\" md=\"md-contacts\" slot=\"start\"></ion-icon>\n      <ion-label>Contato</ion-label>\n    </ion-item>\n  \n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">Alexandrita</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-slides pager='true' [options]='slideOpts'>\n        <ion-slide>\n          <img src=\"/assets/preciosos/alexandrita.jpg\" alt=\"Alexandrita\">\n        </ion-slide>\n\n        <ion-slide>\n          <img src=\"/assets/preciosos/alexandrita01.jpg\" alt=\"Alexandrita\">\n        </ion-slide>\n      </ion-slides>\n\n      <p class=\"ion-text-justify\">\n        <br>\n        Alexandrita é uma variedade do mineral crisoberilo e uma pedra preciosa muito apreciada e de grande valor.\n        <br><br>\n        Muda sua cor de acordo com a luz:\n        <br>À luz do dia, Verde.\n        <br>À luz artificial, Vermelho.\n      </p>\n    </ion-card-content>\n\n    <ion-item href=\"https://api.whatsapp.com/send?1=pt_BR&phone=5511966435275\" color=\"success\" class=\"activated\">\n      <ion-icon name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\n      <ion-label>Whatsapp</ion-label>\n    </ion-item>\n\n    <ion-item color=\"secondary\" (click)=\"openModal()\">\n      <ion-icon ios=\"ios-contacts\" md=\"md-contacts\" slot=\"start\"></ion-icon>\n      <ion-label>Contato</ion-label>\n    </ion-item>\n\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/produtos/produtos-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/produtos/produtos-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProdutosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPageRoutingModule", function() { return ProdutosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _produtos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produtos.page */ "./src/app/produtos/produtos.page.ts");




const routes = [
    {
        path: '',
        component: _produtos_page__WEBPACK_IMPORTED_MODULE_3__["ProdutosPage"]
    }
];
let ProdutosPageRoutingModule = class ProdutosPageRoutingModule {
};
ProdutosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProdutosPageRoutingModule);



/***/ }),

/***/ "./src/app/produtos/produtos.module.ts":
/*!*********************************************!*\
  !*** ./src/app/produtos/produtos.module.ts ***!
  \*********************************************/
/*! exports provided: ProdutosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPageModule", function() { return ProdutosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _produtos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./produtos-routing.module */ "./src/app/produtos/produtos-routing.module.ts");
/* harmony import */ var _produtos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produtos.page */ "./src/app/produtos/produtos.page.ts");







let ProdutosPageModule = class ProdutosPageModule {
};
ProdutosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _produtos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProdutosPageRoutingModule"]
        ],
        declarations: [_produtos_page__WEBPACK_IMPORTED_MODULE_6__["ProdutosPage"]]
    })
], ProdutosPageModule);



/***/ }),

/***/ "./src/app/produtos/produtos.page.scss":
/*!*********************************************!*\
  !*** ./src/app/produtos/produtos.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG9zL3Byb2R1dG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/produtos/produtos.page.ts":
/*!*******************************************!*\
  !*** ./src/app/produtos/produtos.page.ts ***!
  \*******************************************/
/*! exports provided: ProdutosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosPage", function() { return ProdutosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../modal/modal.page */ "./src/app/modal/modal.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let ProdutosPage = class ProdutosPage {
    constructor(modalController) {
        this.modalController = modalController;
        this.slideOpts = {
            loop: true
        };
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
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    ngOnInit() {
    }
};
ProdutosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
ProdutosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-produtos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./produtos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/produtos/produtos.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./produtos.page.scss */ "./src/app/produtos/produtos.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], ProdutosPage);

//https://www.mag.com.br/blog/educacao-financeira/artigo/investir-em-ouro


/***/ })

}]);
//# sourceMappingURL=produtos-produtos-module-es2015.js.map