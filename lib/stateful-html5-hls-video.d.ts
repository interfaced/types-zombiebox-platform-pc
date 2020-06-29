import StatefulHtml5Video, {StartPositionState} from 'zombiebox/zb/device/common/stateful-html5-video';
import {ResolutionInfoItem} from 'zombiebox/zb/device/resolutions';

export default class StatefulHtml5HlsVideo extends StatefulHtml5Video {
	constructor(panelResolution: ResolutionInfoItem, appResolution: ResolutionInfoItem);
	protected _hls: any;
	destroy(): any;
	prepare(url: string, options?: {}): any;
	getUrl(): string;
	protected _sourceElement: HTMLSourceElement;
	protected _startPositionState: StartPositionState;
	protected _reapplyStartPosition(): any;
	protected _createHlsObject(config: any): void;
	protected _onHlsEvent(event: string, data: any): void;
	protected _onHlsError(errorObject: any): void;
}
