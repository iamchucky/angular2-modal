"use strict";
var index_1 = require('../providers/index');
var modal_context_1 = require('./modal-context');
var utils_1 = require('../framework/utils');
var DEFAULT_SETTERS = [
    'component'
];
var ModalOpenContext = (function (_super) {
    __extends(ModalOpenContext, _super);
    function ModalOpenContext() {
        _super.apply(this, arguments);
    }
    return ModalOpenContext;
}(modal_context_1.ModalContext));
exports.ModalOpenContext = ModalOpenContext;
/**
 * A Modal Context that knows about the modal service, and so can open a modal window on demand.
 * Use the fluent API to configure the preset and then invoke the 'open' method to open a modal
 * based on the context.
 */
var ModalOpenContextBuilder = (function (_super) {
    __extends(ModalOpenContextBuilder, _super);
    function ModalOpenContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        _super.call(this, defaultValues || {}, utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType);
    }
    /**
     * Hook to alter config and return bindings.
     * @param config
     */
    ModalOpenContextBuilder.prototype.$$beforeOpen = function (config) {
        return [];
    };
    /**
     * Open a modal window based on the configuration of this config instance.
     * @param viewContainer If set opens the modal inside the supplied viewContainer
     * @returns Promise<DialogRef>
     */
    ModalOpenContextBuilder.prototype.open = function (viewContainer) {
        var context = this.toJSON();
        if (!(context.modal instanceof index_1.Modal)) {
            return Promise.reject(new Error('Configuration Error: modal service not set.'));
        }
        var overlayConfig = {
            context: context,
            viewContainer: viewContainer,
            bindings: typeof this.$$beforeOpen === 'function' && this.$$beforeOpen(context)
        };
        return context.modal.open(context.component, overlayConfig);
    };
    return ModalOpenContextBuilder;
}(modal_context_1.ModalContextBuilder));
exports.ModalOpenContextBuilder = ModalOpenContextBuilder;
//# sourceMappingURL=modal-open-context.js.map