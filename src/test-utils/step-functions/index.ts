import type { DefineStepFunction, StepDefinitions } from 'jest-cucumber';

import * as actions from './actions';
import * as assertions from './assertions';
import * as preconditions from './preconditions';

export type Step = DefineStepFunction;

export const commonStepsDefinition =
  (stories: unknown): StepDefinitions =>
  ({ defineStep }) => {
    for (const action of Object.values(actions)) action(defineStep);
    for (const assertion of Object.values(assertions)) assertion(defineStep);
    for (const precondition of Object.values(preconditions))
      stories && precondition(defineStep, stories);
  };

export default commonStepsDefinition;
