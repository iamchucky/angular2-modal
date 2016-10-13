"use strict";
var core_1 = require('@angular/core');
var dialog_ref_1 = require('../models/dialog-ref');
var UnsupportedDropInError = (function (_super) {
    __extends(UnsupportedDropInError, _super);
    function UnsupportedDropInError(dropInName) {
        _super.call(this);
        this.message = "Unsupported Drop-In " + dropInName;
    }
    return UnsupportedDropInError;
}(Error));
exports.UnsupportedDropInError = UnsupportedDropInError;
var Modal = (function () {
    function Modal(overlay) {
        this.overlay = overlay;
    }
    Modal.prototype.alert = function () {
        throw new UnsupportedDropInError('alert');
    };
    Modal.prototype.prompt = function () {
        throw new UnsupportedDropInError('prompt');
    };
    Modal.prototype.confirm = function () {
        throw new UnsupportedDropInError('confirm');
    };
    /**
     * Opens a modal window inside an existing component.
     * @param content The content to display, either string, template ref or a component.
     * @param config Additional settings.
     * @returns {Promise<DialogRef>}
     */
    Modal.prototype.open = function (content, config) {
        config = config || {};
        try {
            var dialogs = this.overlay.open(config, this.constructor);
            if (dialogs.length > 1) {
                console.warn("Attempt to open more then 1 overlay detected.\n        Multiple modal copies are not supported at the moment, \n        only the first viewContainer will display.");
            }
            // TODO:  Currently supporting 1 view container, hence working on dialogs[0].
            //        upgrade to multiple containers.
            return Promise.resolve(this.create(dialogs[0], content, config.bindings));
        }
        catch (e) {
            return Promise.reject(e);
        }
    };
    Modal.prototype.createBackdrop = function (dialogRef, BackdropComponent) {
        var b = core_1.ReflectiveInjector.resolve([{ provide: dialog_ref_1.DialogRef, useValue: dialogRef }]);
        return dialogRef.overlayRef.instance.addComponent(BackdropComponent, b);
    };
    Modal.prototype.createContainer = function (dialogRef, ContainerComponent, content, bindings) {
        var b = core_1.ReflectiveInjector.resolve([{ provide: dialog_ref_1.DialogRef, useValue: dialogRef }])
            .concat(bindings || []);
        var nodes = dialogRef.overlayRef.instance.getProjectables(content, b);
        return dialogRef.overlayRef.instance.addComponent(ContainerComponent, b, nodes);
    };
    /**
     * A helper function for derived classes to create backdrop & container
     * @param dialogRef
     * @param backdrop
     * @param container
     * @returns { backdropRef: ComponentRef<B>, containerRef: ComponentRef<C> }
     *
     * @deprecated use createBackdrop and createContainer instead
     */
    Modal.prototype.createModal = function (dialogRef, backdrop, container) {
        var b = core_1.ReflectiveInjector.resolve([{ provide: dialog_ref_1.DialogRef, useValue: dialogRef }]);
        return {
            backdropRef: dialogRef.overlayRef.instance.addComponent(backdrop, b),
            containerRef: dialogRef.overlayRef.instance.addComponent(container, b)
        };
    };
    return Modal;
}());
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map