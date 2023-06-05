import React from 'react';

import { composeStory } from '@storybook/react';
import type { Meta, StoryFn } from '@storybook/react';
import { render } from '@testing-library/react';

import type { Step } from './index';

interface Stories {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  default: Meta;

  [x: string]: StoryFn;
}

export const theUserIsOnThePage = (given: Step, stories: unknown) => {
  given(/^the user is on the (.*) page$/, async (page: string) => {
    const StoryPage = (stories as Stories)[page];

    if (!StoryPage) {
      throw new Error(
        `Unable to find the good Story (searching for story name: "${page}"`
      );
    }

    const metaValue = (stories as Stories).default;

    const ComposedStoryPage = composeStory(StoryPage, {
      ...metaValue,
      parameters: {
        ...metaValue.parameters,
      },
    });
    render(<ComposedStoryPage />);
  });
};
