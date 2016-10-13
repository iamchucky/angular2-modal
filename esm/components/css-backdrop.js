"use strict";
var core_1 = require('@angular/core');
var base_dynamic_component_1 = require('./base-dynamic-component');
/**
 * Represents the modal backdrop shaped by CSS.
 */
var CSSBackdrop = (function (_super) {
    __extends(CSSBackdrop, _super);
    function CSSBackdrop(el, renderer) {
        var _this = this;
        _super.call(this, el, renderer);
        this.activateAnimationListener();
        var style = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        };
        Object.keys(style).forEach(function (k) { return _this.setStyle(k, style[k]); });
    }
    CSSBackdrop = __decorate([
        core_1.Component({
            selector: 'css-backdrop',
            host: {
                '[attr.class]': 'cssClass',
                '[attr.style]': 'styleStr'
            },
            encapsulation: core_1.ViewEncapsulation.None,
            template: ""
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], CSSBackdrop);
    return CSSBackdrop;
}(base_dynamic_component_1.BaseDynamicComponent));
exports.CSSBackdrop = CSSBackdrop;
//# sourceMappingURL=css-backdrop.js.map