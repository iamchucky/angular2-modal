/**
 * angular2-modal - Angular2 Modal (dialog) window.
 * @version v2.0.1
 * @link https://github.com/shlomiassaf/angular2-modal
 * @license MIT
 */
"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var angular2_modal_1 = require('../../../../components/angular2-modal');
var modal_1 = require('./modal');
var modal_container_component_1 = require('./modal-container.component');
var message_modal_component_1 = require('./message-modal.component');
exports.providers = [
    { provide: angular2_modal_1.Modal, useClass: modal_1.Modal },
    { provide: modal_1.Modal, useClass: modal_1.Modal }
];
var BootstrapModalModule = (function () {
    function BootstrapModalModule() {
    }
    BootstrapModalModule.getProviders = function () {
        return exports.providers;
    };
    BootstrapModalModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [angular2_modal_1.ModalModule, common_1.CommonModule],
                    declarations: [
                        message_modal_component_1.BSModalFooter,
                        message_modal_component_1.BSMessageModalTitle,
                        message_modal_component_1.BSMessageModalBody,
                        message_modal_component_1.BSMessageModal,
                        modal_container_component_1.BSModalContainer
                    ],
                    providers: exports.providers,
                    entryComponents: [
                        modal_container_component_1.BSModalContainer,
                        message_modal_component_1.BSMessageModal
                    ]
                },] },
    ];
    /** @nocollapse */
    BootstrapModalModule.ctorParameters = [];
    return BootstrapModalModule;
}());
exports.BootstrapModalModule = BootstrapModalModule;
//# sourceMappingURL=bootstrap.module.js.map