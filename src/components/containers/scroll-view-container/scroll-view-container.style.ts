import {StyleSheet} from 'react-native';
import {ScrollViewContainerProps} from './scroll-view-container.type';

export const useStyles = (props: Partial<ScrollViewContainerProps>) => {
  return StyleSheet.create({
    container: {
      height: '100%',
    },
    contentContainer: {
      alignItems: props.centerContent ? 'center' : 'flex-start',
    },
  });
};
