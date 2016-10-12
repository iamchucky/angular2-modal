"use strict";
var core_1 = require('@angular/core');
// <template [dynCmp]="myCmp" [dynCmpBindings]="myBindings"></template>
// <template [dynCmp]="ctx.component" [dynCmpBindings]="ctx.bindings" [dynCmpProjectables]="ctx.projectableNodes"></template>
var SwapComponentDirective = (function () {
    function SwapComponentDirective(cfr, vcRef, tRef) {
        this.cfr = cfr;
        this.vcRef = vcRef;
        this.tRef = tRef;
        this.onCreate = new core_1.EventEmitter(false);
    }
    Object.defineProperty(SwapComponentDirective.prototype, "swapCmp", {
        set: function (component) {
            this.component = component;
            this.vcRef.clear();
            if (this.component) {
                var injector = this.swapCmpInjector || this.vcRef.parentInjector;
                if (Array.isArray(this.swapCmpBindings) && this.swapCmpBindings.length > 0) {
                    injector = core_1.ReflectiveInjector.fromResolvedProviders(this.swapCmpBindings, injector);
                }
                var cmpRef = this.vcRef.createComponent(this.cfr.resolveComponentFactory(component), this.vcRef.length, injector, this.swapCmpProjectables);
                cmpRef.changeDetectorRef.detectChanges();
                this.onCreate.emit(cmpRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    SwapComponentDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[swapCmp]'
                },] },
    ];
    /** @nocollapse */
    SwapComponentDirective.ctorParameters = [
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.ViewContainerRef, },
        { type: core_1.TemplateRef, },
    ];
    SwapComponentDirective.propDecorators = {
        'swapCmpBindings': [{ type: core_1.Input },],
        'swapCmpInjector': [{ type: core_1.Input },],
        'swapCmpProjectables': [{ type: core_1.Input },],
        'onCreate': [{ type: core_1.Output },],
        'swapCmp': [{ type: core_1.Input },],
    };
    return SwapComponentDirective;
}());
exports.SwapComponentDirective = SwapComponentDirective;
//# sourceMappingURL=swap-component.directive.js.map