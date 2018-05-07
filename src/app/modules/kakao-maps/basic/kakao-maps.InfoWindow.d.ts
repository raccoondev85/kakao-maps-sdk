import { InfoWindowOptions } from "./kakao-maps.constants";
import { Marker } from "./kakao-maps.Marker";
import { LatLng } from "./kakao-maps.LatLng";
import { KakaoMap } from "./kakao-maps.KakaoMap";
import { Roadview } from "./kakao-maps.Roadview";
import { Viewpoint } from "./kakao-maps.Viewpoint";
export declare class InfoWindow {
    private object;
    constructor(options: InfoWindowOptions);
    open(map_or_roadview: KakaoMap | Roadview, marker: Marker): Promise<any>;
    close(): void;
    getMap(): any;
    setPosition(position: LatLng | Viewpoint): Promise<any>;
    getPosition(): LatLng;
    setContent(content: any): Promise<any>;
    getContent(): LatLng;
    setZIndex(zIndex: number): Promise<any>;
    getZIndex(): any;
    setAltitude(altitude: number): Promise<any>;
    getAltitude(): any;
    setRange(range: number): Promise<any>;
    getRange(): any;
}
