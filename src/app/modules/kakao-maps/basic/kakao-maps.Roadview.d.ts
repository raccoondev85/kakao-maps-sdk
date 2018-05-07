import { RoadviewOptions } from './kakao-maps.constants';
import { LatLng } from './kakao-maps.LatLng';
import { Viewpoint } from './kakao-maps.Viewpoint';
export declare class Roadview {
    private object;
    constructor(container: any, options: RoadviewOptions);
    setPanoId(panoId: number, position: LatLng): Promise<any>;
    getPanoId(): any;
    setViewpoint(viewpoint: Viewpoint): Promise<any>;
    getViewpoint(): any;
    getViewpointWithPanoId(): any;
    getPosition(): any;
    relayout(): void;
}
