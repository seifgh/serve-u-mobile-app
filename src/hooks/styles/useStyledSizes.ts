import {
  BOTTOM_TAB_BAR_HEIGHT,
  SCREEN,
  STATUS_BAR_HEIGHT,
  WINDOW,
} from '@src/constants';
import {StyledSizes} from '@src/types';

export const useStyledSizes = (): StyledSizes => {
  const screenHeight = WINDOW.height - STATUS_BAR_HEIGHT;
  const bottomTabBarScreenHeight = screenHeight - BOTTOM_TAB_BAR_HEIGHT;
  return {
    screen: SCREEN,
    window: WINDOW,
    statusBarHeight: STATUS_BAR_HEIGHT,

    bottomTabBarHeight: BOTTOM_TAB_BAR_HEIGHT,
    bottomTabBarScreenHeight,
    screenHeight,
  };
};
