import { autoBindSteps, loadFeature } from 'jest-cucumber';

import { commonStepsDefinition } from '@test-utils/step-functions';

import { stepsDefinition } from './step-functions';

const feature = loadFeature('./home-page.feature', {
  loadRelativePath: true,
});

autoBindSteps([feature], [commonStepsDefinition, stepsDefinition]);
