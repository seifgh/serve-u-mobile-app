import {QueryKey} from '@src/constants/enums';
import {RestaurantEntity} from '@src/modules/restaurant/types';
import {useQuery} from 'react-query';

export const useCurrentRestaurant = () => {
  const {data} = useQuery<RestaurantEntity>(QueryKey.GET_RESTAURANT);

  return data;
};
