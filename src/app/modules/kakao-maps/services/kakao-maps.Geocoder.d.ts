import { AddressSearchOptions, Coord2AddressOptions, Coord2RegionCodeOptions } from './../basic/kakao-maps.constants';
export declare class Geocoder {
    private object;
    constructor();
    addressSearch(addr: string, callback: any, options: AddressSearchOptions): void;
    coord2Address(x: number, y: number, callback: any, options: Coord2AddressOptions): void;
    coord2RegionCode(x: number, y: number, callback: any, options: Coord2RegionCodeOptions): void;
    transCoord(x: number, y: number, callback: any, options: Coord2RegionCodeOptions): void;
}
