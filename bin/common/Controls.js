"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactThreeFiber = require("react-three-fiber");

var _OrbitControls = require("three/examples/jsm/controls/OrbitControls");

(0, _reactThreeFiber.extend)({
  OrbitControls: _OrbitControls.OrbitControls
});

var Controls = function Controls() {
  var controlsRef = (0, _react.useRef)();

  var _useThree = (0, _reactThreeFiber.useThree)(),
      camera = _useThree.camera,
      gl = _useThree.gl;

  (0, _reactThreeFiber.useFrame)(function () {
    return controlsRef.current && controlsRef.current.update();
  });
  return /*#__PURE__*/_react["default"].createElement("orbitControls", {
    key: "Canvas-Three-Controls",
    ref: controlsRef,
    args: [camera, gl.domElement],
    enableRotate: true,
    enablePan: false,
    maxDistance: 100,
    minDistance: 47,
    minPolarAngle: Math.PI / 6,
    maxPolarAngle: Math.PI / 2,
    dispose: null
  });
};

var _default = Controls;
exports["default"] = _default;