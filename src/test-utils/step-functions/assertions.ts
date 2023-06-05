import { screen, waitFor, within } from '@testing-library/react';

import type { Step } from './index';

export const theUserShouldSeeAnErrorMessageInTheSection = (then: Step) =>
  then(
    /^the user should see an error message inside the section "(.*)"$/,
    async (testId: string) => {
      const wrapper = screen.getByTestId(testId);
      const message = within(wrapper).getByRole('alert');
      expect(message.getAttribute('class')).toMatch(/message-error/);
    }
  );

export const theSectionIsDisplayed = (then: Step) => {
  then(/^the section "(.*)" is displayed$/, async (testId: string) => {
    await waitFor(() => {
      expect(screen.getByTestId(testId)).toBeInTheDocument();
    });
  });
};
export const theSectionHasTextContent = (then: Step) => {
  then(
    /^the section "(.*)" has text content "(.*)"/,
    async (testId: string, content: string) => {
      await waitFor(() => {
        expect(screen.getByTestId(testId)).toHaveTextContent(content);
      });
    }
  );
};
export const theSectionIsNotDisplayed = (then: Step) => {
  then(/^the section "(.*)" is not displayed$/, async (testId: string) => {
    await waitFor(() => {
      expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
    });
  });
};

export const theButtonShouldBeDisabled = (then: Step) =>
  then(/^the button "(.+)" should be disabled$/, async (testId: string) => {
    const btn = screen.getByTestId(testId);
    expect(btn).toHaveClass('p-disabled');
  });
