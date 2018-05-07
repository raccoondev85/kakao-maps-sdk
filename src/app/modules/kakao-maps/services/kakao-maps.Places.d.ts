import { KeywordSearchOptions, KakaoCategoryCode } from './../basic/kakao-maps.constants';
import { KakaoMap } from '../basic/kakao-maps.KakaoMap';
export declare class Places {
    private object;
    constructor(map?: KakaoMap);
    setMap(map: KakaoMap): Promise<any>;
    keywordSearch(keyword: string, callback: any, options: KeywordSearchOptions): void;
    categorySearch(code: KakaoCategoryCode, callback: any, options: KeywordSearchOptions): void;
}
