"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _reactThreeFiber = require("react-three-fiber");

var _common = require("../common");

var _Asset = _interopRequireDefault(require("./Asset"));

var _BaseAsset = _interopRequireDefault(require("./BaseAsset"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Context = require("../Context");

var _CanvasExtendContext = _interopRequireDefault(require("../Context/CanvasExtendContext"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 0;\n  left: 0;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Box = function Box(props) {
  // This reference will give us direct access to the mesh
  var mesh = (0, _react.useRef)(); // Rotate mesh every frame, this is outside of React without overhead

  (0, _reactThreeFiber.useFrame)(function () {
    return mesh.current.rotation.x = mesh.current.rotation.y += 0.05;
  });
  return /*#__PURE__*/_react["default"].createElement("mesh", (0, _extends2["default"])({
    key: "box-fallback"
  }, props, {
    ref: mesh,
    scale: [2, 2, 2],
    dispose: null
  }), /*#__PURE__*/_react["default"].createElement("boxBufferGeometry", {
    attach: "geometry",
    args: [6, 6, 6],
    dispose: null
  }), /*#__PURE__*/_react["default"].createElement("meshStandardMaterial", {
    attach: "material",
    color: 'orange',
    dispose: null
  }));
};

var ThreeDPreview = function ThreeDPreview(props) {
  var className = props.className;
  var context = (0, _react.useContext)(_Context.CanvasThreeContext);
  var patternBase = context.patternBase,
      models = context.models,
      modelInfo = context.modelInfo,
      setModelInfo = context.setModelInfo,
      setGltf = context.setGltf,
      currentFabric = context.currentFabric,
      currentColor = context.currentColor,
      currentPattern = context.currentPattern,
      modelComponents = context.modelComponents,
      setModelComponents = context.setModelComponents,
      backgroundScale = context.backgroundScale,
      previewBase = context.previewBase,
      previewWrapOverride = context.previewWrapOverride,
      previewBGSettings = context.previewBGSettings;
  var canvasWrapper = (0, _react.useRef)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('CanvasThree', className),
    ref: canvasWrapper
  }, /*#__PURE__*/_react["default"].createElement(_reactThreeFiber.Canvas, {
    key: "three-d-preview",
    className: (0, _classnames["default"])('canvas'),
    camera: {
      fov: 75,
      near: 10,
      far: 1000,
      position: [0, 25, 100]
    },
    gl: {
      preserveDrawingBuffer: true
    }
  }, /*#__PURE__*/_react["default"].createElement(_CanvasExtendContext["default"], {
    values: context
  }, /*#__PURE__*/_react["default"].createElement("hemisphereLight", {
    key: "canvas-preview-light1",
    color: 0xffffff,
    intensity: 0.5
  }), /*#__PURE__*/_react["default"].createElement("directionalLight", {
    key: "canvas-preview-light2",
    color: 0xffffff,
    intensity: 0.5,
    distance: 600,
    position: [0, 13000, 12000]
  }), /*#__PURE__*/_react["default"].createElement("directionalLight", {
    key: "canvas-preview-light3",
    color: 0xffffff,
    intensity: 0.5,
    distance: 600,
    position: [0, 10000, -13000]
  }), /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(Box, {
      position: [0, 0, 0]
    })
  }, /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_Asset["default"], {
    key: "canvasthree-asset-preview-".concat(modelInfo.key),
    modelInfo: modelInfo,
    setModelInfo: setModelInfo,
    setGltf: setGltf,
    currentFabric: currentFabric,
    currentColor: currentColor,
    currentPattern: currentPattern,
    components: modelComponents.filter(function (item) {
      return item.id !== 'all';
    }) // Filter the components here to not include the all id
    ,
    setComponents: function setComponents(comps) {
      setModelComponents(comps);
    },
    patternBase: patternBase
  }))), /*#__PURE__*/_react["default"].createElement(_common.Controls, null))));
};

var StyledCanvasThree = (0, _styledComponents["default"])(ThreeDPreview)(_templateObject());
var _default = StyledCanvasThree;
exports["default"] = _default;