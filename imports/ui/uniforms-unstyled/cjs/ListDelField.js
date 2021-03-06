"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const uniforms_1 = require("uniforms");
function ListDel(_a) {
    var { disabled, name, readOnly } = _a, props = tslib_1.__rest(_a, ["disabled", "name", "readOnly"]);
    const nameParts = uniforms_1.joinName(null, name);
    const nameIndex = +nameParts[nameParts.length - 1];
    const parentName = uniforms_1.joinName(nameParts.slice(0, -1));
    const parent = uniforms_1.useField(parentName, {}, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.minCount >= parent.value.length);
    function onAction(event) {
        if (limitNotReached &&
            !readOnly &&
            (!('key' in event) || event.key === 'Enter')) {
            const value = parent.value.slice();
            value.splice(nameIndex, 1);
            parent.onChange(value);
        }
    }
    return (react_1.default.createElement("span", Object.assign({}, uniforms_1.filterDOMProps(props), { onClick: onAction, onKeyDown: onAction, role: "button", tabIndex: 0 }), "-"));
}
exports.default = uniforms_1.connectField(ListDel, {
    initialValue: false,
    kind: 'leaf',
});
