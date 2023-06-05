import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { Step } from './index';

export const theUserClicksOnButton = (when: Step) =>
  when(/^the user clicks on the button "(.*)"/, async (testId: string) => {
    const btn = screen.getByTestId(testId);
    await userEvent.click(btn);
  });
