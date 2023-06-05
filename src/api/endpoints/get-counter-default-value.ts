import type { Builder } from '../types';
import type {
  CounterDefaultValue,
  GetCounterDefaultValueParams,
  GetCounterDefaultValueResponse,
} from '../types/get-counter-default-value';

export default (builder: Builder) =>
  builder.query<CounterDefaultValue, GetCounterDefaultValueParams>({
    query: () => ({
      url: `/counter/default-value`,
      method: 'GET',
      keepUnusedDataFor: 30,
    }),
    transformResponse: (response: GetCounterDefaultValueResponse) => {
      return response.content.default_value;
    },
  });
