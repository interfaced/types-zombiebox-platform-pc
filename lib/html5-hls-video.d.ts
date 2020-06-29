import HTML5Video from 'zombiebox/zb/device/common/HTML5-video';
import Rect from 'zombiebox/zb/geometry/rect';

export default class Html5HlsVideo extends HTML5Video {
	constructor(rect: Rect);
	protected _hls: any;
	protected _hlsEvents: string[];
	destroy(): void;
	getUrl(): string;
	play(url: string, startFrom?: number);
	protected _onHlsEventBound: Function;
	protected _startTime: number;
	protected _initVideoObject(url: string): any;
	protected _video: any;
	protected _removeVideoObject(): void;
	protected _initEvents(): void;
	protected _destroyEvents(): void;
	protected _onHlsEvent(event: string, data: any): void;
	protected _onHlsError(errorObject: any): void;
}
