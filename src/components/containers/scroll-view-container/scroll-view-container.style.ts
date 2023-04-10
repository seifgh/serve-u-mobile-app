import {StyleSheet} from 'react-native';
import {ScrollViewContainerProps} from './scroll-view-container.type';

export const useStyles = (props: Partial<ScrollViewContainerProps>) => {
  const {alignContent, justifyContent, alignItems} = props;
  return StyleSheet.create({
    container: {
      height: '100%',
    },
    contentContainer: {
      alignContent,
      justifyContent,
      alignItems,
    },
  });
};
