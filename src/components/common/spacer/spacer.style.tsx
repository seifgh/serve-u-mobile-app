import {StyleSheet} from 'react-native';
import {SpacerProps} from './spacer.type';

export const useStyles = (props: SpacerProps) => {
  return StyleSheet.create({
    container: {
      ...props,
    },
  });
};
