"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    ModalContextBuilder.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ModalContextBuilder.ctorParameters = [
        null,
        { type: Array, },
        null,
    ];
    return ModalContextBuilder;
}(overlay_context_1.OverlayContextBuilder));
exports.ModalContextBuilder = ModalContextBuilder;
//# sourceMappingURL=modal-context.js.map