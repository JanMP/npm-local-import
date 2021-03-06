import { __rest } from "tslib";
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
function Error(_a) {
    var { children, error, errorMessage } = _a, props = __rest(_a, ["children", "error", "errorMessage"]);
    return !error ? null : (React.createElement("div", Object.assign({}, filterDOMProps(props)), children || errorMessage));
}
export default connectField(Error, {
    initialValue: false,
    kind: 'leaf',
});
