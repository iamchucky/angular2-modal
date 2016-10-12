"use strict";
var core_1 = require('@angular/core');
function createComponent(instructions) {
    var injector = getInjector(instructions);
    return instructions.vcRef.createComponent(injector.get(core_1.ComponentFactoryResolver).resolveComponentFactory(instructions.component), instructions.vcRef.length, injector, instructions.projectableNodes);
}
exports.createComponent = createComponent;
function getInjector(instructions) {
    var ctxInjector = instructions.injector || instructions.vcRef.parentInjector;
    return Array.isArray(instructions.bindings) && instructions.bindings.length > 0 ?
        core_1.ReflectiveInjector.fromResolvedProviders(instructions.bindings, ctxInjector) : ctxInjector;
}
//# sourceMappingURL=createComponent.js.map