//@ts-ignore
import {ApiEndpoint} from '@src/types';

export const API_BASE_URL = `${'http://192.168.1.20:3001'}/api/mobile` as const;
export const API_ENDPOINTS: Record<string, ApiEndpoint> = {
  GET_RESTAURANT: {
    url: '/restaurants/:id',
    method: 'GET',
    urlParamsSchema: {
      id: 'string',
    },
  },
  SEND_ORDER: {
    url: '/orders',
    method: 'POST',
    bodySchema: {
      menuItems: [
        {
          id: 'number',
          quantity: 'number',
        },
      ],
    },
  },
};
