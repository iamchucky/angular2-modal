"use strict";
var angular2_modal_1 = require('../../../../components/angular2-modal');
var DEFAULT_VALUES = {
    dialogClass: 'modal-dialog',
    showClose: false
};
var DEFAULT_SETTERS = [
    'dialogClass',
    'size',
    'showClose'
];
var BSModalContext = (function (_super) {
    __extends(BSModalContext, _super);
    function BSModalContext() {
        _super.apply(this, arguments);
    }
    BSModalContext.prototype.normalize = function () {
        if (!this.dialogClass) {
            this.dialogClass = DEFAULT_VALUES.dialogClass;
        }
        _super.prototype.normalize.call(this);
    };
    return BSModalContext;
}(angular2_modal_1.ModalOpenContext));
exports.BSModalContext = BSModalContext;
var BSModalContextBuilder = (function (_super) {
    __extends(BSModalContextBuilder, _super);
    function BSModalContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        _super.call(this, angular2_modal_1.extend(DEFAULT_VALUES, defaultValues || {}), angular2_modal_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType || BSModalContext // https://github.com/Microsoft/TypeScript/issues/7234
        );
    }
    return BSModalContextBuilder;
}(angular2_modal_1.ModalOpenContextBuilder));
exports.BSModalContextBuilder = BSModalContextBuilder;
//# sourceMappingURL=modal-context.js.map