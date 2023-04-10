import {ComponentBaseProps, ContainerContentPosition} from '@src/types';
import {ModalProps} from 'react-native';

export type StyledModalProps = ComponentBaseProps & {
  contentPosition?: ContainerContentPosition;
  animation?: ModalProps['animationType'];
  onClose?: ModalProps['onRequestClose'];
  isVisible?: ModalProps['visible'];
  isTransparent?: ModalProps['transparent'];
};
