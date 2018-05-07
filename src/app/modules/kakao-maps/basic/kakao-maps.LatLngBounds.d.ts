import { LatLng } from "./kakao-maps.LatLng";
export declare class LatLngBounds {
    private object;
    constructor(sw: LatLng, ne: LatLng);
    getSouthWest(): LatLng;
    getNorthEast(): LatLng;
    equals(latlngBounds: LatLngBounds): any;
    toString(): any;
    isEmpty(): any;
    extend(latlng: LatLng): any;
    contain(latlng: LatLng): any;
}
