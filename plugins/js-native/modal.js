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
var core_1 = require('@angular/core');
var angular2_modal_1 = require('../../../../components/angular2-modal');
var js_native_preset_1 = require('./presets/js-native-preset');
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(overlay) {
        _super.call(this, overlay);
    }
    Modal.prototype.alert = function () {
        return new js_native_preset_1.JSNativePresetBuilder(this, angular2_modal_1.DROP_IN_TYPE.alert);
    };
    Modal.prototype.prompt = function () {
        return new js_native_preset_1.JSNativePresetBuilder(this, angular2_modal_1.DROP_IN_TYPE.prompt);
    };
    Modal.prototype.confirm = function () {
        return new js_native_preset_1.JSNativePresetBuilder(this, angular2_modal_1.DROP_IN_TYPE.confirm);
    };
    Modal.prototype.create = function (dialogRef, type, bindings) {
        return dialogRef;
    };
    Modal.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Modal.ctorParameters = [
        { type: angular2_modal_1.Overlay, },
    ];
    return Modal;
}(angular2_modal_1.Modal));
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map