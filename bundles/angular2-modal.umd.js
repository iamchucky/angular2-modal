(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (factory());
}(this, (function () {
    'use strict';
    function __export(m) {
        for (var p in m)
            if (!exports.hasOwnProperty(p))
                exports[p] = m[p];
    }
    __export(require('./framework/fluent-assign'));
    var utils_1 = require('./framework/utils');
    exports.extend = utils_1.extend;
    exports.arrayUnion = utils_1.arrayUnion;
    exports.PromiseCompleter = utils_1.PromiseCompleter;
    var createComponent_1 = require('./framework/createComponent');
    exports.createComponent = createComponent_1.createComponent;
    __export(require('./models/errors'));
    var dialog_ref_1 = require('./models/dialog-ref');
    exports.DialogRef = dialog_ref_1.DialogRef;
    var tokens_1 = require('./models/tokens');
    exports.DROP_IN_TYPE = tokens_1.DROP_IN_TYPE;
    exports.OverlayRenderer = tokens_1.OverlayRenderer;
    var index_1 = require('./providers/index');
    exports.Modal = index_1.Modal;
    exports.DOMOverlayRenderer = index_1.DOMOverlayRenderer;
    var overlay_context_1 = require('./models/overlay-context');
    exports.overlayConfigFactory = overlay_context_1.overlayConfigFactory;
    exports.OverlayContext = overlay_context_1.OverlayContext;
    exports.OverlayContextBuilder = overlay_context_1.OverlayContextBuilder;
    var index_2 = require('./overlay/index');
    exports.Overlay = index_2.Overlay;
    exports.ModalOverlay = index_2.ModalOverlay;
    exports.OverlayDialogBoundary = index_2.OverlayDialogBoundary;
    exports.OverlayTarget = index_2.OverlayTarget;
    var modal_context_1 = require('./models/modal-context');
    exports.DEFAULT_VALUES = modal_context_1.DEFAULT_VALUES;
    exports.ModalContext = modal_context_1.ModalContext;
    exports.ModalContextBuilder = modal_context_1.ModalContextBuilder;
    var modal_open_context_1 = require('./models/modal-open-context');
    exports.ModalOpenContext = modal_open_context_1.ModalOpenContext;
    exports.ModalOpenContextBuilder = modal_open_context_1.ModalOpenContextBuilder;
    __export(require('./components/index'));
    var angular2_modal_module_1 = require('./angular2-modal.module');
    exports.ModalModule = angular2_modal_module_1.ModalModule;
})));
