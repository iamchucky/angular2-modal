"use strict";
require('rxjs/add/operator/combineLatest');
var core_1 = require('@angular/core');
var angular2_modal_1 = require('../../../../components/angular2-modal');
var modal_container_component_1 = require('./modal-container.component');
var one_button_preset_1 = require('./../bootstrap/presets/one-button-preset');
var two_button_preset_1 = require('./../bootstrap/presets/two-button-preset');
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(overlay) {
        _super.call(this, overlay);
    }
    Modal.prototype.alert = function () {
        return new one_button_preset_1.OneButtonPresetBuilder(this, { isBlocking: false });
    };
    Modal.prototype.prompt = function () {
        return new two_button_preset_1.PromptPresetBuilder(this, { isBlocking: true, keyboard: null });
    };
    Modal.prototype.confirm = function () {
        return new two_button_preset_1.TwoButtonPresetBuilder(this, { isBlocking: true, keyboard: null });
    };
    Modal.prototype.create = function (dialogRef, content, bindings) {
        var _this = this;
        var backdropRef = this.createBackdrop(dialogRef, angular2_modal_1.CSSBackdrop);
        var containerRef = this.createContainer(dialogRef, modal_container_component_1.BSModalContainer, content, bindings);
        var overlay = dialogRef.overlayRef.instance;
        var backdrop = backdropRef.instance;
        var container = containerRef.instance;
        dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();
        // add body class if this is the only dialog in the stack
        if (!document.body.classList.contains('modal-open')) {
            document.body.classList.add('modal-open');
        }
        if (dialogRef.inElement) {
            backdrop.setStyle('position', 'absolute');
        }
        backdrop.addClass('modal-backdrop fade', true);
        backdrop.addClass('in');
        container.addClass('in');
        if (containerRef.location.nativeElement) {
            containerRef.location.nativeElement.focus();
        }
        overlay.beforeDestroy(function () {
            var completer = new angular2_modal_1.PromiseCompleter();
            backdrop.removeClass('in');
            container.removeClass('in');
            backdrop.myAnimationEnd$()
                .combineLatest(container.myAnimationEnd$(), function (s1, s2) { return [s1, s2]; })
                .subscribe(function (sources) {
                _this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('modal-open');
                completer.resolve();
            });
            return completer.promise;
        });
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