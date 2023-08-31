import 'whatwg-fetch';

import { server } from '@mocks/server';
import '@testing-library/jest-dom';

jest.setTimeout(20_000);

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());
