import { LatLng } from './kakao-maps.LatLng';
import { LatLngBounds } from './kakao-maps.LatLngBounds';
import { KakaoMap } from './kakao-maps.KakaoMap';
import { Point } from './kakao-maps.Point';
import { Size } from './kakao-maps.Size';
import { MarkerImage } from './kakao-maps.MarkerImage';
import { Roadview } from './kakao-maps.Roadview';
import { Viewpoint } from './kakao-maps.Viewpoint';
import { Marker } from './kakao-maps.Marker';
export declare class KakaoConstants {
    static readonly MAP_API_END_POINT_PREFIX: string;
    static readonly MAP_API_END_POINT_LIBRARY_OPTIONS: string;
    static readonly APIKEY_ERROR: string;
    static readonly MAP_OBJECT_INIT_ERROR: string;
    static getAPIConstants(property: string, name: string): any;
    static getLibraryAPIConstants(library: string, property: string, name: string): any;
}
export declare class OverlayType {
    static MARKER: any;
    static RECTANGLE: any;
    static CIRCLE: any;
    static ELLIPSE: any;
    static POLYLINE: any;
    static ARROW: any;
    static POLYGON: any;
    static init(): void;
}
export declare class Status {
    static OK: any;
    static ZERO_RESULT: any;
    static ERROR: any;
    static init(): void;
}
export declare class SortBy {
    static ACCURACY: any;
    static DISTANCE: any;
    static init(): void;
}
export declare class Coords {
    static WGS84: any;
    static WCONGNAMUL: any;
    static CONGNAMUL: any;
    static WTM: any;
    static TM: any;
    static init(): void;
}
export declare class MapTypeId {
    static ROADMAP: any;
    static SKYVIEW: any;
    static HYBRID: any;
    static init(): void;
    static getCustomMapTypeId(id: string): any;
}
export declare class OverlayMapTypeId {
    static ROADVIEW: any;
    static OVERLAY: any;
    static TERRAIN: any;
    static TRAFFIC: any;
    static BICYCLE: any;
    static BICYCLE_HYBRID: any;
    static USE_DISTRICT: any;
    static init(): void;
}
export declare class ControlPosition {
    static TOP: any;
    static TOPLEFT: any;
    static TOPRIGHT: any;
    static LEFT: any;
    static RIGHT: any;
    static BOTTOMLEFT: any;
    static BOTTOM: any;
    static BOTTOMRIGHT: any;
    static init(): void;
}
export declare class CopyrightPosition {
    static BOTTOMLEFT: any;
    static BOTTOMRIGHT: any;
    static init(): void;
}
export interface MapOptions {
    center?: LatLng;
    level?: number;
    mapTypeId?: any;
    draggable?: boolean;
    scrollwheel?: boolean;
    disableDoubleClick?: boolean;
    disableDoubleClickZoom?: boolean;
    projectionId?: 'NONE' | 'WCONG';
    tileAnimation?: boolean;
    keyboardShortcuts?: boolean | {
        speed?: number;
    };
}
export interface MarkerOptions {
    map?: KakaoMap | Roadview;
    position?: LatLng | Viewpoint;
    image?: MarkerImage;
    title?: string;
    draggable?: boolean;
    clickable?: boolean;
    zIndex?: number;
    opacity?: number;
    altitude?: number;
    range?: number;
}
export interface MarkerImageOptions {
    alt?: string;
    coords?: string;
    offset?: Point;
    shape?: string;
    spriteOrigin?: Point;
    spriteSize?: Size;
}
export interface InfoWindowOptions {
    content?: any;
    disableAutoPan?: boolean;
    map?: KakaoMap | Roadview;
    position?: LatLng;
    removable?: boolean;
    zIndex?: number;
    altitude?: number;
    range?: number;
}
export interface CustomOverlayOptions {
    clickable?: boolean;
    content?: any;
    map?: KakaoMap | Roadview;
    position?: LatLng;
    xAnchor?: number;
    yAnchor?: number;
    zIndex?: number;
}
export interface PolylineClassOptions {
    map?: KakaoMap;
    endArrow?: boolean;
    path?: LatLng[];
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    zIndex?: number;
}
export interface PolylineOptions {
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
}
export interface PolygonClassOptions {
    map?: KakaoMap;
    path?: LatLng[];
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    fillColor?: string;
    fillOpacity?: number;
    zIndex?: number;
}
export interface PolygonOptions {
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    fillColor?: string;
    fillOpacity?: number;
}
export interface CircleClassOptions {
    map?: KakaoMap;
    center?: LatLng;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    fillColor?: string;
    fillOpacity?: number;
    radius?: number;
    zIndex?: number;
}
export interface CircleOptions {
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    fillColor?: string;
    fillOpacity?: number;
    radius?: number;
}
export interface EllipseClassOptions {
    map?: KakaoMap;
    center?: LatLng;
    rx?: number;
    ry?: number;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    fillColor?: string;
    fillOpacity?: number;
    zIndex?: number;
}
export interface EllipseOptions {
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    fillColor?: string;
    fillOpacity?: number;
}
export interface RectangleClassOptions {
    map?: KakaoMap;
    bounds?: LatLngBounds;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    fillColor?: string;
    fillOpacity?: number;
    zIndex?: number;
}
export interface RectangleOptions {
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    fillColor?: string;
    fillOpacity?: number;
}
export interface RoadviewOptions {
    panoId?: number;
    panoX?: number;
    panoY?: number;
    pan?: number;
    tilt?: number;
    zoom?: number;
}
export interface StaticMapOptions {
    center?: LatLng;
    level?: number;
    mapTypeId?: any;
    marker?: boolean | StaticMapMarkerOptions | StaticMapMarkerOptions[];
}
export interface StaticMapMarkerOptions {
    position?: LatLng;
    text?: string;
}
export interface KeywordSearchOptions {
    category_group_code?: string;
    location?: LatLng;
    x?: number;
    y?: number;
    radius?: number;
    bounds?: LatLngBounds;
    rect?: string;
    size?: number;
    page?: number;
    sort?: any;
    useMapCenter?: boolean;
    useMapBounds?: boolean;
}
export interface AddressSearchOptions {
    page?: number;
    size?: number;
}
export interface Coord2AddressOptions {
    input_coord?: any;
}
export interface Coord2RegionCodeOptions {
    input_coord?: any;
    output_coord?: any;
}
export interface LevelOptions {
    animate?: boolean | {
        duration: number;
    };
    anchor?: LatLng;
}
export interface MarkerClustererOptions {
    map?: KakaoMap;
    markers?: Marker[];
    gridSize?: number;
    averageCenter?: boolean;
    minLevel?: number;
    minClusterSize?: number;
    styles?: any;
    texts?: any;
    calculator?: any;
    disableClickZoom?: boolean;
    clickable?: boolean;
    hoverable?: boolean;
}
export interface DrawingManagerOptions {
    map?: KakaoMap;
    guideTooltip?: string[];
    drawingMode?: any[];
    markerOptions?: DrawingManagerMarkerOptions;
    rectangleOptions?: DrawingManagerRectangleOptions;
    circleOptions?: DrawingManagerCircleOptions;
    ellipseOptions?: DrawingManagerEllipseOptions;
    polylineOptions?: DrawingManagerPolylineOptions;
    arrowOptions?: DrawingManagerArrowOptions;
    polygonOptions?: DrawingManagerPolygonOptions;
}
export interface DrawingManagerMarkerOptions {
    draggable?: boolean;
    removable?: boolean;
    markerImages?: DrawingManagerMarkerImageOptions[];
}
export interface DrawingManagerMarkerImageOptions {
    src?: string;
    width?: number;
    height?: number;
    offsetX?: number;
    offsetY?: number;
    spriteWidth?: string;
    spriteHeight?: number;
    spriteOriginX?: number;
    spriteOriginY?: number;
    shape?: string;
    coords?: string;
    hoverImage?: {
        src?: string;
        width?: number;
        height?: number;
        offsetX?: number;
        offsetY?: number;
        spriteWidth?: string;
        spriteHeight?: number;
        spriteOriginX?: number;
        spriteOriginY?: number;
        shape?: string;
        coords?: string;
    };
    dragImage?: {
        src?: string;
        width?: number;
        height?: number;
        offsetX?: number;
        offsetY?: number;
        spriteWidth?: string;
        spriteHeight?: number;
        spriteOriginX?: number;
        spriteOriginY?: number;
        shape?: string;
        coords?: string;
    };
}
export interface DrawingManagerRectangleOptions {
    draggable?: boolean;
    removable?: boolean;
    editable?: boolean;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    fillColor?: string;
    fillOpacity?: number;
}
export interface DrawingManagerCircleOptions {
    draggable?: boolean;
    removable?: boolean;
    editable?: boolean;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    fillColor?: string;
    fillOpacity?: number;
}
export interface DrawingManagerEllipseOptions {
    draggable?: boolean;
    removable?: boolean;
    editable?: boolean;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    fillColor?: string;
    fillOpacity?: number;
}
export interface DrawingManagerPolylineOptions {
    draggable?: boolean;
    removable?: boolean;
    editable?: boolean;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    hintStrokeStyle?: string;
    hintStrokeOpacity?: number;
}
export interface DrawingManagerArrowOptions {
    draggable?: boolean;
    removable?: boolean;
    editable?: boolean;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    hintStrokeStyle?: string;
    hintStrokeOpacity?: number;
    startArrow?: boolean;
}
export interface DrawingManagerPolygonOptions {
    draggable?: boolean;
    removable?: boolean;
    editable?: boolean;
    strokeWeight?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeStyle?: KakaoStrokeStyles;
    fillColor?: string;
    fillOpacity?: number;
}
export declare type KakaoEvents = 'clusterclick' | 'clusterover' | 'clusterout' | 'clusterdblclick' | 'clusterrightclick' | 'clustered' | 'init' | 'panoid_changed' | 'viewpoint_changed' | 'position_changed' | 'center_changed' | 'zoom_start' | 'zoom_changed' | 'bounds_changed' | 'click' | 'dblclick' | 'rightclick' | 'mousemove' | 'dragstart' | 'drag' | 'dragend' | 'idle' | 'tilesloaded' | 'maptypeid_changed' | string;
export declare type KakaoDrawingEvents = 'select' | 'drawstart' | 'draw' | 'drawend' | 'drawnext' | 'cancel' | 'remove' | 'state_changed' | string;
export declare type KakaoStrokeStyles = 'solid' | 'shortdash' | 'shortdot' | 'shortdashdot' | 'shortdashdotdot' | 'dot' | 'dash' | 'dashdot' | 'longdash' | 'longdashdot' | 'longdashdotdot';
export declare type KakaoCategoryCode = 'MT1' | 'CS2' | 'PS3' | 'SC4' | 'AC5' | 'PK6' | 'OL7' | 'SW8' | 'BK9' | 'CT1' | 'AG2' | 'PO3' | 'AT4' | 'AD5' | 'FD6' | 'CE7' | 'HP8' | 'PM9';
