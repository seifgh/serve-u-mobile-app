import {Modal, Pressable} from '@src/components';
import React, {FC} from 'react';
import {useStyles} from './styled-modal.style';
import {StyledModalProps} from './styled-modal.type';

const StyledModal: FC<StyledModalProps> = ({
  children,
  animation = 'fade',
  isVisible = false,
  onClose,
  ...props
}) => {
  const styles = useStyles(props);

  return (
    <Modal
      visible={isVisible}
      animationType={animation}
      onRequestClose={onClose}
      statusBarTranslucent
      transparent={props.isTransparent}>
      <Pressable style={styles.container} onPress={onClose}>
        {children}
      </Pressable>
    </Modal>
  );
};

export default StyledModal;
