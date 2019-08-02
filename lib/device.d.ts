import AbstractDevice from 'zombiebox/zb/device/abstract-device';
import Rect from 'zombiebox/zb/geometry/rect';
import HTML5Video from 'zombiebox/zb/device/common/HTML5-video';
import LocalStorage from 'zombiebox/zb/device/common/local-storage';
import Info from './info';
import Input from './input';

export default class Device extends AbstractDevice {
  public info: Info;
  public storage: LocalStorage;
  public input: Input;
  constructor();
  public init(): void;
  public createVideo(rect: Rect): HTML5Video;
  public getMAC(): string;
  public getIP(): string;
  public exit(): void;
  public setOSDOpacity(value: number): void;
  public getOSDOpacity(): number;
  public setOSDChromaKey(chromaKey: string): void;
  public getOSDChromaKey(): string | null;
  public removeOSDChromaKey(): void;
  public hasOSDOpacityFeature(): boolean;
  public hasOSDAlphaBlendingFeature(): boolean;
  public hasOSDChromaKeyFeature(): boolean;
  public isUHDSupported(): boolean;
  public getEnvironment(): object;
  public getLaunchParams(): object;
  public static detect(): boolean;
}
