import {useStyledColors} from '@src/hooks';
import {StyleSheet} from 'react-native';
import {BottomDrawerProps} from './bottom-drawer.type';

export const useStyles = (_: BottomDrawerProps) => {
  const colors = useStyledColors();
  return StyleSheet.create({
    gestureContainer: {
      width: '100%',
    },
    container: {
      backgroundColor: colors.white,
      width: '100%',
      maxHeight: '100%',
      padding: 12,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    controller: {
      position: 'relative',
      backgroundColor: colors.borderGray,
      height: 8,
      width: 42,
      borderRadius: 24,
      marginBottom: 12,
    },
  });
};
