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
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SwapComponentDirective.prototype, "swapCmpBindings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.Injector)
    ], SwapComponentDirective.prototype, "swapCmpInjector", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SwapComponentDirective.prototype, "swapCmpProjectables", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SwapComponentDirective.prototype, "onCreate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], SwapComponentDirective.prototype, "swapCmp", null);
    SwapComponentDirective = __decorate([
        core_1.Directive({
            selector: '[swapCmp]'
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.ViewContainerRef, core_1.TemplateRef])
    ], SwapComponentDirective);
    return SwapComponentDirective;
}());
exports.SwapComponentDirective = SwapComponentDirective;
// <component-linker [linkedComponent]="ctx.component" [bindings]="ctx.bindings"></component-linker>
// @Component({
//   selector: 'component-linker',
//   template: ''
// })
// export class ComponentLinker {
//
//   @Input() linkedComponent: any;
//   @Input() bindings: ResolvedReflectiveProvider[];
//
//   @Output() onCreate: EventEmitter<ComponentRef<any>> = new EventEmitter<ComponentRef<any>>(false);
//   constructor(private vcRef: ViewContainerRef, private cfr: ComponentFactoryResolver) {
//
//   }
//
//   ngAfterViewInit() {
//     let injector = this.vcRef.parentInjector;
//
//     if (Array.isArray(this.bindings) && this.bindings.length > 0) {
//       injector = ReflectiveInjector.fromResolvedProviders(this.bindings, injector);
//     }
//
//     const cmpRef = this.vcRef.createComponent(
//       this.cfr.resolveComponentFactory(this.linkedComponent),
//       this.vcRef.length,
//       injector
//     );
//
//     cmpRef.changeDetectorRef.detectChanges();
//
//     this.onCreate.emit(cmpRef);
//   }
// } 
//# sourceMappingURL=swap-component.directive.js.map