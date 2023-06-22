import { autoBindSteps, loadFeature } from 'jest-cucumber';

import * as stories from '@pages/home/tests/home-page.stories';
import { commonStepsDefinition } from '@test-utils/step-functions';

import { stepsDefinition } from './step-functions';

const feature = loadFeature('./home-page.feature', {
  loadRelativePath: true,
});

// will automatically bind good step function with feature steps
// https://github.com/bencompton/jest-cucumber/blob/master/docs/AutomaticStepBinding.md
autoBindSteps([feature], [commonStepsDefinition(stories), stepsDefinition]);
