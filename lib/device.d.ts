import AbstractDevice from 'zombiebox/zb/device/abstract-device';
import Rect from 'zombiebox/zb/geometry/rect';
import HTML5Video from 'zombiebox/zb/device/common/HTML5-video';
import StatefulHtml5Video from 'zombiebox/zb/device/common/stateful-html5-video';
import LocalStorage from 'zombiebox/zb/device/common/local-storage';
import Info from './info';
import Input from './input';

export default class Device extends AbstractDevice {
  info: Info;
  storage: LocalStorage;
  input: Input;
  constructor();
  init(): void;
  createVideo(rect: Rect): HTML5Video;
  createStatefulVideo(rect: Rect): StatefulHtml5Video;
  getMAC(): string;
  getIP(): string;
  exit(): void;
  setOSDOpacity(value: number): void;
  getOSDOpacity(): number;
  setOSDChromaKey(chromaKey: string): void;
  getOSDChromaKey(): string | null;
  removeOSDChromaKey(): void;
  hasOSDOpacityFeature(): boolean;
  hasOSDAlphaBlendingFeature(): boolean;
  hasOSDChromaKeyFeature(): boolean;
  isUHDSupported(): boolean;
  getEnvironment(): object;
  getLaunchParams(): object;
  static detect(): boolean;
}
