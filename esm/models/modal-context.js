"use strict";
var core_1 = require('@angular/core');
var utils_1 = require('./../framework/utils');
var overlay_context_1 = require('./overlay-context');
exports.DEFAULT_VALUES = {};
var DEFAULT_SETTERS = [
    'message'
];
var ModalContext = (function (_super) {
    __extends(ModalContext, _super);
    function ModalContext() {
        _super.apply(this, arguments);
    }
    return ModalContext;
}(overlay_context_1.OverlayContext));
exports.ModalContext = ModalContext;
/**
 * A core context builder for a modal window instance, used to define the context upon
 * a modal choose it's behaviour.
 */
var ModalContextBuilder = (function (_super) {
    __extends(ModalContextBuilder, _super);
    function ModalContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        _super.call(this, utils_1.extend(exports.DEFAULT_VALUES, defaultValues || {}), utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType);
    }
    ModalContextBuilder = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object, Array, Function])
    ], ModalContextBuilder);
    return ModalContextBuilder;
}(overlay_context_1.OverlayContextBuilder));
exports.ModalContextBuilder = ModalContextBuilder;
//# sourceMappingURL=modal-context.js.map