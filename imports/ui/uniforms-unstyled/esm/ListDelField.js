import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps, joinName, useField, } from 'uniforms';
function ListDel(_a) {
    var { disabled, name, readOnly } = _a, props = __rest(_a, ["disabled", "name", "readOnly"]);
    const nameParts = joinName(null, name);
    const nameIndex = +nameParts[nameParts.length - 1];
    const parentName = joinName(nameParts.slice(0, -1));
    const parent = useField(parentName, {}, { absoluteName: true })[0];
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
    return (React.createElement("span", Object.assign({}, filterDOMProps(props), { onClick: onAction, onKeyDown: onAction, role: "button", tabIndex: 0 }), "-"));
}
export default connectField(ListDel, {
    initialValue: false,
    kind: 'leaf',
});
