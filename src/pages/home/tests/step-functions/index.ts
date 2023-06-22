import type { StepDefinitions } from 'jest-cucumber';

import * as preconditions from './preconditions';

export const stepsDefinition: StepDefinitions = ({ defineStep }) => {
  for (const precondition of Object.values(preconditions))
    precondition(defineStep);
};
