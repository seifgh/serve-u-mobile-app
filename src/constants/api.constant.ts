//@ts-ignore
import {API_URL} from '@dotenv';
import {ApiEndpoint} from '@src/types';
import {schemaUtil} from '@src/utils/schema.util';

export const API_BASE_URL = `${API_URL}/v1/mobile` as const;

export const API_ENDPOINTS: Record<string, ApiEndpoint> = {
  GET_RESTAURANT: {
    url: '/restaurants/:id',
    method: 'GET',
    urlParamsSchema: {
      id: 'number',
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

console.log(
  schemaUtil.mapRecordBySchema(
    {
      id: '1',
      quantity: 3,
    },
    {
      id: 'string',
      quantity: 'number',
    },
  ),
);
