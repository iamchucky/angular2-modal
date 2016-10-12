"use strict";
var core_1 = require('@angular/core');
var dialog_ref_1 = require('../models/dialog-ref');
var vc_ref_store_1 = require('../models/vc-ref-store');
var overlay_service_1 = require("./overlay.service");
/**
 * A directive use to signal the overlay that the host of this directive
 * is a dialog boundary, i.e: over click outside of the element should close the modal
 * (if non blocking)
 */
var OverlayDialogBoundary = (function () {
    function OverlayDialogBoundary(el, dialogRef) {
        if (dialogRef && el.nativeElement) {
            dialogRef.overlayRef.instance.setClickBoundary(el.nativeElement);
        }
    }
    OverlayDialogBoundary.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[overlayDialogBoundary]'
                },] },
    ];
    /** @nocollapse */
    OverlayDialogBoundary.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: dialog_ref_1.DialogRef, },
    ];
    return OverlayDialogBoundary;
}());
exports.OverlayDialogBoundary = OverlayDialogBoundary;
var OverlayTarget = (function () {
    function OverlayTarget(vcRef) {
        this.vcRef = vcRef;
    }
    Object.defineProperty(OverlayTarget.prototype, "targetKey", {
        set: function (value) {
            this._targetKey = value;
            if (value) {
                vc_ref_store_1.vcRefStore.setVCRef(value, this.vcRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    OverlayTarget.prototype.ngOnDestroy = function () {
        if (this._targetKey) {
            vc_ref_store_1.vcRefStore.delVCRef(this._targetKey, this.vcRef);
        }
    };
    OverlayTarget.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[overlayTarget]'
                },] },
    ];
    /** @nocollapse */
    OverlayTarget.ctorParameters = [
        { type: core_1.ViewContainerRef, },
    ];
    OverlayTarget.propDecorators = {
        'targetKey': [{ type: core_1.Input, args: ['overlayTarget',] },],
    };
    return OverlayTarget;
}());
exports.OverlayTarget = OverlayTarget;
var noop = function () { };
var DefaultOverlayTarget = (function () {
    function DefaultOverlayTarget(overlay, vcRef) {
        this.overlay = overlay;
        overlay.defaultViewContainer = vcRef;
    }
    DefaultOverlayTarget.prototype.ngOnDestroy = function () {
        this.overlay.defaultViewContainer = undefined;
    };
    DefaultOverlayTarget.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[defaultOverlayTarget]'
                },] },
    ];
    /** @nocollapse */
    DefaultOverlayTarget.ctorParameters = [
        { type: overlay_service_1.Overlay, },
        { type: core_1.ViewContainerRef, },
    ];
    return DefaultOverlayTarget;
}());
exports.DefaultOverlayTarget = DefaultOverlayTarget;
//# sourceMappingURL=overlay.directives.js.map