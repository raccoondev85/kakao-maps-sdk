import { CircleClassOptions, CircleOptions } from "./kakao-maps.constants";
import { LatLng } from "./kakao-maps.LatLng";
import { KakaoMap } from "./kakao-maps.KakaoMap";
export declare class Circle {
    private object;
    constructor(options: CircleClassOptions);
    setMap(map: KakaoMap): Promise<any>;
    getMap(): any;
    setZIndex(zIndex: number): Promise<any>;
    getZIndex(): any;
    setOptions(options: CircleOptions): Promise<any>;
    setPosition(position: LatLng): Promise<any>;
    getPosition(): any;
    setRadius(radius: number): Promise<any>;
    getRadius(): any;
    getBounds(): any;
}
