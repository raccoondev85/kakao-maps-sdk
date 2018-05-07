import { OnInit, SimpleChanges } from '@angular/core';
import { KakaoMapsProvider } from './../kakao-maps.provider';
export declare class KakaoMapsComponent implements OnInit {
    _kakaoMapsProvider: KakaoMapsProvider;
    mapConfig: MapConfig;
    constructor(_kakaoMapsProvider: KakaoMapsProvider);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    setMapConfig(width: number, height: number): void;
    getMapConfig(): {
        width: number;
        height: number;
    };
}
export interface MapConfig {
    width: string;
    height: string;
}
