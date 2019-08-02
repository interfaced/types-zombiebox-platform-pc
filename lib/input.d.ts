import AbstractInput from 'zombiebox/zb/device/abstract-input';
import Keys from 'zombiebox/zb/device/input/keys';

export default class Input extends AbstractInput {
  constructor();
  public isPointingDeviceSupported(): boolean;
  public enablePointingDevice(): void;
  public disablePointingDevice(opt_timeout?: number): void;
  protected _createKeysMap(): { [key: number]: Keys };
}