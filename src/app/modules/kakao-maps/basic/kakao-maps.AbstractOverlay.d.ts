import { KakaoMap } from './kakao-maps.KakaoMap';
export declare abstract class AbstractOverlay {
    private object;
    constructor();
    abstract draw(): any;
    abstract onAdd(): any;
    abstract onRemove(): any;
    setMap(map: KakaoMap): Promise<any>;
    getMap(): any;
    getPanels(): any;
    getProjection(): any;
}
