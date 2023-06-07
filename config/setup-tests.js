require('@testing-library/jest-dom');
require('whatwg-fetch');
const { server } = require('../src/mocks/server');
jest.setTimeout(20000);

let consoleErrorSpy;

beforeAll(() => {
  consoleErrorSpy = jest.spyOn(console, 'error');
  server.listen({ onUnhandledRequest: 'error' });
});
afterEach(() => {
  expect(consoleErrorSpy).not.toBeCalled();
  consoleErrorSpy.mockClear();
  server.resetHandlers();
});
afterAll(() => server.close());
