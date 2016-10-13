/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/element');
var import3 = require('./message-modal.component');
var import4 = require('@angular/core/src/linker/view_utils');
var import6 = require('@angular/core/src/linker/view_type');
var import7 = require('@angular/core/src/change_detection/change_detection');
var import8 = require('../../models/dialog-ref');
var import9 = require('@angular/core/src/metadata/view');
var import10 = require('@angular/core/src/linker/component_factory');
var import11 = require('@angular/common/src/directives/ng_class');
var import12 = require('@angular/common/src/directives/ng_switch');
var import13 = require('@angular/common/src/directives/ng_if');
var import14 = require('@angular/core/src/change_detection/differs/iterable_differs');
var import15 = require('@angular/core/src/change_detection/differs/keyvalue_differs');
var import16 = require('@angular/core/src/linker/element_ref');
var import17 = require('@angular/core/src/linker/template_ref');
var import18 = require('@angular/core/src/security');
var import19 = require('@angular/common/src/directives/ng_for');
var renderType_BSMessageModalTitle_Host = null;
var _View_BSMessageModalTitle_Host0 = (function (_super) {
    __extends(_View_BSMessageModalTitle_Host0, _super);
    function _View_BSMessageModalTitle_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSMessageModalTitle_Host0, renderType_BSMessageModalTitle_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSMessageModalTitle_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('modal-title', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_BSMessageModalTitle0(this.viewUtils, this.injector(0), this._appEl_0);
        this._BSMessageModalTitle_0_4 = new import3.BSMessageModalTitle(this.parentInjector.get(import8.DialogRef));
        this._appEl_0.initComponent(this._BSMessageModalTitle_0_4, [], compView_0);
        compView_0.create(this._BSMessageModalTitle_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_BSMessageModalTitle_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.BSMessageModalTitle) && (0 === requestNodeIndex))) {
            return this._BSMessageModalTitle_0_4;
        }
        return notFoundResult;
    };
    return _View_BSMessageModalTitle_Host0;
}(import1.AppView));
function viewFactory_BSMessageModalTitle_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BSMessageModalTitle_Host === null)) {
        (renderType_BSMessageModalTitle_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_BSMessageModalTitle_Host0(viewUtils, parentInjector, declarationEl);
}
exports.BSMessageModalTitleNgFactory = new import10.ComponentFactory('modal-title', viewFactory_BSMessageModalTitle_Host0, import3.BSMessageModalTitle);
var styles_BSMessageModalTitle = [];
var renderType_BSMessageModalTitle = null;
var _View_BSMessageModalTitle0 = (function (_super) {
    __extends(_View_BSMessageModalTitle0, _super);
    function _View_BSMessageModalTitle0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSMessageModalTitle0, renderType_BSMessageModalTitle, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSMessageModalTitle0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._NgClass_0_3 = new import11.NgClass(this.parentInjector.get(import14.IterableDiffers), this.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_0), this.renderer);
        this._NgSwitch_0_4 = new import12.NgSwitch();
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import17.TemplateRef_(this._appEl_2, viewFactory_BSMessageModalTitle1);
        this._NgIf_2_6 = new import13.NgIf(this._appEl_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n      ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_4 = new import2.AppElement(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import17.TemplateRef_(this._appEl_4, viewFactory_BSMessageModalTitle2);
        this._NgSwitchCase_4_6 = new import12.NgSwitchCase(this._appEl_4.vcRef, this._TemplateRef_4_5, this._NgSwitch_0_4);
        this._text_5 = this.renderer.createText(this._el_0, '\n      ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_6 = new import2.AppElement(6, 0, this, this._anchor_6);
        this._TemplateRef_6_5 = new import17.TemplateRef_(this._appEl_6, viewFactory_BSMessageModalTitle3);
        this._NgSwitchDefault_6_6 = new import12.NgSwitchDefault(this._appEl_6.vcRef, this._TemplateRef_6_5, this._NgSwitch_0_4);
        this._text_7 = this.renderer.createText(this._el_0, '\n ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7
        ], [], []);
        return null;
    };
    _View_BSMessageModalTitle0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import13.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6;
        }
        if (((token === import17.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import12.NgSwitchCase) && (4 === requestNodeIndex))) {
            return this._NgSwitchCase_4_6;
        }
        if (((token === import17.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import12.NgSwitchDefault) && (6 === requestNodeIndex))) {
            return this._NgSwitchDefault_6_6;
        }
        if (((token === import11.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._NgClass_0_3;
        }
        if (((token === import12.NgSwitch) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._NgSwitch_0_4;
        }
        return notFoundResult;
    };
    _View_BSMessageModalTitle0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.context.headerClass;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgClass_0_3.ngClass = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (!throwOnChange) {
            this._NgClass_0_3.ngDoCheck();
        }
        var currVal_1 = this.context.titleHtml;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgSwitch_0_4.ngSwitch = currVal_1;
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.context.showClose;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgIf_2_6.ngIf = currVal_2;
            this._expr_2 = currVal_2;
        }
        var currVal_3 = 1;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._NgSwitchCase_4_6.ngSwitchCase = currVal_3;
            this._expr_3 = currVal_3;
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_BSMessageModalTitle0;
}(import1.AppView));
function viewFactory_BSMessageModalTitle0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BSMessageModalTitle === null)) {
        (renderType_BSMessageModalTitle = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_BSMessageModalTitle, {}));
    }
    return new _View_BSMessageModalTitle0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_BSMessageModalTitle0 = viewFactory_BSMessageModalTitle0;
