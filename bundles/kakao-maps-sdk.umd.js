(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('kakao-maps-sdk', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['kakao-maps-sdk'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */









function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

var KakaoConstants = /** @class */ (function () {
    function KakaoConstants() {
    }
    KakaoConstants.getAPIConstants = function (property, name) {
        var constant;
        try {
            constant = daum.maps[property][name];
        }
        catch (e) {
            throw new Error("Cannot find any constant named as \"" + property + "." + name + "\". Error: " + e);
        }
        return constant;
    };
    KakaoConstants.getLibraryAPIConstants = function (library, property, name) {
        var constant;
        try {
            constant = daum.maps[library][property][name];
        }
        catch (e) {
            throw new Error("Cannot find any constant named as \"" + library + "." + property + "." + name + "\". Error: " + e);
        }
        return constant;
    };
    return KakaoConstants;
}());
KakaoConstants.MAP_API_END_POINT_PREFIX = '//dapi.kakao.com/v2/maps/sdk.js?appkey=';
KakaoConstants.MAP_API_END_POINT_LIBRARY_OPTIONS = '&libraries=services,clusterer,drawing&autoload=false';
KakaoConstants.APIKEY_ERROR = 'KakaoMap is not initialized yet, call init(apiKey) first.';
KakaoConstants.MAP_OBJECT_INIT_ERROR = 'Map is not initialized yet.';
var OverlayType = /** @class */ (function () {
    function OverlayType() {
    }
    OverlayType.init = function () {
        try {
            OverlayType.MARKER = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'MARKER');
            OverlayType.RECTANGLE = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'RECTANGLE');
            OverlayType.CIRCLE = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'CIRCLE');
            OverlayType.ELLIPSE = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'ELLIPSE');
            OverlayType.POLYLINE = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'POLYLINE');
            OverlayType.ARROW = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'ARROW');
            OverlayType.POLYGON = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'POLYGON');
        }
        catch (e) {
            throw e;
        }
    };
    return OverlayType;
}());
OverlayType.MARKER = null;
OverlayType.RECTANGLE = null;
OverlayType.CIRCLE = null;
OverlayType.ELLIPSE = null;
OverlayType.POLYLINE = null;
OverlayType.ARROW = null;
OverlayType.POLYGON = null;
var Status = /** @class */ (function () {
    function Status() {
    }
    Status.init = function () {
        try {
            Status.OK = KakaoConstants.getLibraryAPIConstants('services', 'Status', 'OK');
            Status.ZERO_RESULT = KakaoConstants.getLibraryAPIConstants('services', 'Status', 'ZERO_RESULT');
            Status.ERROR = KakaoConstants.getLibraryAPIConstants('services', 'Status', 'ERROR');
        }
        catch (e) {
            throw e;
        }
    };
    return Status;
}());
Status.OK = null;
Status.ZERO_RESULT = null;
Status.ERROR = null;
var SortBy = /** @class */ (function () {
    function SortBy() {
    }
    SortBy.init = function () {
        try {
            SortBy.ACCURACY = KakaoConstants.getLibraryAPIConstants('services', 'SortBy', 'ACCURACY');
            SortBy.DISTANCE = KakaoConstants.getLibraryAPIConstants('services', 'SortBy', 'DISTANCE');
        }
        catch (e) {
            throw e;
        }
    };
    return SortBy;
}());
SortBy.ACCURACY = null;
SortBy.DISTANCE = null;
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Coords.init = function () {
        try {
            Coords.WGS84 = KakaoConstants.getLibraryAPIConstants('services', 'Coords', 'WGS84');
            Coords.WCONGNAMUL = KakaoConstants.getLibraryAPIConstants('services', 'Coords', 'WCONGNAMUL');
            Coords.CONGNAMUL = KakaoConstants.getLibraryAPIConstants('services', 'Coords', 'CONGNAMUL');
            Coords.WTM = KakaoConstants.getLibraryAPIConstants('services', 'Coords', 'WTM');
            Coords.TM = KakaoConstants.getLibraryAPIConstants('services', 'Coords', 'TM');
        }
        catch (e) {
            throw e;
        }
    };
    return Coords;
}());
Coords.WGS84 = null;
Coords.WCONGNAMUL = null;
Coords.CONGNAMUL = null;
Coords.WTM = null;
Coords.TM = null;
var MapTypeId = /** @class */ (function () {
    function MapTypeId() {
    }
    MapTypeId.init = function () {
        try {
            MapTypeId.ROADMAP = KakaoConstants.getAPIConstants('MapTypeId', 'ROADMAP');
            MapTypeId.SKYVIEW = KakaoConstants.getAPIConstants('MapTypeId', 'SKYVIEW');
            MapTypeId.HYBRID = KakaoConstants.getAPIConstants('MapTypeId', 'HYBRID');
        }
        catch (e) {
            throw e;
        }
    };
    MapTypeId.getCustomMapTypeId = function (id) {
        return KakaoConstants.getAPIConstants('MapTypeId', id);
    };
    return MapTypeId;
}());
MapTypeId.ROADMAP = null;
MapTypeId.SKYVIEW = null;
MapTypeId.HYBRID = null;
var OverlayMapTypeId = /** @class */ (function () {
    function OverlayMapTypeId() {
    }
    OverlayMapTypeId.init = function () {
        try {
            OverlayMapTypeId.ROADVIEW = KakaoConstants.getAPIConstants('MapTypeId', 'ROADVIEW');
            OverlayMapTypeId.OVERLAY = KakaoConstants.getAPIConstants('MapTypeId', 'OVERLAY');
            OverlayMapTypeId.TERRAIN = KakaoConstants.getAPIConstants('MapTypeId', 'TERRAIN');
            OverlayMapTypeId.TRAFFIC = KakaoConstants.getAPIConstants('MapTypeId', 'TRAFFIC');
            OverlayMapTypeId.BICYCLE = KakaoConstants.getAPIConstants('MapTypeId', 'BICYCLE');
            OverlayMapTypeId.BICYCLE_HYBRID = KakaoConstants.getAPIConstants('MapTypeId', 'BICYCLE_HYBRID');
            OverlayMapTypeId.USE_DISTRICT = KakaoConstants.getAPIConstants('MapTypeId', 'USE_DISTRICT');
        }
        catch (e) {
            throw e;
        }
    };
    return OverlayMapTypeId;
}());
OverlayMapTypeId.ROADVIEW = null;
OverlayMapTypeId.OVERLAY = null;
OverlayMapTypeId.TERRAIN = null;
OverlayMapTypeId.TRAFFIC = null;
OverlayMapTypeId.BICYCLE = null;
OverlayMapTypeId.BICYCLE_HYBRID = null;
OverlayMapTypeId.USE_DISTRICT = null;
var ControlPosition = /** @class */ (function () {
    function ControlPosition() {
    }
    ControlPosition.init = function () {
        try {
            ControlPosition.TOP = KakaoConstants.getAPIConstants('ControlPosition', 'TOP');
            ControlPosition.TOPLEFT = KakaoConstants.getAPIConstants('ControlPosition', 'TOPLEFT');
            ControlPosition.TOPRIGHT = KakaoConstants.getAPIConstants('ControlPosition', 'TOPRIGHT');
            ControlPosition.LEFT = KakaoConstants.getAPIConstants('ControlPosition', 'LEFT');
            ControlPosition.RIGHT = KakaoConstants.getAPIConstants('ControlPosition', 'RIGHT');
            ControlPosition.BOTTOMLEFT = KakaoConstants.getAPIConstants('ControlPosition', 'BOTTOMLEFT');
            ControlPosition.BOTTOM = KakaoConstants.getAPIConstants('ControlPosition', 'BOTTOM');
            ControlPosition.BOTTOMRIGHT = KakaoConstants.getAPIConstants('ControlPosition', 'BOTTOMRIGHT');
        }
        catch (e) {
            throw e;
        }
    };
    return ControlPosition;
}());
ControlPosition.TOP = null;
ControlPosition.TOPLEFT = null;
ControlPosition.TOPRIGHT = null;
ControlPosition.LEFT = null;
ControlPosition.RIGHT = null;
ControlPosition.BOTTOMLEFT = null;
ControlPosition.BOTTOM = null;
ControlPosition.BOTTOMRIGHT = null;
var CopyrightPosition = /** @class */ (function () {
    function CopyrightPosition() {
    }
    CopyrightPosition.init = function () {
        try {
            CopyrightPosition.BOTTOMLEFT = KakaoConstants.getAPIConstants('CopyrightPosition', 'BOTTOMLEFT');
            CopyrightPosition.BOTTOMRIGHT = KakaoConstants.getAPIConstants('CopyrightPosition', 'BOTTOMRIGHT');
        }
        catch (e) {
            throw e;
        }
    };
    return CopyrightPosition;
}());
CopyrightPosition.BOTTOMLEFT = null;
CopyrightPosition.BOTTOMRIGHT = null;
var LatLng = /** @class */ (function () {
    function LatLng(latitude, longitude) {
        return this.object = new daum.maps.LatLng(latitude, longitude);
    }
    LatLng.prototype.getLat = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.getLat();
    };
    LatLng.prototype.getLng = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.getLng();
    };
    LatLng.prototype.equals = function (latlng) {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.equals(latlng);
    };
    LatLng.prototype.toString = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.toString();
    };
    LatLng.prototype.toCoords = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        var res = this.object.toCoords();
        return res;
    };
    return LatLng;
}());
var KakaoMap = /** @class */ (function () {
    function KakaoMap(container, options) {
        return (this.object = new daum.maps.Map(container, options));
    }
    KakaoMap.prototype.setCenter = function (latlng) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setCenter(latlng);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.getCenter = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getCenter();
    };
    KakaoMap.prototype.setLevel = function (level, options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                if (options == null) {
                    _this.object.setLevel(level);
                }
                else {
                    _this.object.setLevel(level, options);
                }
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.getLevel = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getLevel();
    };
    KakaoMap.prototype.setMapTypeId = function (mapTypeId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMapTypeId(mapTypeId);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.getMapTypeId = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMapTypeId();
    };
    KakaoMap.prototype.setBounds = function (bounds, paddingTop, paddingRight, paddingBottom, paddingLeft) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                if (paddingLeft) {
                    _this.object.setBounds(bounds, paddingTop, paddingRight, paddingBottom, paddingLeft);
                }
                else if (paddingBottom) {
                    _this.object.setBounds(bounds, paddingTop, paddingRight, paddingBottom);
                }
                else if (paddingRight) {
                    _this.object.setBounds(bounds, paddingTop, paddingRight);
                }
                else if (paddingTop) {
                    _this.object.setBounds(bounds, paddingTop);
                }
                else {
                    _this.object.setBounds(bounds);
                }
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.getBounds = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getBounds();
    };
    KakaoMap.prototype.setMinLevel = function (minLevel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMinLevel(minLevel);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.setMaxLevel = function (maxLevel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMaxLevel(maxLevel);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.panBy = function (dx, dy) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.panBy(dx, dy);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.panTo = function (latlng_or_bounds, padding) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                if (padding) {
                    _this.object.panTo(latlng_or_bounds, padding);
                }
                else {
                    _this.object.panTo(latlng_or_bounds);
                }
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.addControl = function (control, position) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.addControl(control, position);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.removeControl = function (control) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.removeControl(control);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.setDraggable = function (draggable) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setDraggable(draggable);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.getDraggable = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getDraggable();
    };
    KakaoMap.prototype.setZoomable = function (zoomable) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setZoomable(zoomable);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.getZoomable = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZoomable();
    };
    KakaoMap.prototype.relayout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.relayout();
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.addOverlayMapTypeId = function (mapTypeId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.addOverlayMapTypeId(mapTypeId);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.removeOverlayMapTypeId = function (mapTypeId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.removeOverlayMapTypeId(mapTypeId);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.setKeyboardShortcuts = function (active) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setKeyboardShortcuts(active);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.getKeyboardShortcuts = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getKeyboardShortcuts();
    };
    KakaoMap.prototype.setCopyrightPosition = function (copyrightPosition, reversed) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                if (reversed) {
                    _this.object.setCopyrightPosition(copyrightPosition, reversed);
                }
                else {
                    _this.object.setCopyrightPosition(copyrightPosition);
                }
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMap.prototype.getProjection = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getProjection();
    };
    KakaoMap.prototype.setCursor = function (style) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setCursor(style);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    return KakaoMap;
}());
var KakaoMapsProvider = /** @class */ (function () {
    function KakaoMapsProvider() {
    }
    KakaoMapsProvider.prototype.loadKakaoMapSDK = function (apiKey) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (apiKey == null) {
                    var e = new Error('apiKey must be required.');
                    throw e;
                }
                console.log('--> preparing to Kakao Javascript SDK load...');
                var node = document.createElement('script');
                node.src = KakaoConstants.MAP_API_END_POINT_PREFIX + apiKey + KakaoConstants.MAP_API_END_POINT_LIBRARY_OPTIONS;
                node.type = 'text/javascript';
                document.getElementsByTagName('head')[0].appendChild(node);
                setTimeout(function () {
                    try {
                        daum.maps.load(function () {
                            try {
                                _this.constantInit();
                                console.log('--> completed to load Kakao Javascript SDK.]');
                                resolve();
                            }
                            catch (e) {
                                console.error(e);
                                reject(e);
                            }
                        });
                    }
                    catch (e) {
                        console.error(e);
                        reject(e);
                    }
                }, 100);
            }
            catch (e) {
                console.error(e);
                reject(e);
            }
        });
    };
    KakaoMapsProvider.prototype.init = function (containerId, mapOptions) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this._container = document.getElementById(containerId);
                _this._mapInstance = new KakaoMap(_this._container, _this.safeOp(mapOptions));
                setTimeout(function () {
                    resolve();
                }, 100);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMapsProvider.prototype.setContainerStyleConfig = function (width, height) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this._container == null) {
                    var e = new Error('container is null.');
                    throw e;
                }
                _this._container.style.width = width;
                _this._container.style.height = height;
                _this.getMapInstance().relayout();
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    KakaoMapsProvider.prototype.constantInit = function () {
        try {
            MapTypeId.init();
            OverlayMapTypeId.init();
            ControlPosition.init();
            CopyrightPosition.init();
            Status.init();
            OverlayType.init();
            SortBy.init();
            Coords.init();
        }
        catch (e) {
            throw e;
        }
    };
    KakaoMapsProvider.prototype.safeOp = function (mapOptions) {
        try {
            var options = {
                center: new LatLng(33.450701, 126.570667),
            };
            if (mapOptions == null) {
                return options;
            }
            if (mapOptions.center) {
                options.center = mapOptions.center;
            }
            if (mapOptions.level) {
                options['level'] = mapOptions.level;
            }
            if (mapOptions.mapTypeId) {
                options['mapTypeId'] = mapOptions.mapTypeId;
            }
            if (mapOptions.draggable) {
                options['draggable'] = mapOptions.draggable;
            }
            if (mapOptions.scrollwheel) {
                options['scrollwheel'] = mapOptions.scrollwheel;
            }
            if (mapOptions.disableDoubleClick) {
                options['disableDoubleClick'] = mapOptions.disableDoubleClick;
            }
            if (mapOptions.disableDoubleClickZoom) {
                options['disableDoubleClickZoom'] = mapOptions.disableDoubleClickZoom;
            }
            if (mapOptions.projectionId) {
                options['projectionId'] = mapOptions.projectionId;
            }
            if (mapOptions.tileAnimation) {
                options['tileAnimation'] = mapOptions.tileAnimation;
            }
            if (mapOptions.keyboardShortcuts) {
                options['keyboardShortcuts'] = mapOptions.keyboardShortcuts;
            }
            console.log(options);
            return options;
        }
        catch (e) {
            throw e;
        }
    };
    KakaoMapsProvider.prototype.getMapInstance = function () {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this._mapInstance;
    };
    KakaoMapsProvider.prototype.addListeners = function (target, types, handler) {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        if (types == null || types.length == 0) {
            throw new Error('events array is null or empty.');
        }
        var _loop_1 = function (type) {
            daum.maps.event.addListener(target, type, function (res) {
                if (handler) {
                    handler({ type: type, response: res });
                }
            });
        };
        try {
            for (var types_1 = __values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
                var type = types_1_1.value;
                _loop_1(type);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (types_1_1 && !types_1_1.done && (_a = types_1.return)) _a.call(types_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _a;
    };
    KakaoMapsProvider.prototype.addListener = function (target, type, handler) {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        daum.maps.event.addListener(target, type, function (res) {
            if (handler) {
                handler({ type: type, response: res });
            }
        });
    };
    KakaoMapsProvider.prototype.removeListeners = function (target, types, handler) {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        if (types == null || types.length == 0) {
            throw new Error('events array is null or empty.');
        }
        try {
            for (var types_2 = __values(types), types_2_1 = types_2.next(); !types_2_1.done; types_2_1 = types_2.next()) {
                var type = types_2_1.value;
                daum.maps.event.removeListener(target, type, handler);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (types_2_1 && !types_2_1.done && (_a = types_2.return)) _a.call(types_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var e_2, _a;
    };
    KakaoMapsProvider.prototype.removeListener = function (target, type, handler) {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        daum.maps.event.removeListener(target, type, handler);
    };
    KakaoMapsProvider.prototype.trigger = function (target, type, data) {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        daum.maps.event.trigger(target, type, data);
    };
    KakaoMapsProvider.prototype.preventMap = function () {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        daum.maps.event.preventMap();
    };
    KakaoMapsProvider.prototype.disableHD = function () {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        daum.maps.disableHD();
    };
    KakaoMapsProvider.prototype.ngOnInit = function () { };
    return KakaoMapsProvider;
}());
KakaoMapsProvider.decorators = [
    { type: core.Injectable },
];
KakaoMapsProvider.ctorParameters = function () { return []; };
var KakaoMapsComponent = /** @class */ (function () {
    function KakaoMapsComponent(_kakaoMapsProvider) {
        this._kakaoMapsProvider = _kakaoMapsProvider;
        this.mapConfig = { width: '50%', height: '50%' };
    }
    KakaoMapsComponent.prototype.ngOnChanges = function (changes) {
        this._kakaoMapsProvider.setContainerStyleConfig(changes["mapConfig"].currentValue.width, changes["mapConfig"].currentValue.height).then(function (res) {
        }, function (err) { }).catch(function () {
        });
    };
    KakaoMapsComponent.prototype.ngOnInit = function () { };
    KakaoMapsComponent.prototype.ngAfterViewInit = function () { };
    KakaoMapsComponent.prototype.setMapConfig = function (width, height) {
        this.mapConfig.width = width + 'px';
        this.mapConfig.height = height + 'px';
        this._kakaoMapsProvider.setContainerStyleConfig(this.mapConfig.width, this.mapConfig.height);
    };
    KakaoMapsComponent.prototype.getMapConfig = function () {
        var config = {
            width: Number(this.mapConfig.width.replace('px', '')),
            height: Number(this.mapConfig.height.replace('px', '')),
        };
        return config;
    };
    return KakaoMapsComponent;
}());
KakaoMapsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'kakao-maps',
                template: "<div id=\"kakaomaps-div\" [ngStyle]=\"mapConfig\"></div>",
                styles: [""],
            },] },
];
KakaoMapsComponent.ctorParameters = function () { return [
    { type: KakaoMapsProvider, },
]; };
KakaoMapsComponent.propDecorators = {
    "mapConfig": [{ type: core.Input },],
};
var KakaoMapsModule = /** @class */ (function () {
    function KakaoMapsModule() {
    }
    return KakaoMapsModule;
}());
KakaoMapsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                providers: [KakaoMapsProvider],
                exports: [
                    KakaoMapsComponent
                ],
                declarations: [KakaoMapsComponent]
            },] },
];
var AbstractOverlay = /** @class */ (function () {
    function AbstractOverlay() {
        return this.object = new daum.maps.AbstractOverlay;
    }
    AbstractOverlay.prototype.setMap = function (map) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMap(map);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    AbstractOverlay.prototype.getMap = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    };
    AbstractOverlay.prototype.getPanels = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getPanels();
    };
    AbstractOverlay.prototype.getProjection = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getProjection();
    };
    return AbstractOverlay;
}());
var Circle = /** @class */ (function () {
    function Circle(options) {
        return this.object = new daum.maps.Circle(options);
    }
    Circle.prototype.setMap = function (map) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMap(map);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Circle.prototype.getMap = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    };
    Circle.prototype.setZIndex = function (zIndex) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setZIndex(zIndex);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Circle.prototype.getZIndex = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    };
    Circle.prototype.setOptions = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setOptions(options);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Circle.prototype.setPosition = function (position) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setPosition(position);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Circle.prototype.getPosition = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getPosition();
    };
    Circle.prototype.setRadius = function (radius) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setRadius(radius);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Circle.prototype.getRadius = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getRadius();
    };
    Circle.prototype.getBounds = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getBounds();
    };
    return Circle;
}());
var CustomOverlay = /** @class */ (function () {
    function CustomOverlay(options) {
        return this.object = new daum.maps.CustomOverlay(options);
    }
    CustomOverlay.prototype.setMap = function (map_or_roadview) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMap(map_or_roadview);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    CustomOverlay.prototype.getMap = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    };
    CustomOverlay.prototype.setPosition = function (position) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setPosition(position);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    CustomOverlay.prototype.getPosition = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        var res = this.object.getPosition();
        return res;
    };
    CustomOverlay.prototype.setContent = function (content) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setContent(content);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    CustomOverlay.prototype.getContent = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        var res = this.object.getContent();
        return res;
    };
    CustomOverlay.prototype.setZIndex = function (zIndex) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setZIndex(zIndex);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    CustomOverlay.prototype.setVisible = function (visible) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setVisible(visible);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    CustomOverlay.prototype.getVisible = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getVisible();
    };
    CustomOverlay.prototype.getZIndex = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    };
    CustomOverlay.prototype.setAltitude = function (altitude) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setAltitude(altitude);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    CustomOverlay.prototype.getAltitude = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getAltitude();
    };
    CustomOverlay.prototype.setRange = function (range) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setRange(range);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    CustomOverlay.prototype.getRange = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getRange();
    };
    return CustomOverlay;
}());
var InfoWindow = /** @class */ (function () {
    function InfoWindow(options) {
        return this.object = new daum.maps.InfoWindow(options);
    }
    InfoWindow.prototype.open = function (map_or_roadview, marker) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.open(map_or_roadview, marker);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    InfoWindow.prototype.close = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.close();
    };
    InfoWindow.prototype.getMap = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    };
    InfoWindow.prototype.setPosition = function (position) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setPosition(position);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    InfoWindow.prototype.getPosition = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        var res = this.object.getPosition();
        return res;
    };
    InfoWindow.prototype.setContent = function (content) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setContent(content);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    InfoWindow.prototype.getContent = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        var res = this.object.getContent();
        return res;
    };
    InfoWindow.prototype.setZIndex = function (zIndex) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setZIndex(zIndex);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    InfoWindow.prototype.getZIndex = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    };
    InfoWindow.prototype.setAltitude = function (altitude) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setAltitude(altitude);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    InfoWindow.prototype.getAltitude = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getAltitude();
    };
    InfoWindow.prototype.setRange = function (range) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setRange(range);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    InfoWindow.prototype.getRange = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getRange();
    };
    return InfoWindow;
}());
var LatLngBounds = /** @class */ (function () {
    function LatLngBounds(sw, ne) {
        return this.object = new daum.maps.LatLngBounds(sw, ne);
    }
    LatLngBounds.prototype.getSouthWest = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        var res = this.object.getSouthWest();
        return res;
    };
    LatLngBounds.prototype.getNorthEast = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        var res = this.object.getNorthEast();
        return res;
    };
    LatLngBounds.prototype.equals = function (latlngBounds) {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.equals(latlngBounds);
    };
    LatLngBounds.prototype.toString = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.toString();
    };
    LatLngBounds.prototype.isEmpty = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.isEmpty();
    };
    LatLngBounds.prototype.extend = function (latlng) {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.extend(latlng);
    };
    LatLngBounds.prototype.contain = function (latlng) {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.contain(latlng);
    };
    return LatLngBounds;
}());
var MapTypeControl = /** @class */ (function () {
    function MapTypeControl() {
        return this.object = new daum.maps.MapTypeControl();
    }
    return MapTypeControl;
}());
var Marker = /** @class */ (function () {
    function Marker(options) {
        return this.object = new daum.maps.Marker(options);
    }
    Marker.prototype.setMap = function (map_or_roadview) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMap(map_or_roadview);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Marker.prototype.getMap = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    };
    Marker.prototype.setImage = function (image) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setImage(image);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Marker.prototype.getImage = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getImage();
    };
    Marker.prototype.setPosition = function (position) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setPosition(position);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Marker.prototype.getPosition = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        var res = this.object.getPosition();
        return res;
    };
    Marker.prototype.setZIndex = function (zIndex) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setZIndex(zIndex);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Marker.prototype.getZIndex = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    };
    Marker.prototype.setVisible = function (visible) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setVisible(visible);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Marker.prototype.getVisible = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getVisible();
    };
    Marker.prototype.setTitle = function (title) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setTitle(title);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Marker.prototype.getTitle = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getTitle();
    };
    Marker.prototype.setDraggable = function (draggable) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setDraggable(draggable);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Marker.prototype.getDraggable = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getDraggable();
    };
    Marker.prototype.setClickable = function (clickable) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setClickable(clickable);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Marker.prototype.getClickable = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getClickable();
    };
    Marker.prototype.setAltitude = function (altitude) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setAltitude(altitude);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Marker.prototype.getAltitude = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getAltitude();
    };
    Marker.prototype.setRange = function (range) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setRange(range);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Marker.prototype.getRange = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getRange();
    };
    Marker.prototype.setOpacity = function (opacity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setOpacity(opacity);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Marker.prototype.getOpacity = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getOpacity();
    };
    return Marker;
}());
var MarkerImage = /** @class */ (function () {
    function MarkerImage(src, size, options) {
        return this.object = new daum.maps.MarkerImage(src, size, options);
    }
    return MarkerImage;
}());
var Point = /** @class */ (function () {
    function Point(x, y) {
        return this.object = new daum.maps.Point(x, y);
    }
    Point.prototype.equals = function (point) {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.equals(point);
    };
    Point.prototype.toString = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.toString();
    };
    return Point;
}());
var Polygon = /** @class */ (function () {
    function Polygon(options) {
        return this.object = new daum.maps.Polygon(options);
    }
    Polygon.prototype.setMap = function (map) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMap(map);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Polygon.prototype.getMap = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    };
    Polygon.prototype.setZIndex = function (zIndex) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setZIndex(zIndex);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Polygon.prototype.getZIndex = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    };
    Polygon.prototype.setOptions = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setOptions(options);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Polygon.prototype.setPath = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setPath(path);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Polygon.prototype.getPath = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getPath();
    };
    Polygon.prototype.getLength = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getLength();
    };
    Polygon.prototype.getArea = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getArea();
    };
    return Polygon;
}());
var Polyline = /** @class */ (function () {
    function Polyline(options) {
        return this.object = new daum.maps.Polyline(options);
    }
    Polyline.prototype.setMap = function (map) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMap(map);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Polyline.prototype.getMap = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    };
    Polyline.prototype.setZIndex = function (zIndex) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setZIndex(zIndex);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Polyline.prototype.getZIndex = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    };
    Polyline.prototype.setOptions = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setOptions(options);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Polyline.prototype.setPath = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setPath(path);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Polyline.prototype.getPath = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getPath();
    };
    Polyline.prototype.getLength = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getLength();
    };
    return Polyline;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(options) {
        return this.object = new daum.maps.Rectangle(options);
    }
    Rectangle.prototype.setMap = function (map) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMap(map);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Rectangle.prototype.getMap = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    };
    Rectangle.prototype.setZIndex = function (zIndex) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setZIndex(zIndex);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Rectangle.prototype.getZIndex = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    };
    Rectangle.prototype.setOptions = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setOptions(options);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Rectangle.prototype.setBounds = function (bounds) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setBounds(bounds);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Rectangle.prototype.getBounds = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getBounds();
    };
    return Rectangle;
}());
var Roadview = /** @class */ (function () {
    function Roadview(container, options) {
        return (this.object = new daum.maps.Roadview(container, options));
    }
    Roadview.prototype.setPanoId = function (panoId, position) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setPanoId(panoId, position);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Roadview.prototype.getPanoId = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getPanoId();
    };
    Roadview.prototype.setViewpoint = function (viewpoint) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setViewpoint(viewpoint);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Roadview.prototype.getViewpoint = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getViewpoint();
    };
    Roadview.prototype.getViewpointWithPanoId = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getViewpointWithPanoId();
    };
    Roadview.prototype.getPosition = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getPosition();
    };
    Roadview.prototype.relayout = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.relayout();
    };
    return Roadview;
}());
var RoadviewClient = /** @class */ (function () {
    function RoadviewClient() {
        return (this.object = new daum.maps.RoadviewClient());
    }
    RoadviewClient.prototype.getNearestPanoId = function (position, radius, callback) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getNearestPanoId(position, radius, function (res) {
            if (callback) {
                callback(res);
            }
        });
    };
    return RoadviewClient;
}());
var RoadviewOverlay = /** @class */ (function () {
    function RoadviewOverlay() {
        return (this.object = new daum.maps.RoadviewOverlay());
    }
    RoadviewOverlay.prototype.setMap = function (map) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMap(map);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    RoadviewOverlay.prototype.getMap = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    };
    return RoadviewOverlay;
}());
var Size = /** @class */ (function () {
    function Size(width, height) {
        return this.object = new daum.maps.Size(width, height);
    }
    Size.prototype.equals = function (size) {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.equals(size);
    };
    Size.prototype.toString = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.toString();
    };
    return Size;
}());
var StaticMap = /** @class */ (function () {
    function StaticMap(container, options) {
        return this.object = new daum.maps.StaticMap(container, options);
    }
    StaticMap.prototype.setCenter = function (latlng) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setCenter(latlng);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    StaticMap.prototype.getCenter = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getCenter();
    };
    StaticMap.prototype.setLevel = function (level) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setLevel(level);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    StaticMap.prototype.getLevel = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        var res = this.object.getLevel();
        return res;
    };
    StaticMap.prototype.setMapTypeId = function (mapTypeId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMapTypeId(mapTypeId);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    StaticMap.prototype.getMapTypeId = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        var res = this.object.getMapTypeId();
        return res;
    };
    return StaticMap;
}());
var Tileset = /** @class */ (function () {
    function Tileset(width, height, urlFunc, copyright, dark, minZoom, maxZoom) {
        return this.object = new daum.maps.Tileset(width, height, urlFunc, copyright, dark, minZoom, maxZoom);
    }
    Tileset.prototype.add = function (id, tileset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.APIKEY_ERROR);
                }
                _this.object.add(id, tileset);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    return Tileset;
}());
var TilesetCopyright = /** @class */ (function () {
    function TilesetCopyright(msg, shortMsg, minZoom) {
        return this.object = new daum.maps.TilesetCopyright(msg, shortMsg, minZoom);
    }
    return TilesetCopyright;
}());
var Viewpoint = /** @class */ (function () {
    function Viewpoint(pan, tilt, zoom, panoId) {
        this.pan = pan;
        this.tilt = tilt;
        this.zoom = zoom;
        this.panoId = panoId;
        return (this.object = new daum.maps.Viewpoint(pan, tilt, zoom, panoId));
    }
    return Viewpoint;
}());
var ZoomControl = /** @class */ (function () {
    function ZoomControl() {
        return this.object = new daum.maps.ZoomControl();
    }
    return ZoomControl;
}());
var MarkerClusterer = /** @class */ (function () {
    function MarkerClusterer(options) {
        return (this.object = new daum.maps.MarkerClusterer(options));
    }
    MarkerClusterer.prototype.addMarker = function (marker, nodraw) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.addMarker(marker, nodraw);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    MarkerClusterer.prototype.addMarkers = function (markers, nodraw) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.addMarker(markers, nodraw);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    MarkerClusterer.prototype.removeMarker = function (marker, nodraw) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.removeMarker(marker, nodraw);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    MarkerClusterer.prototype.removeMarkers = function (markers, nodraw) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.removeMarkers(markers, nodraw);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    MarkerClusterer.prototype.clear = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.clear();
    };
    MarkerClusterer.prototype.redraw = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.redraw();
    };
    MarkerClusterer.prototype.setGridSize = function (size) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setGridSize(size);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    MarkerClusterer.prototype.getGridSize = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getGridSize();
    };
    MarkerClusterer.prototype.setMinClusterSize = function (size) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMinClusterSize(size);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    MarkerClusterer.prototype.getMinClusterSize = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getMinClusterSize();
    };
    MarkerClusterer.prototype.setAverageCenter = function (bool) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setAverageCenter(bool);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    MarkerClusterer.prototype.getAverageCenter = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getAverageCenter();
    };
    MarkerClusterer.prototype.setMinLevel = function (level) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMinLevel(level);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    MarkerClusterer.prototype.getMinLevel = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getMinLevel();
    };
    MarkerClusterer.prototype.setTexts = function (texts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setTexts(texts);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    MarkerClusterer.prototype.getTexts = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getTexts();
    };
    MarkerClusterer.prototype.setCalculator = function (calculator) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setCalculator(calculator);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    MarkerClusterer.prototype.getCalculator = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getCalculator();
    };
    MarkerClusterer.prototype.setStyles = function (styles) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setStyles(styles);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    MarkerClusterer.prototype.getStyles = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getStyles();
    };
    return MarkerClusterer;
}());
var DrawingManager = /** @class */ (function () {
    function DrawingManager(options) {
        return (this.object = new daum.maps.drawing.DrawingManager(options));
    }
    DrawingManager.prototype.setStyle = function (type, prop, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setStyle(type, prop, value);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    DrawingManager.prototype.setStrokeWeight = function (strokeWeight) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setStrokeWeight(strokeWeight);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    DrawingManager.prototype.setStrokeColor = function (strokeColor) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setStrokeColor(strokeColor);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    DrawingManager.prototype.select = function (type, index) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.select(type, index);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    DrawingManager.prototype.cancel = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.cancel();
    };
    DrawingManager.prototype.undo = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.undo();
    };
    DrawingManager.prototype.redo = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.redo();
    };
    DrawingManager.prototype.undoable = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.undoable();
    };
    DrawingManager.prototype.redoable = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.redoable();
    };
    DrawingManager.prototype.getData = function (types) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getData(types);
    };
    DrawingManager.prototype.getOverlays = function (types) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getOverlays(types);
    };
    DrawingManager.prototype.put = function (overlayType, param1, param2) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.put(overlayType, param1, param2);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    DrawingManager.prototype.remove = function (overlay) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.remove(overlay);
    };
    DrawingManager.prototype.addListeners = function (types, handler) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        if (types == null || types.length == 0) {
            throw new Error('events array is null or empty.');
        }
        var _loop_2 = function (type) {
            this_1.object.addListener(type, function (res) {
                if (handler) {
                    handler({ type: type, response: res });
                }
            });
        };
        var this_1 = this;
        try {
            for (var types_3 = __values(types), types_3_1 = types_3.next(); !types_3_1.done; types_3_1 = types_3.next()) {
                var type = types_3_1.value;
                _loop_2(type);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (types_3_1 && !types_3_1.done && (_a = types_3.return)) _a.call(types_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var e_3, _a;
    };
    DrawingManager.prototype.addListener = function (type, handler) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.addListener(type, function (res) {
            if (handler) {
                handler({ type: type, response: res });
            }
        });
    };
    return DrawingManager;
}());
var Toolbox = /** @class */ (function () {
    function Toolbox(options) {
        return (this.object = new daum.maps.drawing.Toolbox(options));
    }
    Toolbox.prototype.getElement = function () {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getElement();
    };
    return Toolbox;
}());
var Geocoder = /** @class */ (function () {
    function Geocoder() {
        return (this.object = new daum.maps.services.Geocoder());
    }
    Geocoder.prototype.addressSearch = function (addr, callback, options) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.addressSearch(addr, callback, options);
    };
    Geocoder.prototype.coord2Address = function (x, y, callback, options) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.coord2Address(x, y, callback, options);
    };
    Geocoder.prototype.coord2RegionCode = function (x, y, callback, options) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.coord2RegionCode(x, y, callback, options);
    };
    Geocoder.prototype.transCoord = function (x, y, callback, options) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.transCoord(x, y, callback, options);
    };
    return Geocoder;
}());
var Places = /** @class */ (function () {
    function Places(map) {
        return (this.object = new daum.maps.services.Places(map));
    }
    Places.prototype.setMap = function (map) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                _this.object.setMap(map);
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    Places.prototype.keywordSearch = function (keyword, callback, options) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.keywordSearch(keyword, callback, options);
    };
    Places.prototype.categorySearch = function (code, callback, options) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.categorySearch(code, callback, options);
    };
    return Places;
}());

