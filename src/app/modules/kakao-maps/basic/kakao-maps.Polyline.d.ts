import { PolylineOptions, PolylineClassOptions } from "./kakao-maps.constants";
import { LatLng } from "./kakao-maps.LatLng";
import { KakaoMap } from "./kakao-maps.KakaoMap";
export declare class Polyline {
    private object;
    constructor(options: PolylineClassOptions);
    setMap(map: KakaoMap): Promise<any>;
    getMap(): any;
    setZIndex(zIndex: number): Promise<any>;
    getZIndex(): any;
    setOptions(options: PolylineOptions): Promise<any>;
    setPath(path: LatLng[]): Promise<any>;
    getPath(): any;
    getLength(): any;
}
