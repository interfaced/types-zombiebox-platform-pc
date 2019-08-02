import AbstractInfo from 'zombiebox/zb/device/abstract-info';
import { Resolution } from 'zombiebox/zb/device/resolutions';

export default class Info extends AbstractInfo {
  constructor();
  public type(): string;
  public version(): string;
  public manufacturer(): string;
  public model(): string;
  public serialNumber(): string;
  public softwareVersion(): string;
  public hardwareVersion(): string;
  public osdResolutionType(): Resolution;
  protected _getLocale(): string;
}