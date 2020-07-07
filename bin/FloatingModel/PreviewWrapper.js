"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _FullscreenSharp = _interopRequireDefault(require("@material-ui/icons/FullscreenSharp"));

var _FullscreenExit = _interopRequireDefault(require("@material-ui/icons/FullscreenExit"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .dnamicro-threed__model {\n    padding: 0 0.25em 0 1em;\n    display: flex;\n    justify-content: space-between;\n    &--minMax {\n      width: 30px;\n      height: 30px;\n    }\n    &--minMax-btn {\n      min-width: 30px;\n      height: 100%;\n      padding: 0;\n      border-radius: 0.25rem;\n    }\n    &--minMax-btn .MuiButton-startIcon {\n      margin: 0 !important;\n    }\n  }\n  .dnamicro-threed__content {\n    width: 100% !important;\n    height: calc(100% - 36px) !important;\n    object-fit: contain;\n    background: white;\n\n    &--canvas {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function PreviewWrapper(props) {
  var className = props.className,
      name = props.name,
      componentTitle = props.componentTitle,
      children = props.children;
  var defaultState = {
    expanded: false,
    width: '300px',
    height: '300px',
    zIndex: '9995'
  };

  var _useState = (0, _react.useState)(defaultState),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      expandModel = _useState2[0],
      setExpandModel = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: expandModel,
    className: (0, _classnames["default"])('dnamicro-threed', className, (0, _defineProperty2["default"])({}, "dnamicro-threed--".concat(name, "-preview"), name))
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: expandModel.expanded ? 'dnamicro-threed__bg' : ''
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("dnamicro-threed__".concat(name))
  }, /*#__PURE__*/_react["default"].createElement("h5", {
    className: (0, _classnames["default"])("dnamicro-threed__".concat(name, "--header"))
  }, componentTitle), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("dnamicro-threed__".concat(name, "--minMax"))
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    className: (0, _classnames["default"])("dnamicro-threed__".concat(name, "--minMax-btn")),
    "aria-label": expandModel.expanded ? 'Minimize' : 'Maximize',
    onClick: function onClick() {
      if (!expandModel.expanded) {
        setExpandModel({
          expanded: true,
          width: '90%',
          height: '90%',
          margin: '0 auto',
          right: '0.25em',
          zIndex: '10000',
          boxShadow: '0',
          border: '0',
          bottom: '5%'
        });
      } else {
        setExpandModel(defaultState);
      }
    }
  }, expandModel.expanded ? /*#__PURE__*/_react["default"].createElement(_FullscreenExit["default"], null) : /*#__PURE__*/_react["default"].createElement(_FullscreenSharp["default"], null)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dnamicro-threed__content"
  }, children)));
}

var StyledPreviewWrapper = (0, _styledComponents["default"])(PreviewWrapper)(_templateObject());
var _default = StyledPreviewWrapper;
exports["default"] = _default;