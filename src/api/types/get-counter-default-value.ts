export type GetCounterDefaultValueParams = void;
export type CounterDefaultValue = number;
export interface GetCounterDefaultValueResponse {
  content: {
    default_value: CounterDefaultValue;
  };
}
