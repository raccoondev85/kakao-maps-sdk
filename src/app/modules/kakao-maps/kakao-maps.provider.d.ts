import { MapOptions, KakaoEvents } from './basic/kakao-maps.constants';
import { KakaoMap } from './basic/kakao-maps.KakaoMap';
export declare class KakaoMapsProvider {
    private _event;
    private _mapInstance;
    private _container;
    constructor();
    loadKakaoMapSDK(apiKey: string): Promise<any>;
    init(containerId: string, mapOptions?: MapOptions): Promise<{}>;
    setContainerStyleConfig(width: string, height: string): Promise<any>;
    private constantInit();
    private safeOp(mapOptions);
    getMapInstance(): KakaoMap;
    addListeners(target: any, types: KakaoEvents[], handler?: any): void;
    addListener(target: any, type: KakaoEvents, handler?: any): void;
    removeListeners(target: any, types: KakaoEvents[], handler?: any): void;
    removeListener(target: any, type: KakaoEvents, handler?: any): void;
    trigger(target: any, type: KakaoEvents, data: any): void;
    preventMap(): void;
    disableHD(): void;
    ngOnInit(): void;
}
