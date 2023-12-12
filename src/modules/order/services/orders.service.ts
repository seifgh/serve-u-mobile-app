import {API_ENDPOINTS} from '@src/constants/api.constant';
import {apiService} from '@src/services/api.service';
import {OrderStoreState} from '@src/store/order/order-store.type';

export const ordersService = {
  sendOrder: async (payload: OrderStoreState['orders'], table: string) => {
    try {
      await apiService.sendHttpRequest({
        endpoint: API_ENDPOINTS.SEND_ORDER,
        body: {
          table,
          details: payload.map(order => ({
            product: order.item.name,
            quantity: order.quantity,
            price: order.item.price,
          })),
          total: payload.reduce(
            (total, value) => total + value.quantity * value.item.price,
            0,
          ),
          status: 'Pending',
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
