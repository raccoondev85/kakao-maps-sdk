import { StaticMapOptions } from "./kakao-maps.constants";
import { LatLng } from "./kakao-maps.LatLng";
export declare class StaticMap {
    private object;
    constructor(container: any, options: StaticMapOptions);
    setCenter(latlng: LatLng): Promise<any>;
    getCenter(): any;
    setLevel(level: number): Promise<any>;
    getLevel(): LatLng;
    setMapTypeId(mapTypeId: any): Promise<any>;
    getMapTypeId(): LatLng;
}