var _View_BSMessageModalTitle1 = (function (_super) {
    __extends(_View_BSMessageModalTitle1, _super);
    function _View_BSMessageModalTitle1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSMessageModalTitle1, renderType_BSMessageModalTitle, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSMessageModalTitle1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'aria-label', 'Close');
        this.renderer.setElementAttribute(this._el_0, 'class', 'close');
        this.renderer.setElementAttribute(this._el_0, 'type', 'button');
        this._text_1 = this.renderer.createText(this._el_0, '\n          ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'span', null);
        this.renderer.setElementAttribute(this._el_2, 'aria-hidden', 'true');
        this._text_3 = this.renderer.createText(this._el_2, '×', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n      ', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ], [disposable_0], []);
        return null;
    };
    _View_BSMessageModalTitle1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.dialog.dismiss() !== false);
        return (true && pd_0);
    };
    return _View_BSMessageModalTitle1;
}(import1.AppView));
function viewFactory_BSMessageModalTitle1(viewUtils, parentInjector, declarationEl) {
    return new _View_BSMessageModalTitle1(viewUtils, parentInjector, declarationEl);
}
var _View_BSMessageModalTitle2 = (function (_super) {
    __extends(_View_BSMessageModalTitle2, _super);
    function _View_BSMessageModalTitle2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSMessageModalTitle2, renderType_BSMessageModalTitle, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSMessageModalTitle2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return null;
    };
    _View_BSMessageModalTitle2.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this.parent.context.context.titleHtml;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.HTML, currVal_0));
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_BSMessageModalTitle2;
}(import1.AppView));
function viewFactory_BSMessageModalTitle2(viewUtils, parentInjector, declarationEl) {
    return new _View_BSMessageModalTitle2(viewUtils, parentInjector, declarationEl);
}
var _View_BSMessageModalTitle3 = (function (_super) {
    __extends(_View_BSMessageModalTitle3, _super);
    function _View_BSMessageModalTitle3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSMessageModalTitle3, renderType_BSMessageModalTitle, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSMessageModalTitle3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'h3', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'modal-title');
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_BSMessageModalTitle3.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(1, '', this.parent.context.context.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_1, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_BSMessageModalTitle3;
}(import1.AppView));
function viewFactory_BSMessageModalTitle3(viewUtils, parentInjector, declarationEl) {
    return new _View_BSMessageModalTitle3(viewUtils, parentInjector, declarationEl);
}
var renderType_BSMessageModalBody_Host = null;
var _View_BSMessageModalBody_Host0 = (function (_super) {
    __extends(_View_BSMessageModalBody_Host0, _super);
    function _View_BSMessageModalBody_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSMessageModalBody_Host0, renderType_BSMessageModalBody_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSMessageModalBody_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('modal-body', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_BSMessageModalBody0(this.viewUtils, this.injector(0), this._appEl_0);
        this._BSMessageModalBody_0_4 = new import3.BSMessageModalBody(this.parentInjector.get(import8.DialogRef));
        this._appEl_0.initComponent(this._BSMessageModalBody_0_4, [], compView_0);
        compView_0.create(this._BSMessageModalBody_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_BSMessageModalBody_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.BSMessageModalBody) && (0 === requestNodeIndex))) {
            return this._BSMessageModalBody_0_4;
        }
        return notFoundResult;
    };
    return _View_BSMessageModalBody_Host0;
}(import1.AppView));
function viewFactory_BSMessageModalBody_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BSMessageModalBody_Host === null)) {
        (renderType_BSMessageModalBody_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_BSMessageModalBody_Host0(viewUtils, parentInjector, declarationEl);
}
exports.BSMessageModalBodyNgFactory = new import10.ComponentFactory('modal-body', viewFactory_BSMessageModalBody_Host0, import3.BSMessageModalBody);
var styles_BSMessageModalBody = ['.form-group {\n    margin-top: 10px;\n  }'];
var renderType_BSMessageModalBody = null;
var _View_BSMessageModalBody0 = (function (_super) {
    __extends(_View_BSMessageModalBody0, _super);
    function _View_BSMessageModalBody0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSMessageModalBody0, renderType_BSMessageModalBody, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSMessageModalBody0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._NgClass_0_3 = new import11.NgClass(this.parentInjector.get(import14.IterableDiffers), this.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, ' \n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'div', null);
        this._text_3 = this.renderer.createText(this._el_0, '\n      ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_4 = new import2.AppElement(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import17.TemplateRef_(this._appEl_4, viewFactory_BSMessageModalBody1);
        this._NgIf_4_6 = new import13.NgIf(this._appEl_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_0, '\n    ', null);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6
        ], [], []);
        return null;
    };
    _View_BSMessageModalBody0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import13.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6;
        }
        if (((token === import11.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._NgClass_0_3;
        }
        return notFoundResult;
    };
    _View_BSMessageModalBody0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0 = this.context.context.bodyClass;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgClass_0_3.ngClass = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (!throwOnChange) {
            this._NgClass_0_3.ngDoCheck();
        }
        var currVal_2 = this.context.context.showInput;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._NgIf_4_6.ngIf = currVal_2;
            this._expr_2 = currVal_2;
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = this.context.context.message;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_2, 'innerHTML', this.viewUtils.sanitizer.sanitize(import18.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_BSMessageModalBody0;
}(import1.AppView));
function viewFactory_BSMessageModalBody0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BSMessageModalBody === null)) {
        (renderType_BSMessageModalBody = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_BSMessageModalBody, {}));
    }
    return new _View_BSMessageModalBody0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_BSMessageModalBody0 = viewFactory_BSMessageModalBody0;
