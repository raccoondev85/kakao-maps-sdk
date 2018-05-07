import { CustomOverlayOptions } from "./kakao-maps.constants";
import { LatLng } from "./kakao-maps.LatLng";
import { KakaoMap } from "./kakao-maps.KakaoMap";
import { Roadview } from "./kakao-maps.Roadview";
import { Viewpoint } from "./kakao-maps.Viewpoint";
export declare class CustomOverlay {
    private object;
    constructor(options: CustomOverlayOptions);
    setMap(map_or_roadview: KakaoMap | Roadview): Promise<any>;
    getMap(): any;
    setPosition(position: LatLng | Viewpoint): Promise<any>;
    getPosition(): LatLng;
    setContent(content: any): Promise<any>;
    getContent(): LatLng;
    setZIndex(zIndex: number): Promise<any>;
    setVisible(visible: boolean): Promise<any>;
    getVisible(): any;
    getZIndex(): any;
    setAltitude(altitude: number): Promise<any>;
    getAltitude(): any;
    setRange(range: number): Promise<any>;
    getRange(): any;
}
