/**
 * angular2-modal - Angular2 Modal (dialog) window.
 * @version v2.0.1
 * @link https://github.com/shlomiassaf/angular2-modal
 * @license MIT
 */
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
    JSNativeModalModule.decorators = [
        { type: core_1.NgModule, args: [{
                    providers: exports.providers
                },] },
    ];
    /** @nocollapse */
    JSNativeModalModule.ctorParameters = [];
    return JSNativeModalModule;
}());
exports.JSNativeModalModule = JSNativeModalModule;
//# sourceMappingURL=js-native.module.js.map