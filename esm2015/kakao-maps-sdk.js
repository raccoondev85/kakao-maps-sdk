import { Injectable, Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class KakaoConstants {
    /**
     * @param {?} property
     * @param {?} name
     * @return {?}
     */
    static getAPIConstants(property, name) {
        let /** @type {?} */ constant;
        try {
            constant = daum.maps[property][name];
        }
        catch (/** @type {?} */ e) {
            throw new Error(`Cannot find any constant named as "${property}.${name}". Error: ${e}`);
        }
        return constant;
    }
    /**
     * @param {?} library
     * @param {?} property
     * @param {?} name
     * @return {?}
     */
    static getLibraryAPIConstants(library, property, name) {
        let /** @type {?} */ constant;
        try {
            constant = daum.maps[library][property][name];
        }
        catch (/** @type {?} */ e) {
            throw new Error(`Cannot find any constant named as "${library}.${property}.${name}". Error: ${e}`);
        }
        return constant;
    }
}
KakaoConstants.MAP_API_END_POINT_PREFIX = '//dapi.kakao.com/v2/maps/sdk.js?appkey=';
KakaoConstants.MAP_API_END_POINT_LIBRARY_OPTIONS = '&libraries=services,clusterer,drawing&autoload=false';
KakaoConstants.APIKEY_ERROR = 'KakaoMap is not initialized yet, call init(apiKey) first.';
KakaoConstants.MAP_OBJECT_INIT_ERROR = 'Map is not initialized yet.';
class OverlayType {
    /**
     * @return {?}
     */
    static init() {
        try {
            OverlayType.MARKER = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'MARKER');
            OverlayType.RECTANGLE = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'RECTANGLE');
            OverlayType.CIRCLE = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'CIRCLE');
            OverlayType.ELLIPSE = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'ELLIPSE');
            OverlayType.POLYLINE = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'POLYLINE');
            OverlayType.ARROW = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'ARROW');
            OverlayType.POLYGON = KakaoConstants.getLibraryAPIConstants('drawing', 'OverlayType', 'POLYGON');
        }
        catch (/** @type {?} */ e) {
            throw e;
        }
    }
}
OverlayType.MARKER = null;
OverlayType.RECTANGLE = null;
OverlayType.CIRCLE = null;
OverlayType.ELLIPSE = null;
OverlayType.POLYLINE = null;
OverlayType.ARROW = null;
OverlayType.POLYGON = null;
class Status {
    /**
     * @return {?}
     */
    static init() {
        try {
            Status.OK = KakaoConstants.getLibraryAPIConstants('services', 'Status', 'OK');
            Status.ZERO_RESULT = KakaoConstants.getLibraryAPIConstants('services', 'Status', 'ZERO_RESULT');
            Status.ERROR = KakaoConstants.getLibraryAPIConstants('services', 'Status', 'ERROR');
        }
        catch (/** @type {?} */ e) {
            throw e;
        }
    }
}
Status.OK = null;
Status.ZERO_RESULT = null;
Status.ERROR = null;
class SortBy {
    /**
     * @return {?}
     */
    static init() {
        try {
            SortBy.ACCURACY = KakaoConstants.getLibraryAPIConstants('services', 'SortBy', 'ACCURACY');
            SortBy.DISTANCE = KakaoConstants.getLibraryAPIConstants('services', 'SortBy', 'DISTANCE');
        }
        catch (/** @type {?} */ e) {
            throw e;
        }
    }
}
SortBy.ACCURACY = null;
SortBy.DISTANCE = null;
class Coords {
    /**
     * @return {?}
     */
    static init() {
        try {
            Coords.WGS84 = KakaoConstants.getLibraryAPIConstants('services', 'Coords', 'WGS84');
            Coords.WCONGNAMUL = KakaoConstants.getLibraryAPIConstants('services', 'Coords', 'WCONGNAMUL');
            Coords.CONGNAMUL = KakaoConstants.getLibraryAPIConstants('services', 'Coords', 'CONGNAMUL');
            Coords.WTM = KakaoConstants.getLibraryAPIConstants('services', 'Coords', 'WTM');
            Coords.TM = KakaoConstants.getLibraryAPIConstants('services', 'Coords', 'TM');
        }
        catch (/** @type {?} */ e) {
            throw e;
        }
    }
}
Coords.WGS84 = null;
Coords.WCONGNAMUL = null;
Coords.CONGNAMUL = null;
Coords.WTM = null;
Coords.TM = null;
class MapTypeId {
    /**
     * @return {?}
     */
    static init() {
        try {
            MapTypeId.ROADMAP = KakaoConstants.getAPIConstants('MapTypeId', 'ROADMAP');
            MapTypeId.SKYVIEW = KakaoConstants.getAPIConstants('MapTypeId', 'SKYVIEW');
            MapTypeId.HYBRID = KakaoConstants.getAPIConstants('MapTypeId', 'HYBRID');
        }
        catch (/** @type {?} */ e) {
            throw e;
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    static getCustomMapTypeId(id) {
        return KakaoConstants.getAPIConstants('MapTypeId', id);
    }
}
MapTypeId.ROADMAP = null;
MapTypeId.SKYVIEW = null;
MapTypeId.HYBRID = null;
class OverlayMapTypeId {
    /**
     * @return {?}
     */
    static init() {
        try {
            OverlayMapTypeId.ROADVIEW = KakaoConstants.getAPIConstants('MapTypeId', 'ROADVIEW');
            OverlayMapTypeId.OVERLAY = KakaoConstants.getAPIConstants('MapTypeId', 'OVERLAY');
            OverlayMapTypeId.TERRAIN = KakaoConstants.getAPIConstants('MapTypeId', 'TERRAIN');
            OverlayMapTypeId.TRAFFIC = KakaoConstants.getAPIConstants('MapTypeId', 'TRAFFIC');
            OverlayMapTypeId.BICYCLE = KakaoConstants.getAPIConstants('MapTypeId', 'BICYCLE');
            OverlayMapTypeId.BICYCLE_HYBRID = KakaoConstants.getAPIConstants('MapTypeId', 'BICYCLE_HYBRID');
            OverlayMapTypeId.USE_DISTRICT = KakaoConstants.getAPIConstants('MapTypeId', 'USE_DISTRICT');
        }
        catch (/** @type {?} */ e) {
            throw e;
        }
    }
}
OverlayMapTypeId.ROADVIEW = null;
OverlayMapTypeId.OVERLAY = null;
OverlayMapTypeId.TERRAIN = null;
OverlayMapTypeId.TRAFFIC = null;
OverlayMapTypeId.BICYCLE = null;
OverlayMapTypeId.BICYCLE_HYBRID = null;
OverlayMapTypeId.USE_DISTRICT = null;
class ControlPosition {
    /**
     * @return {?}
     */
    static init() {
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
        catch (/** @type {?} */ e) {
            throw e;
        }
    }
}
ControlPosition.TOP = null;
ControlPosition.TOPLEFT = null;
ControlPosition.TOPRIGHT = null;
ControlPosition.LEFT = null;
ControlPosition.RIGHT = null;
ControlPosition.BOTTOMLEFT = null;
ControlPosition.BOTTOM = null;
ControlPosition.BOTTOMRIGHT = null;
class CopyrightPosition {
    /**
     * @return {?}
     */
    static init() {
        try {
            CopyrightPosition.BOTTOMLEFT = KakaoConstants.getAPIConstants('CopyrightPosition', 'BOTTOMLEFT');
            CopyrightPosition.BOTTOMRIGHT = KakaoConstants.getAPIConstants('CopyrightPosition', 'BOTTOMRIGHT');
        }
        catch (/** @type {?} */ e) {
            throw e;
        }
    }
}
CopyrightPosition.BOTTOMLEFT = null;
CopyrightPosition.BOTTOMRIGHT = null;
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LatLng {
    /**
     * @param {?} latitude
     * @param {?} longitude
     */
    constructor(latitude, longitude) {
        return this.object = new daum.maps.LatLng(latitude, longitude);
    }
    /**
     * @return {?}
     */
    getLat() {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.getLat();
    }
    /**
     * @return {?}
     */
    getLng() {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.getLng();
    }
    /**
     * @param {?} latlng
     * @return {?}
     */
    equals(latlng) {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.equals(latlng);
    }
    /**
     * @return {?}
     */
    toString() {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.toString();
    }
    /**
     * @return {?}
     */
    toCoords() {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        let /** @type {?} */ res = this.object.toCoords();
        return res;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class KakaoMap {
    /**
     * @param {?} container
     * @param {?} options
     */
    constructor(container, options) {
        return (this.object = new daum.maps.Map(container, options));
    }
    /**
     * @param {?} latlng
     * @return {?}
     */
    setCenter(latlng) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setCenter(latlng);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getCenter() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getCenter();
    }
    /**
     * @param {?} level
     * @param {?=} options
     * @return {?}
     */
    setLevel(level, options) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                if (options == null) {
                    this.object.setLevel(level);
                }
                else {
                    this.object.setLevel(level, options);
                }
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getLevel() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getLevel();
    }
    /**
     * @param {?} mapTypeId
     * @return {?}
     */
    setMapTypeId(mapTypeId) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMapTypeId(mapTypeId);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getMapTypeId() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMapTypeId();
    }
    /**
     * @param {?} bounds
     * @param {?=} paddingTop
     * @param {?=} paddingRight
     * @param {?=} paddingBottom
     * @param {?=} paddingLeft
     * @return {?}
     */
    setBounds(bounds, paddingTop, paddingRight, paddingBottom, paddingLeft) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                if (paddingLeft) {
                    this.object.setBounds(bounds, paddingTop, paddingRight, paddingBottom, paddingLeft);
                }
                else if (paddingBottom) {
                    this.object.setBounds(bounds, paddingTop, paddingRight, paddingBottom);
                }
                else if (paddingRight) {
                    this.object.setBounds(bounds, paddingTop, paddingRight);
                }
                else if (paddingTop) {
                    this.object.setBounds(bounds, paddingTop);
                }
                else {
                    this.object.setBounds(bounds);
                }
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getBounds() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getBounds();
    }
    /**
     * @param {?} minLevel
     * @return {?}
     */
    setMinLevel(minLevel) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMinLevel(minLevel);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} maxLevel
     * @return {?}
     */
    setMaxLevel(maxLevel) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMaxLevel(maxLevel);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} dx
     * @param {?} dy
     * @return {?}
     */
    panBy(dx, dy) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.panBy(dx, dy);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} latlng_or_bounds
     * @param {?} padding
     * @return {?}
     */
    panTo(latlng_or_bounds, padding) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                if (padding) {
                    this.object.panTo(latlng_or_bounds, padding);
                }
                else {
                    this.object.panTo(latlng_or_bounds);
                }
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} control
     * @param {?} position
     * @return {?}
     */
    addControl(control, position) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.addControl(control, position);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} control
     * @return {?}
     */
    removeControl(control) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.removeControl(control);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} draggable
     * @return {?}
     */
    setDraggable(draggable) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setDraggable(draggable);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getDraggable() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getDraggable();
    }
    /**
     * @param {?} zoomable
     * @return {?}
     */
    setZoomable(zoomable) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setZoomable(zoomable);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getZoomable() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZoomable();
    }
    /**
     * @return {?}
     */
    relayout() {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.relayout();
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} mapTypeId
     * @return {?}
     */
    addOverlayMapTypeId(mapTypeId) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.addOverlayMapTypeId(mapTypeId);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} mapTypeId
     * @return {?}
     */
    removeOverlayMapTypeId(mapTypeId) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.removeOverlayMapTypeId(mapTypeId);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} active
     * @return {?}
     */
    setKeyboardShortcuts(active) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setKeyboardShortcuts(active);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getKeyboardShortcuts() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getKeyboardShortcuts();
    }
    /**
     * @param {?} copyrightPosition
     * @param {?} reversed
     * @return {?}
     */
    setCopyrightPosition(copyrightPosition, reversed) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                if (reversed) {
                    this.object.setCopyrightPosition(copyrightPosition, reversed);
                }
                else {
                    this.object.setCopyrightPosition(copyrightPosition);
                }
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getProjection() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getProjection();
    }
    /**
     * @param {?} style
     * @return {?}
     */
    setCursor(style) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setCursor(style);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class KakaoMapsProvider {
    constructor() { }
    /**
     * @param {?} apiKey
     * @return {?}
     */
    loadKakaoMapSDK(apiKey) {
        return new Promise((resolve, reject) => {
            try {
                if (apiKey == null) {
                    let /** @type {?} */ e = new Error('apiKey must be required.');
                    throw e;
                }
                console.log('--> preparing to Kakao Javascript SDK load...');
                let /** @type {?} */ node = document.createElement('script');
                node.src = KakaoConstants.MAP_API_END_POINT_PREFIX + apiKey + KakaoConstants.MAP_API_END_POINT_LIBRARY_OPTIONS; // insert url in between quotes
                node.type = 'text/javascript';
                // node.async = true;
                document.getElementsByTagName('head')[0].appendChild(node);
                setTimeout(() => {
                    try {
                        daum.maps.load(() => {
                            try {
                                this.constantInit();
                                console.log('--> completed to load Kakao Javascript SDK.]');
                                resolve();
                            }
                            catch (/** @type {?} */ e) {
                                console.error(e);
                                reject(e);
                            }
                        });
                    }
                    catch (/** @type {?} */ e) {
                        console.error(e);
                        reject(e);
                    }
                }, 100);
            }
            catch (/** @type {?} */ e) {
                console.error(e);
                reject(e);
            }
        });
    }
    /**
     * @param {?} containerId
     * @param {?=} mapOptions
     * @return {?}
     */
    init(containerId, mapOptions) {
        return new Promise((resolve, reject) => {
            try {
                this._container = document.getElementById(containerId);
                this._mapInstance = new KakaoMap(this._container, this.safeOp(mapOptions)); //지도 생성 및 객체 리턴
                setTimeout(() => {
                    resolve();
                }, 100);
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    setContainerStyleConfig(width, height) {
        return new Promise((resolve, reject) => {
            try {
                if (this._container == null) {
                    let /** @type {?} */ e = new Error('container is null.');
                    throw e;
                }
                this._container.style.width = width;
                this._container.style.height = height;
                this.getMapInstance().relayout();
                resolve();
            }
            catch (/** @type {?} */ e) {
                // console.warn(e);
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    constantInit() {
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
        catch (/** @type {?} */ e) {
            throw e;
        }
    }
    /**
     * @param {?} mapOptions
     * @return {?}
     */
    safeOp(mapOptions) {
        try {
            let /** @type {?} */ options = {
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
        catch (/** @type {?} */ e) {
            throw e;
        }
    }
    /**
     * @return {?}
     */
    getMapInstance() {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this._mapInstance;
    }
    /**
     * @param {?} target
     * @param {?} types
     * @param {?=} handler
     * @return {?}
     */
    addListeners(target, types, handler) {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        if (types == null || types.length == 0) {
            throw new Error('events array is null or empty.');
        }
        for (let /** @type {?} */ type of types) {
            daum.maps.event.addListener(target, type, (res) => {
                if (handler) {
                    handler({ type: type, response: res });
                }
            });
        }
    }
    /**
     * @param {?} target
     * @param {?} type
     * @param {?=} handler
     * @return {?}
     */
    addListener(target, type, handler) {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        daum.maps.event.addListener(target, type, (res) => {
            if (handler) {
                handler({ type: type, response: res });
            }
        });
    }
    /**
     * @param {?} target
     * @param {?} types
     * @param {?=} handler
     * @return {?}
     */
    removeListeners(target, types, handler) {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        if (types == null || types.length == 0) {
            throw new Error('events array is null or empty.');
        }
        for (let /** @type {?} */ type of types) {
            daum.maps.event.removeListener(target, type, handler);
        }
    }
    /**
     * @param {?} target
     * @param {?} type
     * @param {?=} handler
     * @return {?}
     */
    removeListener(target, type, handler) {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        daum.maps.event.removeListener(target, type, handler);
    }
    /**
     * @param {?} target
     * @param {?} type
     * @param {?} data
     * @return {?}
     */
    trigger(target, type, data) {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        daum.maps.event.trigger(target, type, data);
    }
    /**
     * @return {?}
     */
    preventMap() {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        daum.maps.event.preventMap();
    }
    /**
     * @return {?}
     */
    disableHD() {
        if (this._mapInstance == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        daum.maps.disableHD();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
KakaoMapsProvider.decorators = [
    { type: Injectable },
];
/** @nocollapse */
KakaoMapsProvider.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class KakaoMapsComponent {
    /**
     * @param {?} _kakaoMapsProvider
     */
    constructor(_kakaoMapsProvider) {
        this._kakaoMapsProvider = _kakaoMapsProvider;
        this.mapConfig = { width: '50%', height: '50%' };
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._kakaoMapsProvider.setContainerStyleConfig(changes["mapConfig"].currentValue.width, changes["mapConfig"].currentValue.height).then((res) => {
        }, (err) => { }).catch(() => {
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    ngAfterViewInit() { }
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    setMapConfig(width, height) {
        this.mapConfig.width = width + 'px';
        this.mapConfig.height = height + 'px';
        this._kakaoMapsProvider.setContainerStyleConfig(this.mapConfig.width, this.mapConfig.height);
    }
    /**
     * @return {?}
     */
    getMapConfig() {
        let /** @type {?} */ config = {
            width: Number(this.mapConfig.width.replace('px', '')),
            height: Number(this.mapConfig.height.replace('px', '')),
        };
        return config;
    }
}
KakaoMapsComponent.decorators = [
    { type: Component, args: [{
                selector: 'kakao-maps',
                template: `<div id="kakaomaps-div" [ngStyle]="mapConfig"></div>`,
                styles: [``],
            },] },
];
/** @nocollapse */
KakaoMapsComponent.ctorParameters = () => [
    { type: KakaoMapsProvider, },
];
KakaoMapsComponent.propDecorators = {
    "mapConfig": [{ type: Input },],
};
/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class KakaoMapsModule {
}
KakaoMapsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [KakaoMapsProvider],
                exports: [
                    KakaoMapsComponent
                ],
                declarations: [KakaoMapsComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class AbstractOverlay {
    constructor() {
        return this.object = new daum.maps.AbstractOverlay;
    }
    /**
     * @param {?} map
     * @return {?}
     */
    setMap(map) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMap(map);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getMap() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    }
    /**
     * @return {?}
     */
    getPanels() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getPanels();
    }
    /**
     * @return {?}
     */
    getProjection() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getProjection();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Circle {
    /**
     * @param {?} options
     */
    constructor(options) {
        return this.object = new daum.maps.Circle(options);
    }
    /**
     * @param {?} map
     * @return {?}
     */
    setMap(map) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMap(map);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getMap() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    }
    /**
     * @param {?} zIndex
     * @return {?}
     */
    setZIndex(zIndex) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setZIndex(zIndex);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getZIndex() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setOptions(options);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setPosition(position);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getPosition() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getPosition();
    }
    /**
     * @param {?} radius
     * @return {?}
     */
    setRadius(radius) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setRadius(radius);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getRadius() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getRadius();
    }
    /**
     * @return {?}
     */
    getBounds() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getBounds();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CustomOverlay {
    /**
     * @param {?} options
     */
    constructor(options) {
        return this.object = new daum.maps.CustomOverlay(options);
    }
    /**
     * @param {?} map_or_roadview
     * @return {?}
     */
    setMap(map_or_roadview) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMap(map_or_roadview);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getMap() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setPosition(position);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getPosition() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        let /** @type {?} */ res = this.object.getPosition();
        return res;
    }
    /**
     * @param {?} content
     * @return {?}
     */
    setContent(content) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setContent(content);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getContent() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        let /** @type {?} */ res = this.object.getContent();
        return res;
    }
    /**
     * @param {?} zIndex
     * @return {?}
     */
    setZIndex(zIndex) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setZIndex(zIndex);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    setVisible(visible) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setVisible(visible);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getVisible() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getVisible();
    }
    /**
     * @return {?}
     */
    getZIndex() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    }
    /**
     * @param {?} altitude
     * @return {?}
     */
    setAltitude(altitude) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setAltitude(altitude);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getAltitude() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getAltitude();
    }
    /**
     * @param {?} range
     * @return {?}
     */
    setRange(range) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setRange(range);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getRange() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getRange();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InfoWindow {
    /**
     * @param {?} options
     */
    constructor(options) {
        return this.object = new daum.maps.InfoWindow(options);
    }
    /**
     * @param {?} map_or_roadview
     * @param {?} marker
     * @return {?}
     */
    open(map_or_roadview, marker) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.open(map_or_roadview, marker);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    close() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.close();
    }
    /**
     * @return {?}
     */
    getMap() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setPosition(position);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getPosition() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        let /** @type {?} */ res = this.object.getPosition();
        return res;
    }
    /**
     * @param {?} content
     * @return {?}
     */
    setContent(content) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setContent(content);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getContent() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        let /** @type {?} */ res = this.object.getContent();
        return res;
    }
    /**
     * @param {?} zIndex
     * @return {?}
     */
    setZIndex(zIndex) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setZIndex(zIndex);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getZIndex() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    }
    /**
     * @param {?} altitude
     * @return {?}
     */
    setAltitude(altitude) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setAltitude(altitude);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getAltitude() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getAltitude();
    }
    /**
     * @param {?} range
     * @return {?}
     */
    setRange(range) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setRange(range);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getRange() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getRange();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LatLngBounds {
    /**
     * @param {?} sw
     * @param {?} ne
     */
    constructor(sw, ne) {
        return this.object = new daum.maps.LatLngBounds(sw, ne);
    }
    /**
     * @return {?}
     */
    getSouthWest() {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        let /** @type {?} */ res = this.object.getSouthWest();
        return res;
    }
    /**
     * @return {?}
     */
    getNorthEast() {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        let /** @type {?} */ res = this.object.getNorthEast();
        return res;
    }
    /**
     * @param {?} latlngBounds
     * @return {?}
     */
    equals(latlngBounds) {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.equals(latlngBounds);
    }
    /**
     * @return {?}
     */
    toString() {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.toString();
    }
    /**
     * @return {?}
     */
    isEmpty() {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.isEmpty();
    }
    /**
     * @param {?} latlng
     * @return {?}
     */
    extend(latlng) {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.extend(latlng);
    }
    /**
     * @param {?} latlng
     * @return {?}
     */
    contain(latlng) {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.contain(latlng);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MapTypeControl {
    constructor() {
        return this.object = new daum.maps.MapTypeControl();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Marker {
    /**
     * @param {?} options
     */
    constructor(options) {
        return this.object = new daum.maps.Marker(options);
    }
    /**
     * @param {?} map_or_roadview
     * @return {?}
     */
    setMap(map_or_roadview) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMap(map_or_roadview);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getMap() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    }
    /**
     * @param {?} image
     * @return {?}
     */
    setImage(image) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setImage(image);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getImage() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getImage();
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setPosition(position);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getPosition() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        let /** @type {?} */ res = this.object.getPosition();
        return res;
    }
    /**
     * @param {?} zIndex
     * @return {?}
     */
    setZIndex(zIndex) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setZIndex(zIndex);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getZIndex() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    setVisible(visible) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setVisible(visible);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getVisible() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getVisible();
    }
    /**
     * @param {?} title
     * @return {?}
     */
    setTitle(title) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setTitle(title);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getTitle() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getTitle();
    }
    /**
     * @param {?} draggable
     * @return {?}
     */
    setDraggable(draggable) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setDraggable(draggable);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getDraggable() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getDraggable();
    }
    /**
     * @param {?} clickable
     * @return {?}
     */
    setClickable(clickable) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setClickable(clickable);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getClickable() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getClickable();
    }
    /**
     * @param {?} altitude
     * @return {?}
     */
    setAltitude(altitude) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setAltitude(altitude);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getAltitude() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getAltitude();
    }
    /**
     * @param {?} range
     * @return {?}
     */
    setRange(range) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setRange(range);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getRange() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getRange();
    }
    /**
     * @param {?} opacity
     * @return {?}
     */
    setOpacity(opacity) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setOpacity(opacity);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getOpacity() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getOpacity();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MarkerImage {
    /**
     * @param {?} src
     * @param {?} size
     * @param {?=} options
     */
    constructor(src, size, options) {
        return this.object = new daum.maps.MarkerImage(src, size, options);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Point {
    /**
     * @param {?} x
     * @param {?} y
     */
    constructor(x, y) {
        return this.object = new daum.maps.Point(x, y);
    }
    /**
     * @param {?} point
     * @return {?}
     */
    equals(point) {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.equals(point);
    }
    /**
     * @return {?}
     */
    toString() {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.toString();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Polygon {
    /**
     * @param {?} options
     */
    constructor(options) {
        return this.object = new daum.maps.Polygon(options);
    }
    /**
     * @param {?} map
     * @return {?}
     */
    setMap(map) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMap(map);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getMap() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    }
    /**
     * @param {?} zIndex
     * @return {?}
     */
    setZIndex(zIndex) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setZIndex(zIndex);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getZIndex() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setOptions(options);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} path
     * @return {?}
     */
    setPath(path) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setPath(path);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getPath() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getPath();
    }
    /**
     * @return {?}
     */
    getLength() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getLength();
    }
    /**
     * @return {?}
     */
    getArea() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getArea();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Polyline {
    /**
     * @param {?} options
     */
    constructor(options) {
        return this.object = new daum.maps.Polyline(options);
    }
    /**
     * @param {?} map
     * @return {?}
     */
    setMap(map) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMap(map);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getMap() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    }
    /**
     * @param {?} zIndex
     * @return {?}
     */
    setZIndex(zIndex) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setZIndex(zIndex);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getZIndex() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setOptions(options);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} path
     * @return {?}
     */
    setPath(path) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setPath(path);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getPath() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getPath();
    }
    /**
     * @return {?}
     */
    getLength() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getLength();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Rectangle {
    /**
     * @param {?} options
     */
    constructor(options) {
        return this.object = new daum.maps.Rectangle(options);
    }
    /**
     * @param {?} map
     * @return {?}
     */
    setMap(map) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMap(map);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getMap() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    }
    /**
     * @param {?} zIndex
     * @return {?}
     */
    setZIndex(zIndex) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setZIndex(zIndex);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getZIndex() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getZIndex();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setOptions(options);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} bounds
     * @return {?}
     */
    setBounds(bounds) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setBounds(bounds);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getBounds() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getBounds();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Roadview {
    /**
     * @param {?} container
     * @param {?} options
     */
    constructor(container, options) {
        return (this.object = new daum.maps.Roadview(container, options));
    }
    /**
     * @param {?} panoId
     * @param {?} position
     * @return {?}
     */
    setPanoId(panoId, position) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setPanoId(panoId, position);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getPanoId() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getPanoId();
    }
    /**
     * @param {?} viewpoint
     * @return {?}
     */
    setViewpoint(viewpoint) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setViewpoint(viewpoint);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getViewpoint() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getViewpoint();
    }
    /**
     * @return {?}
     */
    getViewpointWithPanoId() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getViewpointWithPanoId();
    }
    /**
     * @return {?}
     */
    getPosition() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getPosition();
    }
    /**
     * @return {?}
     */
    relayout() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.relayout();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RoadviewClient {
    constructor() {
        return (this.object = new daum.maps.RoadviewClient());
    }
    /**
     * @param {?} position
     * @param {?} radius
     * @param {?} callback
     * @return {?}
     */
    getNearestPanoId(position, radius, callback) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getNearestPanoId(position, radius, (res) => {
            if (callback) {
                callback(res);
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RoadviewOverlay {
    constructor() {
        return (this.object = new daum.maps.RoadviewOverlay());
    }
    /**
     * @param {?} map
     * @return {?}
     */
    setMap(map) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMap(map);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getMap() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getMap();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Size {
    /**
     * @param {?} width
     * @param {?} height
     */
    constructor(width, height) {
        return this.object = new daum.maps.Size(width, height);
    }
    /**
     * @param {?} size
     * @return {?}
     */
    equals(size) {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.equals(size);
    }
    /**
     * @return {?}
     */
    toString() {
        if (this.object == null) {
            throw new Error(KakaoConstants.APIKEY_ERROR);
        }
        return this.object.toString();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StaticMap {
    /**
     * @param {?} container
     * @param {?} options
     */
    constructor(container, options) {
        return this.object = new daum.maps.StaticMap(container, options);
    }
    /**
     * @param {?} latlng
     * @return {?}
     */
    setCenter(latlng) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setCenter(latlng);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getCenter() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getCenter();
    }
    /**
     * @param {?} level
     * @return {?}
     */
    setLevel(level) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setLevel(level);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getLevel() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        let /** @type {?} */ res = this.object.getLevel();
        return res;
    }
    /**
     * @param {?} mapTypeId
     * @return {?}
     */
    setMapTypeId(mapTypeId) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMapTypeId(mapTypeId);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getMapTypeId() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        let /** @type {?} */ res = this.object.getMapTypeId();
        return res;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Tileset {
    /**
     * @param {?} width
     * @param {?} height
     * @param {?=} urlFunc
     * @param {?=} copyright
     * @param {?=} dark
     * @param {?=} minZoom
     * @param {?=} maxZoom
     */
    constructor(width, height, urlFunc, copyright, dark, minZoom, maxZoom) {
        return this.object = new daum.maps.Tileset(width, height, urlFunc, copyright, dark, minZoom, maxZoom);
    }
    /**
     * @param {?} id
     * @param {?} tileset
     * @return {?}
     */
    add(id, tileset) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.APIKEY_ERROR);
                }
                this.object.add(id, tileset);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TilesetCopyright {
    /**
     * @param {?} msg
     * @param {?} shortMsg
     * @param {?} minZoom
     */
    constructor(msg, shortMsg, minZoom) {
        return this.object = new daum.maps.TilesetCopyright(msg, shortMsg, minZoom);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Viewpoint {
    /**
     * @param {?} pan
     * @param {?} tilt
     * @param {?} zoom
     * @param {?=} panoId
     */
    constructor(pan, tilt, zoom, panoId) {
        this.pan = pan;
        this.tilt = tilt;
        this.zoom = zoom;
        this.panoId = panoId;
        return (this.object = new daum.maps.Viewpoint(pan, tilt, zoom, panoId));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ZoomControl {
    constructor() {
        return this.object = new daum.maps.ZoomControl();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MarkerClusterer {
    /**
     * @param {?=} options
     */
    constructor(options) {
        return (this.object = new daum.maps.MarkerClusterer(options));
    }
    /**
     * @param {?} marker
     * @param {?=} nodraw
     * @return {?}
     */
    addMarker(marker, nodraw) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.addMarker(marker, nodraw);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} markers
     * @param {?=} nodraw
     * @return {?}
     */
    addMarkers(markers, nodraw) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.addMarker(markers, nodraw);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} marker
     * @param {?=} nodraw
     * @return {?}
     */
    removeMarker(marker, nodraw) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.removeMarker(marker, nodraw);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} markers
     * @param {?=} nodraw
     * @return {?}
     */
    removeMarkers(markers, nodraw) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.removeMarkers(markers, nodraw);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.clear();
    }
    /**
     * @return {?}
     */
    redraw() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.redraw();
    }
    /**
     * @param {?} size
     * @return {?}
     */
    setGridSize(size) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setGridSize(size);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getGridSize() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getGridSize();
    }
    /**
     * @param {?} size
     * @return {?}
     */
    setMinClusterSize(size) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMinClusterSize(size);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getMinClusterSize() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getMinClusterSize();
    }
    /**
     * @param {?} bool
     * @return {?}
     */
    setAverageCenter(bool) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setAverageCenter(bool);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getAverageCenter() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getAverageCenter();
    }
    /**
     * @param {?} level
     * @return {?}
     */
    setMinLevel(level) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMinLevel(level);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getMinLevel() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getMinLevel();
    }
    /**
     * @param {?} texts
     * @return {?}
     */
    setTexts(texts) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setTexts(texts);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getTexts() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getTexts();
    }
    /**
     * @param {?} calculator
     * @return {?}
     */
    setCalculator(calculator) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setCalculator(calculator);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getCalculator() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getCalculator();
    }
    /**
     * @param {?} styles
     * @return {?}
     */
    setStyles(styles) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setStyles(styles);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    getStyles() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.getStyles();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DrawingManager {
    /**
     * @param {?} options
     */
    constructor(options) {
        return (this.object = new daum.maps.drawing.DrawingManager(options));
    }
    /**
     * @param {?} type
     * @param {?} prop
     * @param {?} value
     * @return {?}
     */
    setStyle(type, prop, value) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setStyle(type, prop, value);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} strokeWeight
     * @return {?}
     */
    setStrokeWeight(strokeWeight) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setStrokeWeight(strokeWeight);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} strokeColor
     * @return {?}
     */
    setStrokeColor(strokeColor) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setStrokeColor(strokeColor);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} type
     * @param {?} index
     * @return {?}
     */
    select(type, index) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.select(type, index);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @return {?}
     */
    cancel() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.cancel();
    }
    /**
     * @return {?}
     */
    undo() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.undo();
    }
    /**
     * @return {?}
     */
    redo() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.redo();
    }
    /**
     * @return {?}
     */
    undoable() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.undoable();
    }
    /**
     * @return {?}
     */
    redoable() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.redoable();
    }
    /**
     * @param {?} types
     * @return {?}
     */
    getData(types) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getData(types);
    }
    /**
     * @param {?} types
     * @return {?}
     */
    getOverlays(types) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getOverlays(types);
    }
    /**
     * @param {?} overlayType
     * @param {?} param1
     * @param {?=} param2
     * @return {?}
     */
    put(overlayType, param1, param2) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.put(overlayType, param1, param2);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} overlay
     * @return {?}
     */
    remove(overlay) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.remove(overlay);
    }
    /**
     * @param {?} types
     * @param {?=} handler
     * @return {?}
     */
    addListeners(types, handler) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        if (types == null || types.length == 0) {
            throw new Error('events array is null or empty.');
        }
        for (let /** @type {?} */ type of types) {
            this.object.addListener(type, (res) => {
                if (handler) {
                    handler({ type: type, response: res });
                }
            });
        }
    }
    /**
     * @param {?} type
     * @param {?=} handler
     * @return {?}
     */
    addListener(type, handler) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.addListener(type, (res) => {
            if (handler) {
                handler({ type: type, response: res });
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Toolbox {
    /**
     * @param {?} options
     */
    constructor(options) {
        return (this.object = new daum.maps.drawing.Toolbox(options));
    }
    /**
     * @return {?}
     */
    getElement() {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        return this.object.getElement();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Geocoder {
    constructor() {
        return (this.object = new daum.maps.services.Geocoder());
    }
    /**
     * @param {?} addr
     * @param {?} callback
     * @param {?} options
     * @return {?}
     */
    addressSearch(addr, callback, options) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.addressSearch(addr, callback, options);
    }
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} callback
     * @param {?} options
     * @return {?}
     */
    coord2Address(x, y, callback, options) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.coord2Address(x, y, callback, options);
    }
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} callback
     * @param {?} options
     * @return {?}
     */
    coord2RegionCode(x, y, callback, options) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.coord2RegionCode(x, y, callback, options);
    }
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} callback
     * @param {?} options
     * @return {?}
     */
    transCoord(x, y, callback, options) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.transCoord(x, y, callback, options);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Places {
    /**
     * @param {?=} map
     */
    constructor(map) {
        return (this.object = new daum.maps.services.Places(map));
    }
    /**
     * @param {?} map
     * @return {?}
     */
    setMap(map) {
        return new Promise((resolve, reject) => {
            try {
                if (this.object == null) {
                    throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
                }
                this.object.setMap(map);
                resolve();
            }
            catch (/** @type {?} */ e) {
                reject(e);
            }
        });
    }
    /**
     * @param {?} keyword
     * @param {?} callback
     * @param {?} options
     * @return {?}
     */
    keywordSearch(keyword, callback, options) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.keywordSearch(keyword, callback, options);
    }
    /**
     * @param {?} code
     * @param {?} callback
     * @param {?} options
     * @return {?}
     */
    categorySearch(code, callback, options) {
        if (this.object == null) {
            throw new Error(KakaoConstants.MAP_OBJECT_INIT_ERROR);
        }
        this.object.categorySearch(code, callback, options);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { KakaoMapsModule, AbstractOverlay, Circle, KakaoConstants, OverlayType, Status, SortBy, Coords, MapTypeId, OverlayMapTypeId, ControlPosition, CopyrightPosition, CustomOverlay, InfoWindow, KakaoMap, LatLng, LatLngBounds, MapTypeControl, Marker, MarkerImage, Point, Polygon, Polyline, Rectangle, Roadview, RoadviewClient, RoadviewOverlay, Size, StaticMap, Tileset, TilesetCopyright, Viewpoint, ZoomControl, MarkerClusterer, KakaoMapsComponent, DrawingManager, Toolbox, Geocoder, Places, KakaoMapsProvider };
//# sourceMappingURL=kakao-maps-sdk.js.map
