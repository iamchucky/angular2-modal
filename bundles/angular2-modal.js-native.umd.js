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
    var modal_1 = require('./modal');
    exports.Modal = modal_1.Modal;
    var modal_context_1 = require('./modal-context');
    exports.JSNativeModalContext = modal_context_1.JSNativeModalContext;
    exports.JSNativeModalContextBuilder = modal_context_1.JSNativeModalContextBuilder;
    var js_native_modal_renderer_1 = require('./js-native-modal-renderer');
    exports.JSNativeModalRenderer = js_native_modal_renderer_1.JSNativeModalRenderer;
    var js_native_preset_1 = require('./presets/js-native-preset');
    exports.JSNativePresetBuilder = js_native_preset_1.JSNativePresetBuilder;
    var js_native_module_1 = require('./js-native.module');
    exports.JSNativeModalModule = js_native_module_1.JSNativeModalModule;
    exports.providers = js_native_module_1.providers;
})));
