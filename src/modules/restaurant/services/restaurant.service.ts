import {API_ENDPOINTS} from '@src/constants/api.constant';
import {apiService} from '@src/services/api.service';
import {RestaurantEntity} from '../types';

export const restaurantService = {
  getOne: (id: string) => {
    return apiService.sendHttpRequest<RestaurantEntity>({
      endpoint: API_ENDPOINTS.GET_RESTAURANT,
      urlParams: {id},
    });
  },
};
