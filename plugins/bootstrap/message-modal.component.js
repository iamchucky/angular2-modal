"use strict";
var core_1 = require('@angular/core');
var angular2_modal_1 = require('../../../../components/angular2-modal');
var BSMessageModalTitle = (function () {
    function BSMessageModalTitle(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
    }
    Object.defineProperty(BSMessageModalTitle.prototype, "titleHtml", {
        get: function () {
            return this.context.titleHtml ? 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    BSMessageModalTitle = __decorate([
        core_1.Component({
            selector: 'modal-title',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div [ngClass]=\"context.headerClass\" [ngSwitch]=\"titleHtml\">\n      <button *ngIf=\"context.showClose\" type=\"button\" class=\"close\" \n              aria-label=\"Close\" (click)=\"dialog.dismiss()\">\n          <span aria-hidden=\"true\">\u00D7</span>\n      </button>\n      <div *ngSwitchCase=\"1\" [innerHtml]=\"context.titleHtml\"></div>\n      <h3 *ngSwitchDefault class=\"modal-title\">{{context.title}}</h3>\n </div>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], BSMessageModalTitle);
    return BSMessageModalTitle;
}());
exports.BSMessageModalTitle = BSMessageModalTitle;
var BSMessageModalBody = (function () {
    function BSMessageModalBody(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
    }
    BSMessageModalBody = __decorate([
        core_1.Component({
            selector: 'modal-body',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [".form-group {\n    margin-top: 10px;\n  }"],
            template: "<div [ngClass]=\"context.bodyClass\"> \n    <div [innerHtml]=\"context.message\"></div>\n      <div *ngIf=\"context.showInput\" class=\"form-group\">\n        <input autofocus #input\n            name=\"bootstrap\" \n            type=\"text\" \n            class=\"form-control\"\n            [value]=\"context.defaultValue\"\n            (change)=\"context.defaultValue = input.value\"  \n            placeholder=\"{{context.placeholder}}\">\n      </div>\n    </div>\n"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], BSMessageModalBody);
    return BSMessageModalBody;
}());
exports.BSMessageModalBody = BSMessageModalBody;
/**
 * Represents the modal footer for storing buttons.
 */
var BSModalFooter = (function () {
    function BSModalFooter(dialog) {
        this.dialog = dialog;
    }
    BSModalFooter.prototype.onClick = function (btn, $event) {
        $event.stopPropagation();
        btn.onClick(this, $event);
    };
    BSModalFooter = __decorate([
        core_1.Component({
            selector: 'modal-footer',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div [ngClass]=\"dialog.context.footerClass\">\n    <button *ngFor=\"let btn of dialog.context.buttons;\"\n            [ngClass]=\"btn.cssClass\"\n            (click)=\"onClick(btn, $event)\">{{btn.caption}}</button>\n</div>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], BSModalFooter);
    return BSModalFooter;
}());
exports.BSModalFooter = BSModalFooter;
/**
 * A Component representing a generic bootstrap modal content element.
 *
 * By configuring a MessageModalContext instance you can:
 *
 *  Header:
 *      - Set header container class (default: modal-header)
 *      - Set title text (enclosed in H3 element)
 *      - Set title html (overrides text)
 *
 *  Body:
 *      - Set body container class.  (default: modal-body)
 *      - Set body container HTML.
 *
 *  Footer:
 *      - Set footer class.  (default: modal-footer)
 *      - Set button configuration (from 0 to n)
 */
var BSMessageModal = (function () {
    function BSMessageModal(dialog) {
        this.dialog = dialog;
    }
    BSMessageModal = __decorate([
        core_1.Component({
            selector: 'modal-content',
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<modal-title></modal-title><modal-body></modal-body><modal-footer></modal-footer>"
        }), 
        __metadata('design:paramtypes', [angular2_modal_1.DialogRef])
    ], BSMessageModal);
    return BSMessageModal;
}());
exports.BSMessageModal = BSMessageModal;
//# sourceMappingURL=message-modal.component.js.map