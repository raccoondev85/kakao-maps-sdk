import { LatLng } from "./kakao-maps.LatLng";
export declare class Coords {
    private object;
    constructor(x: number, y: number);
    getX(): any;
    getY(): any;
    equals(coords: Coords): any;
    toString(): any;
    toLatLng(): LatLng;
}
