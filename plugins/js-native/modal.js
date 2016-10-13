"use strict";
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
    Modal = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_modal_1.Overlay])
    ], Modal);
    return Modal;
}(angular2_modal_1.Modal));
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map