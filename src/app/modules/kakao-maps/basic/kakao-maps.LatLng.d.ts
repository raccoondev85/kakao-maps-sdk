import { Coords } from "./kakao-maps.Coords";
export declare class LatLng {
    private object;
    constructor(latitude: number, longitude: number);
    getLat(): any;
    getLng(): any;
    equals(latlng: LatLng): any;
    toString(): any;
    toCoords(): Coords;
}
