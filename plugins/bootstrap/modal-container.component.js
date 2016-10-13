"use strict";
var core_1 = require('@angular/core');
var angular2_modal_1 = require('../../../../components/angular2-modal');
var BSModalContainer = (function (_super) {
    __extends(BSModalContainer, _super);
    function BSModalContainer(dialog, el, renderer) {
        _super.call(this, el, renderer);
        this.dialog = dialog;
        this.activateAnimationListener();
    }
    BSModalContainer = __decorate([
        core_1.Component({
            selector: 'bs-modal-container',
            host: {
                'tabindex': '-1',
                'role': 'dialog',
                'class': 'modal fade',
                'style': 'position: absolute; display: block'
            },
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div [ngClass]=\"dialog.context.dialogClass\" \n      [class.modal-lg]=\"dialog.context.size == 'lg'\"\n      [class.modal-sm]=\"dialog.context.size == 'sm'\">\n  <div class=\"modal-content\" style=\"display:block\" role=\"document\" overlayDialogBoundary>\n    <ng-content></ng-content>\n  </div>    \n</div>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef, core_1.ElementRef, core_1.Renderer])
    ], BSModalContainer);
    return BSModalContainer;
}(angular2_modal_1.BaseDynamicComponent));
exports.BSModalContainer = BSModalContainer;
//# sourceMappingURL=modal-container.component.js.map