exports.KakaoMapsModule = KakaoMapsModule;
exports.AbstractOverlay = AbstractOverlay;
exports.Circle = Circle;
exports.KakaoConstants = KakaoConstants;
exports.OverlayType = OverlayType;
exports.Status = Status;
exports.SortBy = SortBy;
exports.Coords = Coords;
exports.MapTypeId = MapTypeId;
exports.OverlayMapTypeId = OverlayMapTypeId;
exports.ControlPosition = ControlPosition;
exports.CopyrightPosition = CopyrightPosition;
exports.CustomOverlay = CustomOverlay;
exports.InfoWindow = InfoWindow;
exports.KakaoMap = KakaoMap;
exports.LatLng = LatLng;
exports.LatLngBounds = LatLngBounds;
exports.MapTypeControl = MapTypeControl;
exports.Marker = Marker;
exports.MarkerImage = MarkerImage;
exports.Point = Point;
exports.Polygon = Polygon;
exports.Polyline = Polyline;
exports.Rectangle = Rectangle;
exports.Roadview = Roadview;
exports.RoadviewClient = RoadviewClient;
exports.RoadviewOverlay = RoadviewOverlay;
exports.Size = Size;
exports.StaticMap = StaticMap;
exports.Tileset = Tileset;
exports.TilesetCopyright = TilesetCopyright;
exports.Viewpoint = Viewpoint;
exports.ZoomControl = ZoomControl;
exports.MarkerClusterer = MarkerClusterer;
exports.KakaoMapsComponent = KakaoMapsComponent;
exports.DrawingManager = DrawingManager;
exports.Toolbox = Toolbox;
exports.Geocoder = Geocoder;
exports.Places = Places;
exports.KakaoMapsProvider = KakaoMapsProvider;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=kakao-maps-sdk.umd.js.map
