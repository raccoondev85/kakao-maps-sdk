import { TilesetCopyright } from "./kakao-maps.TilesetCopyright";
export declare class Tileset {
    private object;
    constructor(width: number, height: number, urlFunc?: any, copyright?: TilesetCopyright[], dark?: boolean, minZoom?: number, maxZoom?: number);
    add(id: string, tileset: Tileset): Promise<any>;
}
