import {Colors, Without} from '@src/types';
import Toast, {ToastShowParams} from 'react-native-toast-message';

type Params = Without<ToastShowParams, 'type'>;
export const toasterUtil = {
  success(params: Params) {
    this.show('success', params);
  },
  error(params: Params) {
    this.show('error', params);
  },
  primary(params: Params) {
    this.show('primary', params);
  },
  show(type: keyof Colors, params: Params) {
    Toast.show({type, ...params});
  },
};
