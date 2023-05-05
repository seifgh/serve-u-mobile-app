import {MenuItemEntity} from '@src/types';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {orderStoreAtom} from './order-store.atom';
import {orderStoreSelectors} from './order-store.selectors';
import {OrderStoreState} from './order-store.type';

export const orderStoreActions = {
  useSetState() {
    return useSetRecoilState(orderStoreAtom);
  },
  useState() {
    return useRecoilState(orderStoreAtom);
  },
  useAddMenuIem() {
    const [state, setState] = this.useState();

    return (menuItem: MenuItemEntity) => {
      const foundOne = state.orders.find(
        order => order.item.id === menuItem.id,
      );
      let newOrders: OrderStoreState['orders'] = [];

      if (foundOne) {
        newOrders = state.orders.map(order => {
          if (order.item.id === menuItem.id) {
            return {
              ...order,
              quantity: order.quantity + 1,
            };
          }
          return order;
        });
      } else {
        newOrders = [
          ...state.orders,
          {
            item: menuItem,
            quantity: 1,
          },
        ];
      }

      setState({
        orders: newOrders,
      });
    };
  },

  useEmptyOrders: () => {
    const setState = useSetRecoilState(orderStoreAtom);
    return () => {
      setState({orders: []});
    };
  },

  useOrderItemActions(menuItemId: string) {
    const setState = this.useSetState();
    const orders = orderStoreSelectors.useOrders();
    const orderItem = orderStoreSelectors.useGetOrderItem(menuItemId);

    return {
      incrementQuantity: () => {
        if (orderItem) {
          setState({
            orders: orders.map(_orderItem => {
              if (_orderItem.item.id === menuItemId) {
                return {
                  ...orderItem,
                  quantity: _orderItem.quantity + 1,
                };
              }
              return _orderItem;
            }),
          });
        }
      },
      decrementQuantity: () => {
        if (orderItem) {
          if (orderItem.quantity === 1) {
            setState({
              orders: orders.filter(_orderItem => {
                return _orderItem.item.id !== menuItemId;
              }),
            });
            return;
          }
          setState({
            orders: orders.map(_orderItem => {
              if (_orderItem.item.id === menuItemId) {
                return {
                  ...orderItem,
                  quantity: _orderItem.quantity - 1,
                };
              }
              return _orderItem;
            }),
          });
        }
      },
    };
  },
};
