import {StoreAtomKey} from '@src/constants/enums';
import {atom} from 'recoil';
import {RestaurantStoreState} from './restaurant-store.type';

export const restaurantStoreAtom = atom<RestaurantStoreState>({
  key: StoreAtomKey.RESTAURANT,
  default: {
    restaurant: undefined,
  },
});
