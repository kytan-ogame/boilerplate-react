import { getCurrentLocation } from '@test-utils/render-with-provider';
import { screen, waitFor, within } from '@testing-library/react';

import type { Step } from './index';

const getInput = (type: string, str: string): Element | null => {
  let input: Element | null;

  switch (type) {
    case 'name': {
      input = document.querySelector(`[name="${str}"]`);
      expect(input).not.toBeNull();
      break;
    }
    case 'label': {
      input = screen.queryByLabelText(str);
      break;
    }
    default: {
      input = screen.queryByTestId(str);
      break;
    }
  }
  return input;
};

export const currentLocationIsX = (when: Step) =>
  when(/^the location path is "(.+)"$/, async (pathname: string) => {
    await waitFor(() => {
      const location = getCurrentLocation();
      expect(location!.pathname).toBe(pathname);
    });
  });

export const currentSearchIsX = (when: Step) =>
  when(/^the location search is "(.+)"$/, async (search: string) => {
    await waitFor(() => {
      const location = getCurrentLocation();
      expect(location!.search).toBe(search);
    });
  });

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
export const inputHasValue = (when: Step) => {
  when(
    /^the input with (name|label|testId) "(.*)" has the value "(.*)"$/,
    async (type: 'name' | 'label' | 'testId', str: string, value: string) => {
      await waitFor(() => {
        const input = getInput(type, str);
        expect(input).not.toBeNull();
        expect(input as Element).toHaveValue(value);
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
