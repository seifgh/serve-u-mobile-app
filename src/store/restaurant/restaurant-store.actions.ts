import {RestaurantEntity} from '@src/types';
import {useSetRecoilState} from 'recoil';
import {orderStoreActions} from '../order';
import {restaurantStoreAtom} from './restaurant-store.atom';

export const restaurantStoreActions = {
  useSetRestaurant: () => {
    const setSate = useSetRecoilState(restaurantStoreAtom);
    return (restaurant: RestaurantEntity) => setSate({restaurant});
  },

  useEmptyRestaurant: () => {
    const setSate = useSetRecoilState(restaurantStoreAtom);
    const emptyOrder = orderStoreActions.useEmptyOrders();
    return () => {
      setSate({restaurant: undefined});
      emptyOrder();
    };
  },
};
