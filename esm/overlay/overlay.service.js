"use strict";
var core_1 = require('@angular/core');
var tokens_1 = require('../models/tokens');
var dialog_ref_stack_1 = require('../models/dialog-ref-stack');
var vc_ref_store_1 = require('../models/vc-ref-store');
var dialog_ref_1 = require('../models/dialog-ref');
var _stack = new dialog_ref_stack_1.DialogRefStack();
var Overlay = (function () {
    function Overlay(_modalRenderer) {
        this._modalRenderer = _modalRenderer;
    }
    Object.defineProperty(Overlay.prototype, "stackLength", {
        get: function () {
            return _stack.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check if a given DialogRef is the top most ref in the stack.
     * TODO: distinguish between body modal vs in element modal.
     * @param dialogRef
     * @returns {boolean}
     */
    Overlay.prototype.isTopMost = function (dialogRef) {
        return _stack.indexOf(dialogRef) === _stack.length - 1;
    };
    Overlay.prototype.stackPosition = function (dialogRef) {
        return _stack.indexOf(dialogRef);
    };
    Overlay.prototype.groupStackLength = function (dialogRef) {
        return _stack.groupLength(_stack.groupOf(dialogRef));
    };
    /**
     * Creates an overlay and returns a dialog ref.
     * @param config instructions how to create the overlay
     * @param group A token to associate the new overlay with, used for reference (stacks usually)
     * @returns {DialogRef<T>[]}
     */
    Overlay.prototype.open = function (config, group) {
        var _this = this;
        var viewContainer = config.viewContainer, containers = [];
        if (typeof viewContainer === 'string') {
            containers = vc_ref_store_1.vcRefStore.getVCRef(viewContainer);
        }
        else if (Array.isArray(viewContainer)) {
            containers = viewContainer;
        }
        else if (viewContainer) {
            containers = [viewContainer];
        }
        if (!containers || !containers[0]) {
            if (!this.defaultViewContainer) {
                throw new Error('Default view container not set. Add the "defaultOverlayTarget" directive ' +
                    'to the application root component template (e.g: <span defaultOverlayTarget></span>. ' +
                    'You can also set it manually using the "Overlay" service "defaultViewContainer" property.');
            }
            containers = [this.defaultViewContainer];
        }
        return containers
            .map(function (vc) { return _this.createOverlay(config.renderer || _this._modalRenderer, vc, config, group); });
    };
    Overlay.prototype.createOverlay = function (renderer, vcRef, config, group) {
        if (config.context) {
            config.context.normalize();
        }
        var dialog = new dialog_ref_1.DialogRef(this, config.context || {});
        dialog.inElement = config.context && !!config.context.inElement;
        var cmpRef = renderer.render(dialog, vcRef, config.injector);
        Object.defineProperty(dialog, 'overlayRef', { value: cmpRef });
        _stack.pushManaged(dialog, group);
        return dialog;
    };
    Overlay.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Overlay.ctorParameters = [
        { type: tokens_1.OverlayRenderer, },
    ];
    return Overlay;
}());
exports.Overlay = Overlay;
//# sourceMappingURL=overlay.service.js.map