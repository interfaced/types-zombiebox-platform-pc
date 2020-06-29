import AbstractInfo from 'zombiebox/zb/device/abstract-info';
import { Resolution } from 'zombiebox/zb/device/resolutions';

export default class Info extends AbstractInfo {
	constructor();
	type(): string;
	version(): string;
	manufacturer(): string;
	model(): string;
	serialNumber(): string;
	softwareVersion(): string;
	hardwareVersion(): string;
	getPanelResolution(): Resolution;
	osdResolutionType(): Resolution;
	protected _getLocale(): string;
}
