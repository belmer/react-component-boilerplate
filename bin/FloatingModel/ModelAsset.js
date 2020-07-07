"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var THREE = _interopRequireWildcard(require("three/src/Three"));

var _reactThreeFiber = require("react-three-fiber");

var _CanvasExtendContext = require("../Context/CanvasExtendContext");

var _Utility = require("../Utility");

var CreateAsset = function CreateAsset(props) {
  var mesh = props.mesh,
      type = props.type,
      modelInfo = props.modelInfo,
      currentPattern = props.currentPattern,
      backgroundScale = props.backgroundScale,
      backgroundPosition = props.backgroundPosition;

  var _useResource = (0, _reactThreeFiber.useResource)(),
      _useResource2 = (0, _slicedToArray2["default"])(_useResource, 1),
      meshRef = _useResource2[0];

  var meshMaterialRef = (0, _react.useRef)();
  var textRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      meshHovered = _useState2[0],
      setMeshHover = _useState2[1];

  var handleHover = function handleHover(e) {// if (type !== 'base') {
    //   e.stopPropagation()
    //   setMeshHover(true)
    // }
  };

  var handleHoverOut = function handleHoverOut(e) {// if (type !== 'base') {
    //   e.stopPropagation()
    //   setMeshHover(false)
    // }
  };

  var handleClick = function handleClick(e) {// if (type !== 'base') {
    //   e.stopPropagation()
    // }
  }; // const normalMap = useLoader(ImageLoader, currentPattern)
  // const bumpMap = useLoader(ImageLoader, '/images/fabrics/bump.jpg')


  var _useLoader = (0, _reactThreeFiber.useLoader)(THREE.TextureLoader, [currentPattern, '/images/fabrics/bump.jpg']),
      _useLoader2 = (0, _slicedToArray2["default"])(_useLoader, 2),
      normalMap = _useLoader2[0],
      bumpMap = _useLoader2[1];

  var handleTextureUpdate = function handleTextureUpdate(e) {
    e.needsUpdate = true;
  };

  var handleOnUpdate = function handleOnUpdate(e) {// togglePanelTray(true)
  };

  if (normalMap) {
    normalMap.repeat = new THREE.Vector2(backgroundScale, backgroundScale);
    normalMap.offset = new THREE.Vector2(backgroundPosition.x, backgroundPosition.y);
    normalMap.magFilter = THREE.LinearFilter;
    normalMap.minFilter = THREE.LinearFilter;
    normalMap.wrapS = THREE.RepeatWrapping;
    normalMap.wrapT = THREE.RepeatWrapping;
    normalMap.flipY = false;
  }

  if (bumpMap) {
    bumpMap.wrapS = THREE.RepeatWrapping;
    bumpMap.wrapT = THREE.RepeatWrapping;
    bumpMap.magFilter = THREE.LinearFilter;
    bumpMap.minFilter = THREE.LinearFilter;
    bumpMap.repeat = new THREE.Vector2(10, 10);
  }

  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("primitive", {
    key: "mesh-preview-".concat(modelInfo.key, "-").concat(mesh.id),
    ref: meshRef,
    onPointerOver: handleHover,
    onPointerOut: handleHoverOut,
    onClick: handleClick,
    object: mesh.object,
    receiveShadow: true // transparent
    ,
    opacity: 1,
    color: 0xffffff // To adjust the scale of the model on top of the base, use the "scale" property
    // scale={modelInfo.scale ? [modelInfo.scale[0], modelInfo.scale[1], modelInfo.scale[2]] : [1, 1, 1]}
    ,
    onUpdate: handleOnUpdate,
    scale: [5, 5, 5],
    position: new THREE.Vector3(0, 0, 0),
    dispose: null
  }, /*#__PURE__*/_react["default"].createElement("meshPhongMaterial", {
    key: "material-preview-".concat(modelInfo.key, "-").concat(mesh.id),
    ref: meshMaterialRef,
    attach: "material",
    side: THREE.DoubleSide,
    transparent: true,
    shininess: 0,
    color: meshHovered ? 'red' : parseInt("0xffffff"),
    opacity: 1,
    map: normalMap,
    bumpMap: bumpMap
  })));
};

var ModelAsset = function ModelAsset(props) {
  var patternBase = props.patternBase,
      modelInfo = props.modelInfo,
      setModelInfo = props.setModelInfo,
      setGltf = props.setGltf,
      components = props.components,
      setComponents = props.setComponents,
      isPreview = props.isPreview; // const [comp, setComp] = useState()

  var _useContext = (0, _react.useContext)(_CanvasExtendContext.ExtendContext),
      scenes = _useContext.scenes,
      setScenes = _useContext.setScenes,
      backgroundPosition = _useContext.backgroundPosition,
      backgroundScale = _useContext.backgroundScale;

  if (Object.keys(scenes).length <= 0 || !scenes[modelInfo.key]) return null;

  if (scenes[modelInfo.key].modelComponents) {
    var _components = scenes[modelInfo.key].modelComponents;
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, // We need this to loop here so that from the 3D view, all the components that have designs will show.
    _components // .filter((item) => item.object && item.customized)
    .map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(CreateAsset, {
        key: "create-asset-pattern-".concat(modelInfo.key, "-").concat(item.id),
        mesh: item,
        type: "pattern",
        modelInfo: modelInfo,
        setModelInfo: setModelInfo,
        setGltf: setGltf,
        currentPattern: item.texture ? item.texture : '/images/patterns/white.png',
        components: _components,
        patternBase: patternBase,
        isPreview: isPreview,
        backgroundPosition: backgroundPosition,
        backgroundScale: backgroundScale
      });
    }));
  }

  return null;
};

var _default = ModelAsset;
exports["default"] = _default;