var _View_BSMessageModalBody1 = (function (_super) {
    __extends(_View_BSMessageModalBody1, _super);
    function _View_BSMessageModalBody1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSMessageModalBody1, renderType_BSMessageModalBody, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSMessageModalBody1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'form-group');
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'input', null);
        this.renderer.setElementAttribute(this._el_2, 'autofocus', '');
        this.renderer.setElementAttribute(this._el_2, 'class', 'form-control');
        this.renderer.setElementAttribute(this._el_2, 'name', 'bootstrap');
        this.renderer.setElementAttribute(this._el_2, 'type', 'text');
        this._text_3 = this.renderer.createText(this._el_0, '\n      ', null);
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_2, 'change', this.eventHandler(this._handle_change_2_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ], [disposable_0], []);
        return null;
    };
    _View_BSMessageModalBody1.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = this.parent.context.context.defaultValue;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_2, 'value', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.parent.context.context.placeholder, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_2, 'placeholder', currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_BSMessageModalBody1.prototype._handle_change_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = ((this.parent.context.context.defaultValue = this._el_2.value) !== false);
        return (true && pd_0);
    };
    return _View_BSMessageModalBody1;
}(import1.AppView));
function viewFactory_BSMessageModalBody1(viewUtils, parentInjector, declarationEl) {
    return new _View_BSMessageModalBody1(viewUtils, parentInjector, declarationEl);
}
var renderType_BSModalFooter_Host = null;
var _View_BSModalFooter_Host0 = (function (_super) {
    __extends(_View_BSModalFooter_Host0, _super);
    function _View_BSModalFooter_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSModalFooter_Host0, renderType_BSModalFooter_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSModalFooter_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('modal-footer', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_BSModalFooter0(this.viewUtils, this.injector(0), this._appEl_0);
        this._BSModalFooter_0_4 = new import3.BSModalFooter(this.parentInjector.get(import8.DialogRef));
        this._appEl_0.initComponent(this._BSModalFooter_0_4, [], compView_0);
        compView_0.create(this._BSModalFooter_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_BSModalFooter_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.BSModalFooter) && (0 === requestNodeIndex))) {
            return this._BSModalFooter_0_4;
        }
        return notFoundResult;
    };
    return _View_BSModalFooter_Host0;
}(import1.AppView));
function viewFactory_BSModalFooter_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BSModalFooter_Host === null)) {
        (renderType_BSModalFooter_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_BSModalFooter_Host0(viewUtils, parentInjector, declarationEl);
}
exports.BSModalFooterNgFactory = new import10.ComponentFactory('modal-footer', viewFactory_BSModalFooter_Host0, import3.BSModalFooter);
var styles_BSModalFooter = [];
var renderType_BSModalFooter = null;
var _View_BSModalFooter0 = (function (_super) {
    __extends(_View_BSModalFooter0, _super);
    function _View_BSModalFooter0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSModalFooter0, renderType_BSModalFooter, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSModalFooter0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._NgClass_0_3 = new import11.NgClass(this.parentInjector.get(import14.IterableDiffers), this.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import2.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import17.TemplateRef_(this._appEl_2, viewFactory_BSModalFooter1);
        this._NgFor_2_6 = new import19.NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parentInjector.get(import14.IterableDiffers), this.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_BSModalFooter0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import19.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6;
        }
        if (((token === import11.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgClass_0_3;
        }
        return notFoundResult;
    };
    _View_BSModalFooter0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        var currVal_0 = this.context.dialog.context.footerClass;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._NgClass_0_3.ngClass = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (!throwOnChange) {
            this._NgClass_0_3.ngDoCheck();
        }
        changes = null;
        var currVal_1 = this.context.dialog.context.buttons;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgFor_2_6.ngForOf = currVal_1;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        if ((changes !== null)) {
            this._NgFor_2_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_2_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_BSModalFooter0;
}(import1.AppView));
function viewFactory_BSModalFooter0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BSModalFooter === null)) {
        (renderType_BSModalFooter = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_BSModalFooter, {}));
    }
    return new _View_BSModalFooter0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_BSModalFooter0 = viewFactory_BSModalFooter0;
