"use strict";
var angular2_modal_1 = require('../../../../../components/angular2-modal');
var dialog_form_modal_1 = require('../dialog-form-modal');
var dialog_preset_1 = require('./dialog-preset');
var DEFAULT_VALUES = {
    component: dialog_form_modal_1.DialogFormModal,
    content: dialog_form_modal_1.FormDropIn,
    okBtn: 'OK',
    cancelBtn: 'Cancel'
};
var DEFAULT_SETTERS = [
    'okBtn',
    'cancelBtn',
    'placeholder'
];
/**
 * Data definition
 */
var DropInPreset = (function (_super) {
    __extends(DropInPreset, _super);
    function DropInPreset() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(DropInPreset.prototype, "showInput", {
        get: function () {
            return this.dropInType === angular2_modal_1.DROP_IN_TYPE.prompt;
        },
        enumerable: true,
        configurable: true
    });
    return DropInPreset;
}(dialog_preset_1.DialogPreset));
exports.DropInPreset = DropInPreset;
/**
 * A Preset representing all 3 drop ins (alert, prompt, confirm)
 */
var DropInPresetBuilder = (function (_super) {
    __extends(DropInPresetBuilder, _super);
    function DropInPresetBuilder(modal, dropInType, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        _super.call(this, modal, angular2_modal_1.extend(angular2_modal_1.extend({ modal: modal, dropInType: dropInType }, DEFAULT_VALUES), defaultValues || {}), DEFAULT_SETTERS, DropInPreset);
    }
    DropInPresetBuilder.prototype.$$beforeOpen = function (config) {
        if (config.okBtn) {
            this.addOkButton(config.okBtn);
        }
        switch (config.dropInType) {
            case angular2_modal_1.DROP_IN_TYPE.prompt:
                config.defaultResult = undefined;
            case angular2_modal_1.DROP_IN_TYPE.confirm:
                if (config.cancelBtn) {
                    this.addCancelButton(config.cancelBtn);
                }
                break;
        }
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return DropInPresetBuilder;
}(dialog_preset_1.DialogPresetBuilder));
exports.DropInPresetBuilder = DropInPresetBuilder;
//# sourceMappingURL=dropin-preset.js.map