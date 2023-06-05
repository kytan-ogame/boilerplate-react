import { initialize, mswDecorator } from 'msw-storybook-addon';
import React from 'react';

import Index from '@pages/home';
import type { Meta, StoryFn } from '@storybook/react';
import { withRedux, withThemeProvider } from '@test-utils/decorators';

import * as handlers from '../../../mocks/handlers';

initialize();

export default {
  title: 'Pages/HomePage',
  decorators: [mswDecorator, withRedux, withThemeProvider],
  component: Index,
  parameters: {
    msw: Object.values(handlers),
  },
} as Meta;

const Template: StoryFn = (args) => <Index {...args} />;

export const Default = Template.bind({});
Default.args = {};
