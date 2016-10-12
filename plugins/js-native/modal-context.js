/**
 * angular2-modal - Angular2 Modal (dialog) window.
 * @version v2.0.1
 * @link https://github.com/shlomiassaf/angular2-modal
 * @license MIT
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var angular2_modal_1 = require('../../../../components/angular2-modal');
var DEFAULT_SETTERS = [
    'promptDefault'
];
var JSNativeModalContext = (function (_super) {
    __extends(JSNativeModalContext, _super);
    function JSNativeModalContext() {
        _super.apply(this, arguments);
    }
    JSNativeModalContext.prototype.normalize = function () {
        if (!this.message)
            this.message = '';
        if (this.dialogType === undefined)
            this.dialogType = angular2_modal_1.DROP_IN_TYPE.alert;
    };
    return JSNativeModalContext;
}(angular2_modal_1.ModalOpenContext));
exports.JSNativeModalContext = JSNativeModalContext;
var JSNativeModalContextBuilder = (function (_super) {
    __extends(JSNativeModalContextBuilder, _super);
    function JSNativeModalContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        _super.call(this, defaultValues || {}, angular2_modal_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType || JSNativeModalContext);
    }
    return JSNativeModalContextBuilder;
}(angular2_modal_1.ModalOpenContextBuilder));
exports.JSNativeModalContextBuilder = JSNativeModalContextBuilder;
//# sourceMappingURL=modal-context.js.map