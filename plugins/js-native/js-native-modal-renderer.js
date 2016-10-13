"use strict";
var core_1 = require('@angular/core');
var angular2_modal_1 = require('../../../../components/angular2-modal');
var JSNativeModalRenderer = (function () {
    function JSNativeModalRenderer() {
    }
    JSNativeModalRenderer.prototype.render = function (dialog, vcRef) {
        var result;
        switch (dialog.context.dialogType) {
            case angular2_modal_1.DROP_IN_TYPE.alert:
                window.alert(dialog.context.message);
                result = true;
                break;
            case angular2_modal_1.DROP_IN_TYPE.prompt:
                result = window.prompt(dialog.context.message, dialog.context.promptDefault);
                break;
            case angular2_modal_1.DROP_IN_TYPE.confirm:
                result = window.confirm(dialog.context.message);
                break;
        }
        dialog.destroy = function () {
        };
        if (result === false) {
            dialog.dismiss();
        }
        else {
            dialog.close(result);
        }
        // we need to return ComponentRef<ModalOverlay> but a native dialog does'nt have that
        // so we resolve an empty promise, the user of this renderer should expect that.
        return {};
    };
    JSNativeModalRenderer = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JSNativeModalRenderer);
    return JSNativeModalRenderer;
}());
exports.JSNativeModalRenderer = JSNativeModalRenderer;
//# sourceMappingURL=js-native-modal-renderer.js.map