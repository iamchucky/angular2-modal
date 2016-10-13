"use strict";
var core_1 = require('@angular/core');
var createComponent_1 = require('../framework/createComponent');
var dialog_ref_1 = require('../models/dialog-ref');
var index_1 = require('../overlay/index');
var DOMOverlayRenderer = (function () {
    function DOMOverlayRenderer() {
    }
    DOMOverlayRenderer.prototype.render = function (dialog, vcRef, injector) {
        var bindings = core_1.ReflectiveInjector.resolve([
            { provide: dialog_ref_1.DialogRef, useValue: dialog }
        ]);
        var cmpRef = createComponent_1.createComponent({
            component: index_1.ModalOverlay,
            vcRef: vcRef,
            injector: injector,
            bindings: bindings
        });
        if (dialog.inElement) {
            vcRef.element.nativeElement.appendChild(cmpRef.location.nativeElement);
        }
        else {
            document.body.appendChild(cmpRef.location.nativeElement);
        }
        return cmpRef;
    };
    DOMOverlayRenderer = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DOMOverlayRenderer);
    return DOMOverlayRenderer;
}());
exports.DOMOverlayRenderer = DOMOverlayRenderer;
//# sourceMappingURL=dom-modal-renderer.js.map