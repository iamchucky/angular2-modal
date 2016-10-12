(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (factory());
}(this, (function () {
    'use strict';
    /**
     * angular2-modal - Angular2 Modal (dialog) window.
     * @version v2.0.1
     * @link https://github.com/shlomiassaf/angular2-modal
     * @license MIT
     */
    var modal_context_1 = require('./modal-context');
    exports.BSModalContext = modal_context_1.BSModalContext;
    exports.BSModalContextBuilder = modal_context_1.BSModalContextBuilder;
    var modal_container_component_1 = require('./modal-container.component');
    exports.BSModalContainer = modal_container_component_1.BSModalContainer;
    var message_modal_component_1 = require('./message-modal.component');
    exports.BSMessageModal = message_modal_component_1.BSMessageModal;
    exports.BSMessageModalTitle = message_modal_component_1.BSMessageModalTitle;
    exports.BSMessageModalBody = message_modal_component_1.BSMessageModalBody;
    exports.BSModalFooter = message_modal_component_1.BSModalFooter;
    var message_modal_preset_1 = require('./presets/message-modal-preset');
    exports.MessageModalPresetBuilder = message_modal_preset_1.MessageModalPresetBuilder;
    var angular2_modal_1 = require('../../../../components/angular2-modal');
    exports.ModalOpenContext = angular2_modal_1.ModalOpenContext;
    exports.ModalOpenContextBuilder = angular2_modal_1.ModalOpenContextBuilder;
    var one_button_preset_1 = require('./presets/one-button-preset');
    exports.OneButtonPresetBuilder = one_button_preset_1.OneButtonPresetBuilder;
    var two_button_preset_1 = require('./presets/two-button-preset');
    exports.TwoButtonPresetBuilder = two_button_preset_1.TwoButtonPresetBuilder;
    exports.PromptPresetBuilder = two_button_preset_1.PromptPresetBuilder;
    var modal_1 = require('./modal');
    exports.Modal = modal_1.Modal;
    var bootstrap_module_1 = require('./bootstrap.module');
    exports.BootstrapModalModule = bootstrap_module_1.BootstrapModalModule;
    exports.providers = bootstrap_module_1.providers;
})));
