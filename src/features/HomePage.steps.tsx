import { defineFeature, loadFeature } from 'jest-cucumber';
import { fireEvent, render, screen } from '@testing-library/react';
import meta, { Default as HomePageStory } from '../stories/HomePage.stories';
import { composeStory } from '@storybook/react';

const feature = loadFeature('./HomePage.feature', { loadRelativePath: true });

defineFeature(feature, (test) => {
  test('Clicking the button shows success message', ({ given, when, then }) => {
    given('I am on the Home page', () => {
      const ComposedStoryPage = composeStory(HomePageStory, {
        ...meta,
        parameters: {
          ...meta.parameters,
        },
      });
      render(<ComposedStoryPage />);
    });

    when('I click on the button', () => {
      fireEvent.click(screen.getByRole('button'));
    });

    then('I should see a success message', () => {
      expect(screen.getByText('Success message')).toBeVisible();
    });
  });
});
