"use strict";
var angular2_modal_1 = require('../../../../../components/angular2-modal');
var message_modal_preset_1 = require('./message-modal-preset');
/**
 * A Preset for a classic 1 button modal window.
 */
var OneButtonPresetBuilder = (function (_super) {
    __extends(OneButtonPresetBuilder, _super);
    function OneButtonPresetBuilder(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        _super.call(this, angular2_modal_1.extend({
            modal: modal,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary'
        }, defaultValues || {}), [
            'okBtn',
            'okBtnClass'
        ]);
    }
    OneButtonPresetBuilder.prototype.$$beforeOpen = function (config) {
        this.addButton(config.okBtnClass, config.okBtn, function (cmp, $event) { return cmp.dialog.close(true); });
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return OneButtonPresetBuilder;
}(message_modal_preset_1.MessageModalPresetBuilder));
exports.OneButtonPresetBuilder = OneButtonPresetBuilder;
//# sourceMappingURL=one-button-preset.js.map