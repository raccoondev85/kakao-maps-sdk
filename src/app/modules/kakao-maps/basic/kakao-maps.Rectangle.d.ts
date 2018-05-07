import { RectangleClassOptions, RectangleOptions } from "./kakao-maps.constants";
import { KakaoMap } from "./kakao-maps.KakaoMap";
import { LatLngBounds } from "./kakao-maps.LatLngBounds";
export declare class Rectangle {
    private object;
    constructor(options: RectangleClassOptions);
    setMap(map: KakaoMap): Promise<any>;
    getMap(): any;
    setZIndex(zIndex: number): Promise<any>;
    getZIndex(): any;
    setOptions(options: RectangleOptions): Promise<any>;
    setBounds(bounds: LatLngBounds): Promise<any>;
    getBounds(): any;
}
