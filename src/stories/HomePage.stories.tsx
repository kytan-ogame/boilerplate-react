import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HomePage from '../pages/HomePage';
import {
  withRedux,
  withThemeProvider,
} from '../../.storybook/.storybook/decorators';

export default {
  title: 'Pages/HomePage',
  decorators: [withRedux, withThemeProvider],
  component: HomePage,
} as Meta;

const Template: StoryFn = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
