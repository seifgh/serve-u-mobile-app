import {useRecoilValue} from 'recoil';
import {orderStoreAtom} from './order-store.atom';

export const orderStoreSelectors = {
  useGetState() {
    return useRecoilValue(orderStoreAtom);
  },
  useIsEmpty() {
    return useRecoilValue(orderStoreAtom).orders.length === 0;
  },
  useOrders() {
    return this.useGetState().orders;
  },
  useTotalItems() {
    return this.useOrders().reduce<number>(
      (acc, item) => acc + item.quantity,
      0,
    );
  },
  useTotalPrice() {
    return this.useOrders().reduce<number>(
      (acc, orderItem) => acc + orderItem.item.price * orderItem.quantity,
      0,
    );
  },
  useGetOrderItem(menuItemId: string) {
    return this.useOrders().find(orderItem => orderItem.item.id === menuItemId);
  },
};
