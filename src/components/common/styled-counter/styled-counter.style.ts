import {StyleSheet} from 'react-native';
import {StyledCounterProps} from './styled-counter.type';

export const useStyles = (props: StyledCounterProps) => {
  return StyleSheet.create({
    container: {opacity: props.disabled ? 0.5 : 1},
  });
};
