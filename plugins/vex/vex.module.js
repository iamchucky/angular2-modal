"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var angular2_modal_1 = require('../../../../components/angular2-modal');
var modal_1 = require('./modal');
var dialog_form_modal_1 = require('./dialog-form-modal');
exports.providers = [
    { provide: angular2_modal_1.Modal, useClass: modal_1.Modal },
    { provide: modal_1.Modal, useClass: modal_1.Modal }
];
var VexModalModule = (function () {
    function VexModalModule() {
    }
    VexModalModule.getProviders = function () {
        return exports.providers;
    };
    VexModalModule = __decorate([
        core_1.NgModule({
            imports: [angular2_modal_1.ModalModule, common_1.CommonModule],
            declarations: [
                dialog_form_modal_1.VEXDialogButtons,
                dialog_form_modal_1.FormDropIn,
                dialog_form_modal_1.DialogFormModal
            ],
            providers: exports.providers,
            entryComponents: [
                dialog_form_modal_1.DialogFormModal,
                dialog_form_modal_1.FormDropIn
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], VexModalModule);
    return VexModalModule;
}());
exports.VexModalModule = VexModalModule;
//# sourceMappingURL=vex.module.js.map