import {OrderStatus} from '@src/constants/enums';
import {OrderItemEntity} from '@src/types';

export type OrderStoreState = {
  orders: OrderItemEntity[];
  status: OrderStatus;
};
