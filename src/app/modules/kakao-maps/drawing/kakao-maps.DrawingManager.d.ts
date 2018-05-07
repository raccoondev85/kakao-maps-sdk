import { DrawingManagerOptions, KakaoDrawingEvents } from './../basic/kakao-maps.constants';
import { LatLng } from '../basic/kakao-maps.LatLng';
import { LatLngBounds } from '../basic/kakao-maps.LatLngBounds';
export declare class DrawingManager {
    private object;
    constructor(options: DrawingManagerOptions);
    setStyle(type: any, prop: string, value: string | number): Promise<any>;
    setStrokeWeight(strokeWeight: number): Promise<any>;
    setStrokeColor(strokeColor: string): Promise<any>;
    select(type: any, index: number): Promise<any>;
    cancel(): void;
    undo(): void;
    redo(): void;
    undoable(): void;
    redoable(): void;
    getData(types: any[]): any;
    getOverlays(types: any[]): any;
    put(overlayType: any, param1: LatLng | LatLngBounds | LatLng[] | (LatLng[])[], param2?: number): Promise<any>;
    remove(overlay: any): any;
    addListeners(types: KakaoDrawingEvents[], handler?: any): void;
    addListener(type: KakaoDrawingEvents, handler?: any): void;
}
