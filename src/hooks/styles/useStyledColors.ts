import {useMemo} from 'react';
import {DARK_COLORS, LIGHT_COLORS} from '../../constants';
import {StyledColors} from '../../types';
import {useColorScheme} from '../react-native';

export const useStyledColors = (): StyledColors => {
  const color = useColorScheme();
  return useMemo<StyledColors>(() => {
    if (color === 'dark') {
      return {...DARK_COLORS, isDark: true};
    }
    return {...LIGHT_COLORS, isDark: false};
  }, [color]);
};
