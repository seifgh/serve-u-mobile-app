import {StyleSheet} from 'react-native';
import {useStyledColors} from '../../../../hooks';
import {TabBarButtonProps} from './tab-bar-button.type';

export const useStyles = ({isFocused}: Partial<TabBarButtonProps>) => {
  const styledColors = useStyledColors();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      color: isFocused ? styledColors.primary : styledColors.textGray,
    },
    title: {
      color: isFocused ? styledColors.primary : styledColors.textGray,
    },
  });
};
