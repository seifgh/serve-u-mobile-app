//@ts-ignore
import {ApiEndpoint} from '@src/types';

export const API_BASE_URL = `${'http://10.0.2.2:3001'}/api/mobile` as const;
export const API_ENDPOINTS: Record<string, ApiEndpoint> = {
  GET_RESTAURANT: {
    url: '/restaurants/:id',
    method: 'GET',
    urlParamsSchema: {
      id: 'string',
    },
  },
  SEND_ORDER: {
    url: 'http://10.0.2.2:8000/orders',
    method: 'POST',
    bodySchema: {
      table: 'string',
      details: [
        {
          product: 'string',
          quantity: 'number',
          price: 'number',
        },
      ],
      total: 'number',
      status: 'string',
    },
  },
};
