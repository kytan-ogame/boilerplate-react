import type { Step } from '@test-utils/step-functions';

import { setDefaultValue } from '../../../../mocks/handlers/get-counter-default-value-mock';

export const theGetDefaultCounterValueWillRespond = (then: Step) => {
  then(
    /^the endpoint api\/counter\/default-value will respond "(\d+)"$/,
    async (value: string) => {
      setDefaultValue(Number.parseInt(value));
    }
  );
};
