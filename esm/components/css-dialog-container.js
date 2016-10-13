"use strict";
var core_1 = require('@angular/core');
var base_dynamic_component_1 = require('./base-dynamic-component');
var dialog_ref_1 = require('../models/dialog-ref');
/**
 * A component that acts as a top level container for an open modal window.
 */
var CSSDialogContainer = (function (_super) {
    __extends(CSSDialogContainer, _super);
    function CSSDialogContainer(dialog, el, renderer) {
        _super.call(this, el, renderer);
        this.dialog = dialog;
        this.activateAnimationListener();
    }
    CSSDialogContainer = __decorate([
        core_1.Component({
            selector: 'css-dialog-container',
            host: {
                'tabindex': '-1',
                'role': 'dialog'
            },
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<ng-content></ng-content>"
        }), 
        __metadata('design:paramtypes', [dialog_ref_1.DialogRef, core_1.ElementRef, core_1.Renderer])
    ], CSSDialogContainer);
    return CSSDialogContainer;
}(base_dynamic_component_1.BaseDynamicComponent));
exports.CSSDialogContainer = CSSDialogContainer;
//# sourceMappingURL=css-dialog-container.js.map