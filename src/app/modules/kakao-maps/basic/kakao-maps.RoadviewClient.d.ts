import { LatLng } from './kakao-maps.LatLng';
export declare class RoadviewClient {
    private object;
    constructor();
    getNearestPanoId(position: LatLng, radius: number, callback: any): void;
}
