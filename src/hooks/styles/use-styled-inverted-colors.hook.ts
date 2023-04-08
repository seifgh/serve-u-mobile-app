import {useMemo} from 'react';
import {DARK_INVERTED_COLORS, LIGHT_INVERTED_COLORS} from '../../constants';
import {StyledColors} from '../../types';
import {useColorScheme} from '../react-native';

export const useStyledInvertedColors = (): StyledColors => {
  const color = useColorScheme();
  return useMemo<StyledColors>(() => {
    if (color === 'dark') {
      return {...DARK_INVERTED_COLORS, isDark: true};
    }
    return {...LIGHT_INVERTED_COLORS, isDark: false};
  }, [color]);
};
