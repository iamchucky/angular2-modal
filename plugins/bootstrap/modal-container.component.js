/**
 * angular2-modal - Angular2 Modal (dialog) window.
 * @version v2.0.1
 * @link https://github.com/shlomiassaf/angular2-modal
 * @license MIT
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var angular2_modal_1 = require('../../../../components/angular2-modal');
var BSModalContainer = (function (_super) {
    __extends(BSModalContainer, _super);
    function BSModalContainer(dialog, el, renderer) {
        _super.call(this, el, renderer);
        this.dialog = dialog;
        this.activateAnimationListener();
    }
    BSModalContainer.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'bs-modal-container',
                    host: {
                        'tabindex': '-1',
                        'role': 'dialog',
                        'class': 'modal fade',
                        'style': 'position: absolute; display: block'
                    },
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div [ngClass]=\"dialog.context.dialogClass\" \n      [class.modal-lg]=\"dialog.context.size == 'lg'\"\n      [class.modal-sm]=\"dialog.context.size == 'sm'\">\n  <div class=\"modal-content\" style=\"display:block\" role=\"document\" overlayDialogBoundary>\n    <ng-content></ng-content>\n  </div>    \n</div>"
                },] },
    ];
    /** @nocollapse */
    BSModalContainer.ctorParameters = [
        { type: angular2_modal_1.DialogRef, },
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
    ];
    return BSModalContainer;
}(angular2_modal_1.BaseDynamicComponent));
exports.BSModalContainer = BSModalContainer;
//# sourceMappingURL=modal-container.component.js.map