"use strict";
var core_1 = require('@angular/core');
var angular2_modal_1 = require('../../../../components/angular2-modal');
var modal_1 = require('./modal');
exports.providers = [
    { provide: angular2_modal_1.Modal, useClass: modal_1.Modal },
    { provide: modal_1.Modal, useClass: modal_1.Modal }
];
var JSNativeModalModule = (function () {
    function JSNativeModalModule() {
    }
    JSNativeModalModule.getProviders = function () {
        return exports.providers;
    };
    JSNativeModalModule = __decorate([
        core_1.NgModule({
            providers: exports.providers
        }), 
        __metadata('design:paramtypes', [])
    ], JSNativeModalModule);
    return JSNativeModalModule;
}());
exports.JSNativeModalModule = JSNativeModalModule;
//# sourceMappingURL=js-native.module.js.map