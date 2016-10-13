"use strict";
var DialogBailOutError = (function (_super) {
    __extends(DialogBailOutError, _super);
    function DialogBailOutError(value) {
        _super.call(this);
        if (!value) {
            value = 'Dialog was forced to close by an unknown source.';
        }
        this.message = value;
    }
    return DialogBailOutError;
}(Error));
exports.DialogBailOutError = DialogBailOutError;
//# sourceMappingURL=errors.js.map