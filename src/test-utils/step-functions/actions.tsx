import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { Step } from './index';

export const theUserClicksOnButton = (when: Step) =>
  when(/^the user clicks on the button "(.*)"/, async (testId: string) => {
    const btn = screen.getByTestId(testId);
    await userEvent.click(btn);
  });

export const theUserFillTheInput = (when: Step) =>
  when(
    /^the user fill the input with the (name|label|testId) "(.*)" with "(.*)"/,
    async (type: 'name' | 'label' | 'testId', str: string, value: string) => {
      let input: Element;

      switch (type) {
        case 'name': {
          input = document.querySelector(`[name="${str}"]`) as Element;
          expect(input).not.toBeNull();
          break;
        }
        case 'label': {
          input = screen.getByLabelText(str);
          break;
        }
        default: {
          input = screen.getByTestId(str);
          break;
        }
      }
      await userEvent.clear(input);
      await userEvent.type(input, value);
    }
  );
