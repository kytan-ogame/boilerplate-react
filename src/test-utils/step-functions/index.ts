import type { DefineStepFunction, StepDefinitions } from 'jest-cucumber';

import * as actions from './actions';
import * as assertions from './assertions';
import * as preconditions from './preconditions';

export type Step = DefineStepFunction;

export const commonStepsDefinition: StepDefinitions = ({ then }) => {
  for (const action of Object.values(actions)) action(then);
  for (const assertion of Object.values(assertions)) assertion(then);
  for (const precondition of Object.values(preconditions)) precondition(then);
};

export default commonStepsDefinition;
