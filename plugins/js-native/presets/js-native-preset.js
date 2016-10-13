"use strict";
var modal_1 = require('../modal');
var modal_context_1 = require('../modal-context');
var js_native_modal_renderer_1 = require('../js-native-modal-renderer');
var JSNativePresetBuilder = (function (_super) {
    __extends(JSNativePresetBuilder, _super);
    function JSNativePresetBuilder(modal, dialogType) {
        _super.call(this, { modal: modal, dialogType: dialogType });
    }
    /**
     * Hook to alter config and return bindings.
     * @param config
     */
    JSNativePresetBuilder.prototype.$$beforeOpen = function (config) {
        return [];
    };
    /**
     * Open a modal window based on the configuration of this config instance.
     * @param viewContainer If set opens the modal inside the supplied viewContainer
     * @returns Promise<DialogRef>
     */
    JSNativePresetBuilder.prototype.open = function (viewContainer) {
        var context = this.toJSON();
        if (!(context.modal instanceof modal_1.Modal)) {
            return Promise.reject(new Error('Configuration Error: modal service not set.'));
        }
        var overlayConfig = {
            context: context,
            renderer: new js_native_modal_renderer_1.JSNativeModalRenderer(),
            viewContainer: viewContainer,
            bindings: typeof this.$$beforeOpen === 'function' && this.$$beforeOpen(context)
        };
        return context.modal.open(context.component, overlayConfig);
    };
    return JSNativePresetBuilder;
}(modal_context_1.JSNativeModalContextBuilder));
exports.JSNativePresetBuilder = JSNativePresetBuilder;
//# sourceMappingURL=js-native-preset.js.map