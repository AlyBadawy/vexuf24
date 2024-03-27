import { Modules } from './Modules';

export type LayoutSize = [number, number, number];
export enum LayOut {
  DEFAULT = 'default',
  SUMMARY_LEFT = 'summaryLeft',
  SUMMARY_RIGHT = 'summaryRight',
}

export type UIState = {
  isDarkMode: boolean;
  layOutSizes: LayoutSize;
  layout: LayOut;
  currentModule?: Modules;
};
