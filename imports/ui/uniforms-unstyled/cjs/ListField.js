"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const uniforms_1 = require("uniforms");
const ListAddField_1 = tslib_1.__importDefault(require("./ListAddField"));
const ListItemField_1 = tslib_1.__importDefault(require("./ListItemField"));
function List(_a) {
    var { children = react_1.default.createElement(ListItemField_1.default, { name: "$" }), initialCount, itemProps, label, value } = _a, props = tslib_1.__rest(_a, ["children", "initialCount", "itemProps", "label", "value"]);
    return (react_1.default.createElement("ul", Object.assign({}, uniforms_1.filterDOMProps(props)),
        label && (react_1.default.createElement("label", null,
            label,
            react_1.default.createElement(ListAddField_1.default, { initialCount: initialCount, name: "$" }))), value === null || value === void 0 ? void 0 :
        value.map((item, itemIndex) => react_1.Children.map(children, (child, childIndex) => {
            var _a;
            return react_1.isValidElement(child)
                ? react_1.cloneElement(child, Object.assign({ key: `${itemIndex}-${childIndex}`, name: (_a = child.props.name) === null || _a === void 0 ? void 0 : _a.replace('$', '' + itemIndex) }, itemProps))
                : child;
        }))));
}
exports.default = uniforms_1.connectField(List);
