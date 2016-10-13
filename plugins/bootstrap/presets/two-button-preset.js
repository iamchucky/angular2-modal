"use strict";
var angular2_modal_1 = require('../../../../../components/angular2-modal');
var message_modal_preset_1 = require('./message-modal-preset');
/** Common two button preset */
var AbstractTwoButtonPresetBuilder = (function (_super) {
    __extends(AbstractTwoButtonPresetBuilder, _super);
    function AbstractTwoButtonPresetBuilder(modal, defaultValues, initialSetters) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = []; }
        _super.call(this, angular2_modal_1.extend({
            modal: modal,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary',
            cancelBtn: 'Cancel',
            cancelBtnClass: 'btn btn-default'
        }, defaultValues || {}), angular2_modal_1.arrayUnion([
            'okBtn',
            'okBtnClass',
            'cancelBtn',
            'cancelBtnClass',
        ], initialSetters));
    }
    AbstractTwoButtonPresetBuilder.prototype.$$beforeOpen = function (config) {
        this.addButton(config.cancelBtnClass, config.cancelBtn, function (cmp, $event) { return cmp.dialog.dismiss(); });
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return AbstractTwoButtonPresetBuilder;
}(message_modal_preset_1.MessageModalPresetBuilder));
exports.AbstractTwoButtonPresetBuilder = AbstractTwoButtonPresetBuilder;
/**
 * A Preset for a classic 2 button modal window.
 */
var TwoButtonPresetBuilder = (function (_super) {
    __extends(TwoButtonPresetBuilder, _super);
    function TwoButtonPresetBuilder(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        _super.call(this, modal, defaultValues);
    }
    TwoButtonPresetBuilder.prototype.$$beforeOpen = function (config) {
        this.addButton(config.okBtnClass, config.okBtn, function (cmp, $event) { return cmp.dialog.close(true); });
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return TwoButtonPresetBuilder;
}(AbstractTwoButtonPresetBuilder));
exports.TwoButtonPresetBuilder = TwoButtonPresetBuilder;
var PromptPresetBuilder = (function (_super) {
    __extends(PromptPresetBuilder, _super);
    function PromptPresetBuilder(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        _super.call(this, modal, angular2_modal_1.extend({ showInput: true, defaultValue: '' }, defaultValues || {}), ['placeholder', 'defaultValue']);
    }
    PromptPresetBuilder.prototype.$$beforeOpen = function (config) {
        this.addButton(config.okBtnClass, config.okBtn, function (cmp, $event) {
            return cmp.dialog.close(cmp.dialog.context.defaultValue);
        });
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return PromptPresetBuilder;
}(AbstractTwoButtonPresetBuilder));
exports.PromptPresetBuilder = PromptPresetBuilder;
//# sourceMappingURL=two-button-preset.js.map