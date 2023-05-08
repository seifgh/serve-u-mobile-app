import {OrderStatus, StoreAtomKey} from '@src/constants/enums';
import {atom} from 'recoil';
import {OrderStoreState} from './order-store.type';

export const orderStoreAtom = atom<OrderStoreState>({
  key: StoreAtomKey.ORDER,
  default: {
    orders: [],
    status: OrderStatus.WAITING_FOR_REQUEST,
  },
});
