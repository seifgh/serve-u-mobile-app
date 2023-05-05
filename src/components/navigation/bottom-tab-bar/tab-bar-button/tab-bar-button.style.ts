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
    badgeContainer: {
      position: 'absolute',
      top: -4,
      left: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: styledColors.primary,
      borderRadius: 1000,
      padding: 8,
      paddingVertical: 2,
    },
    badgeText: {
      fontSize: 10,
    },
  });
};
