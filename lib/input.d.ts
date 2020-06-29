import AbstractInput from 'zombiebox/zb/device/abstract-input';
import Key from 'zombiebox/zb/device/input/key';

export default class Input extends AbstractInput {
	constructor();
	isPointingDeviceSupported(): boolean;
	enablePointingDevice(): void;
	disablePointingDevice(opt_timeout?: number): void;
	eventToKeyCode(e: (KeyboardEvent | WheelEvent)): Key;
	protected _createKeysMap(): { [key: number]: Key };
	protected _serviceKeys: number[];
}
