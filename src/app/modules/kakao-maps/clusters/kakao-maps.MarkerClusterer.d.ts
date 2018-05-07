import { MarkerClustererOptions } from './../basic/kakao-maps.constants';
import { Marker } from '../basic/kakao-maps.Marker';
export declare class MarkerClusterer {
    private object;
    constructor(options?: MarkerClustererOptions);
    addMarker(marker: Marker, nodraw?: boolean): Promise<any>;
    addMarkers(markers: Marker[], nodraw?: boolean): Promise<any>;
    removeMarker(marker: Marker, nodraw?: boolean): Promise<any>;
    removeMarkers(markers: Marker[], nodraw?: boolean): Promise<any>;
    clear(): void;
    redraw(): void;
    setGridSize(size: number): Promise<any>;
    getGridSize(): void;
    setMinClusterSize(size: number): Promise<any>;
    getMinClusterSize(): void;
    setAverageCenter(bool: boolean): Promise<any>;
    getAverageCenter(): void;
    setMinLevel(level: number): Promise<any>;
    getMinLevel(): void;
    setTexts(texts: any): Promise<any>;
    getTexts(): void;
    setCalculator(calculator: any): Promise<any>;
    getCalculator(): void;
    setStyles(styles: any): Promise<any>;
    getStyles(): void;
}