var _View_BSModalFooter1 = (function (_super) {
    __extends(_View_BSModalFooter1, _super);
    function _View_BSModalFooter1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSModalFooter1, renderType_BSModalFooter, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSModalFooter1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this._NgClass_0_3 = new import11.NgClass(this.parent.parentInjector.get(import14.IterableDiffers), this.parent.parentInjector.get(import15.KeyValueDiffers), new import16.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    };
    _View_BSModalFooter1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgClass_0_3;
        }
        return notFoundResult;
    };
    _View_BSModalFooter1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.context.$implicit.cssClass;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgClass_0_3.ngClass = currVal_1;
            this._expr_1 = currVal_1;
        }
        if (!throwOnChange) {
            this._NgClass_0_3.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.caption, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_BSModalFooter1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.onClick(this.context.$implicit, $event) !== false);
        return (true && pd_0);
    };
    return _View_BSModalFooter1;
}(import1.AppView));
function viewFactory_BSModalFooter1(viewUtils, parentInjector, declarationEl) {
    return new _View_BSModalFooter1(viewUtils, parentInjector, declarationEl);
}
var renderType_BSMessageModal_Host = null;
var _View_BSMessageModal_Host0 = (function (_super) {
    __extends(_View_BSMessageModal_Host0, _super);
    function _View_BSMessageModal_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSMessageModal_Host0, renderType_BSMessageModal_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSMessageModal_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('modal-content', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_BSMessageModal0(this.viewUtils, this.injector(0), this._appEl_0);
        this._BSMessageModal_0_4 = new import3.BSMessageModal(this.parentInjector.get(import8.DialogRef));
        this._appEl_0.initComponent(this._BSMessageModal_0_4, [], compView_0);
        compView_0.create(this._BSMessageModal_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_BSMessageModal_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.BSMessageModal) && (0 === requestNodeIndex))) {
            return this._BSMessageModal_0_4;
        }
        return notFoundResult;
    };
    return _View_BSMessageModal_Host0;
}(import1.AppView));
function viewFactory_BSMessageModal_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BSMessageModal_Host === null)) {
        (renderType_BSMessageModal_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_BSMessageModal_Host0(viewUtils, parentInjector, declarationEl);
}
exports.BSMessageModalNgFactory = new import10.ComponentFactory('modal-content', viewFactory_BSMessageModal_Host0, import3.BSMessageModal);
var styles_BSMessageModal = [];
var renderType_BSMessageModal = null;
var _View_BSMessageModal0 = (function (_super) {
    __extends(_View_BSMessageModal0, _super);
    function _View_BSMessageModal0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_BSMessageModal0, renderType_BSMessageModal, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_BSMessageModal0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'modal-title', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_BSMessageModalTitle0(this.viewUtils, this.injector(0), this._appEl_0);
        this._BSMessageModalTitle_0_4 = new import3.BSMessageModalTitle(this.parentInjector.get(import8.DialogRef));
        this._appEl_0.initComponent(this._BSMessageModalTitle_0_4, [], compView_0);
        compView_0.create(this._BSMessageModalTitle_0_4, [], null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'modal-body', null);
        this._appEl_1 = new import2.AppElement(1, null, this, this._el_1);
        var compView_1 = viewFactory_BSMessageModalBody0(this.viewUtils, this.injector(1), this._appEl_1);
        this._BSMessageModalBody_1_4 = new import3.BSMessageModalBody(this.parentInjector.get(import8.DialogRef));
        this._appEl_1.initComponent(this._BSMessageModalBody_1_4, [], compView_1);
        compView_1.create(this._BSMessageModalBody_1_4, [], null);
        this._el_2 = this.renderer.createElement(parentRenderNode, 'modal-footer', null);
        this._appEl_2 = new import2.AppElement(2, null, this, this._el_2);
        var compView_2 = viewFactory_BSModalFooter0(this.viewUtils, this.injector(2), this._appEl_2);
        this._BSModalFooter_2_4 = new import3.BSModalFooter(this.parentInjector.get(import8.DialogRef));
        this._appEl_2.initComponent(this._BSModalFooter_2_4, [], compView_2);
        compView_2.create(this._BSModalFooter_2_4, [], null);
        this.init([], [
            this._el_0,
            this._el_1,
            this._el_2
        ], [], []);
        return null;
    };
    _View_BSMessageModal0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.BSMessageModalTitle) && (0 === requestNodeIndex))) {
            return this._BSMessageModalTitle_0_4;
        }
        if (((token === import3.BSMessageModalBody) && (1 === requestNodeIndex))) {
            return this._BSMessageModalBody_1_4;
        }
        if (((token === import3.BSModalFooter) && (2 === requestNodeIndex))) {
            return this._BSModalFooter_2_4;
        }
        return notFoundResult;
    };
    return _View_BSMessageModal0;
}(import1.AppView));
function viewFactory_BSMessageModal0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_BSMessageModal === null)) {
        (renderType_BSMessageModal = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_BSMessageModal, {}));
    }
    return new _View_BSMessageModal0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_BSMessageModal0 = viewFactory_BSMessageModal0;
//# sourceMappingURL=message-modal.component.ngfactory.js.map