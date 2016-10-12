/**
 * angular2-modal - Angular2 Modal (dialog) window.
 * @version v2.0.1
 * @link https://github.com/shlomiassaf/angular2-modal
 * @license MIT
 */
"use strict";
var core_1 = require('@angular/core');
var angular2_modal_1 = require('../../../../components/angular2-modal');
/**
 * A Dialog is a
 */
var VEXDialogButtons = (function () {
    function VEXDialogButtons() {
        /**
         * Emitted when a button was clicked
         * @type {EventEmitter<VEXButtonClickEvent>}
         */
        this.onButtonClick = new core_1.EventEmitter();
    }
    VEXDialogButtons.prototype.onClick = function (btn, $event) {
        $event.stopPropagation();
        this.onButtonClick.emit({ btn: btn, $event: $event });
    };
    VEXDialogButtons.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vex-dialog-buttons',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"vex-dialog-buttons\">\n    <button type=\"button\" \n         *ngFor=\"let btn of buttons;\"\n         [class]=\"btn.cssClass\"\n         (click)=\"onClick(btn, $event)\">{{btn.caption}}</button>\n</div>"
                },] },
    ];
    /** @nocollapse */
    VEXDialogButtons.ctorParameters = [];
    VEXDialogButtons.propDecorators = {
        'buttons': [{ type: core_1.Input },],
        'onButtonClick': [{ type: core_1.Output },],
    };
    return VEXDialogButtons;
}());
exports.VEXDialogButtons = VEXDialogButtons;
/**
 * A Dialog with customized buttons wrapped in a form.
 *
 */
var DialogFormModal = (function () {
    function DialogFormModal(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
    }
    DialogFormModal.prototype.onButtonClick = function ($event) {
        $event.btn.onClick(this, $event.$event);
    };
    DialogFormModal.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'modal-dialog',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<form class=\"vex-dialog-form\">\n    <template [swapCmp]=\"context.content\"></template>\n    <vex-dialog-buttons [buttons]=\"context.buttons\"\n                        (onButtonClick)=\"onButtonClick($event)\"></vex-dialog-buttons>\n</form>"
                },] },
    ];
    /** @nocollapse */
    DialogFormModal.ctorParameters = [
        { type: angular2_modal_1.DialogRef, },
    ];
    return DialogFormModal;
}());
exports.DialogFormModal = DialogFormModal;
var FormDropIn = (function () {
    function FormDropIn(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
    }
    FormDropIn.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'drop-in-dialog',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"vex-dialog-message\">{{context.message}}</div>\n <div *ngIf=\"context.showInput\" class=\"vex-dialog-input\">\n   <input #input\n          autofocus\n          name=\"vex\" \n          type=\"text\" \n          class=\"vex-dialog-prompt-input\"\n           (change)=\"context.defaultResult = input.value\" \n          placeholder=\"{{context.placeholder}}\">\n </div>\n <div *ngIf=\"context.showCloseButton\" \n      [class]=\"context.closeClassName\"\n      (click)=\"dialog.dismiss()\"></div>"
                },] },
    ];
    /** @nocollapse */
    FormDropIn.ctorParameters = [
        { type: angular2_modal_1.DialogRef, },
    ];
    return FormDropIn;
}());
exports.FormDropIn = FormDropIn;
//# sourceMappingURL=dialog-form-modal.js.map