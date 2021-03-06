"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cloneDeep_1 = tslib_1.__importDefault(require("lodash/cloneDeep"));
const react_1 = tslib_1.__importDefault(require("react"));
const uniforms_1 = require("uniforms");
function ListAdd(_a) {
    var { disabled, initialCount, name, readOnly, value } = _a, props = tslib_1.__rest(_a, ["disabled", "initialCount", "name", "readOnly", "value"]);
    const nameParts = uniforms_1.joinName(null, name);
    const parentName = uniforms_1.joinName(nameParts.slice(0, -1));
    const parent = uniforms_1.useField(parentName, { initialCount }, { absoluteName: true })[0];
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    function onAction(event) {
        if (limitNotReached &&
            !readOnly &&
            (!('key' in event) || event.key === 'Enter')) {
            parent.onChange(parent.value.concat([cloneDeep_1.default(value)]));
        }
    }
    return (react_1.default.createElement("span", Object.assign({}, uniforms_1.filterDOMProps(props), { onClick: onAction, onKeyDown: onAction, role: "button", tabIndex: 0 }), "+"));
}
exports.default = uniforms_1.connectField(ListAdd, {
    initialValue: false,
    kind: 'leaf',
});
