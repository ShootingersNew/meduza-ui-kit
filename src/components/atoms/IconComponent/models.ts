export enum EIconStylesVariable {
  CUSTOM_WIDTH = '--iconCustomWidth',
  CUSTOM_HEIGHT = '--iconCustomHeight',
}

export interface IIconStylesVariables {
  [EIconStylesVariable.CUSTOM_WIDTH]?: string;
  [EIconStylesVariable.CUSTOM_HEIGHT]?: string;
  'fill'?: string;
}
