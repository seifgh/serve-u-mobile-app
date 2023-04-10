import {useStyledColors} from '@src/hooks';
import {useContainerPositionStyle} from '@src/styles';
import {StyleSheet} from 'react-native';
import {StyledModalProps} from './styled-modal.type';

export const useStyles = (props: Partial<StyledModalProps>) => {
  const styledColors = useStyledColors();
  const {contentPosition = 'center', isTransparent} = props;
  const containerPositionStyles = useContainerPositionStyle(contentPosition);

  return StyleSheet.create({
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backgroundColor: isTransparent
        ? styledColors.modalBackground
        : styledColors.white,
      ...containerPositionStyles,
    },
  });
};
