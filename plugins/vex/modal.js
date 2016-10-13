"use strict";
require('rxjs/add/operator/first');
require('rxjs/add/operator/combineLatest');
var core_1 = require('@angular/core');
var angular2_modal_1 = require('../../../../components/angular2-modal');
var dropin_preset_1 = require('./presets/dropin-preset');
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(overlay) {
        _super.call(this, overlay);
    }
    Modal.prototype.alert = function () {
        return new dropin_preset_1.DropInPresetBuilder(this, angular2_modal_1.DROP_IN_TYPE.alert, { isBlocking: false });
    };
    Modal.prototype.prompt = function () {
        return new dropin_preset_1.DropInPresetBuilder(this, angular2_modal_1.DROP_IN_TYPE.prompt, {
            isBlocking: true,
            keyboard: null
        });
    };
    Modal.prototype.confirm = function () {
        return new dropin_preset_1.DropInPresetBuilder(this, angular2_modal_1.DROP_IN_TYPE.confirm, {
            isBlocking: true,
            keyboard: null
        });
    };
    Modal.prototype.create = function (dialogRef, content, bindings) {
        var _this = this;
        var backdropRef = this.createBackdrop(dialogRef, angular2_modal_1.CSSBackdrop);
        var containerRef = this.createContainer(dialogRef, angular2_modal_1.CSSDialogContainer, content, bindings);
        var overlay = dialogRef.overlayRef.instance;
        var backdrop = backdropRef.instance;
        var container = containerRef.instance;
        dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();
        // add body class if this is the only dialog in the stack
        if (!document.body.classList.contains('vex-open')) {
            document.body.classList.add('vex-open');
        }
        overlay.addClass("vex vex-theme-" + dialogRef.context.className);
        backdrop.addClass('vex-overlay');
        container.addClass(dialogRef.context.contentClassName);
        container.setStyle('display', 'block');
        if (dialogRef.inElement) {
            overlay.setStyle('padding', '0');
            container.setStyle('margin-top', '20px');
        }
        if (containerRef.location.nativeElement) {
            containerRef.location.nativeElement.focus();
        }
        if (dialogRef.context.className === 'bottom-right-corner') {
            overlay.setStyle('overflow-y', 'hidden');
            container.setStyle('position', 'absolute');
        }
        overlay.beforeDestroy(function () {
            overlay.addClass('vex-closing');
            var completer = new angular2_modal_1.PromiseCompleter();
            var animationEnd$ = container.myAnimationEnd$();
            if (dialogRef.context.className !== 'bottom-right-corner') {
                animationEnd$ = animationEnd$.combineLatest(backdrop.myAnimationEnd$(), function (s1, s2) { return [s1, s2]; });
            }
            animationEnd$.subscribe(function (sources) {
                _this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('vex-open');
                completer.resolve();
            });
            return completer.promise;
        });
        overlay.setClickBoundary(containerRef.location.nativeElement);
        return dialogRef;
    };
    Modal = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angular2_modal_1.Overlay])
    ], Modal);
    return Modal;
}(angular2_modal_1.Modal));
exports.Modal = Modal;
//# sourceMappingURL=modal.js.map