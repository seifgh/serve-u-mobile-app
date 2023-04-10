import {ComponentBaseProps} from '@src/types';
import {StyledModalProps} from '../styled-modal';

export type BottomDrawerProps = ComponentBaseProps & {
  isVisible?: StyledModalProps['isVisible'];
  onClose?: () => void;
};
