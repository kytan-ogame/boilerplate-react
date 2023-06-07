import React from 'react';

import Index from '@pages/home';
import type { Meta, StoryFn } from '@storybook/react';
import {
  WithMockedData,
  WithRedux,
  WithThemeProvider,
} from '@test-utils/decorators';

import * as handlers from '../../../mocks/handlers';

export default {
  title: 'Pages/HomePage',
  decorators: [WithMockedData, WithRedux, WithThemeProvider],
  component: Index,
  parameters: {
    msw: Object.values(handlers),
  },
} as Meta;

const Template: StoryFn = (args) => <Index {...args} />;

export const Default = Template.bind({});
Default.args = {};
