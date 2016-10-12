"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
    CSSDialogContainer.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'css-dialog-container',
                    host: {
                        'tabindex': '-1',
                        'role': 'dialog'
                    },
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    CSSDialogContainer.ctorParameters = [
        { type: dialog_ref_1.DialogRef, },
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
    ];
    return CSSDialogContainer;
}(base_dynamic_component_1.BaseDynamicComponent));
exports.CSSDialogContainer = CSSDialogContainer;
//# sourceMappingURL=css-dialog-container.js.map