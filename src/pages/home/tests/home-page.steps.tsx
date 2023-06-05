import { defineFeature, loadFeature } from 'jest-cucumber';

import * as stories from '@pages/home/tests/home-page.stories';
import * as common from '@test-utils/step-functions';

import * as stepFunctions from './step-functions';

const feature = loadFeature('./home-page.feature', { loadRelativePath: true });

defineFeature(feature, (test) => {
  test('Clicking the button shows success message', ({ defineStep }) => {
    stepFunctions.preconditions.theGetDefaultCounterValueWillRespond(
      defineStep
    );
    common.preconditions.theUserIsOnThePage(defineStep, stories);
    common.assertions.theSectionIsDisplayed(defineStep);
    common.assertions.theSectionHasTextContent(defineStep);
    common.actions.theUserClicksOnButton(defineStep);
    common.assertions.theSectionHasTextContent(defineStep);
    common.actions.theUserClicksOnButton(defineStep);
    common.assertions.theSectionHasTextContent(defineStep);
  });
});
