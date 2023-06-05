require('@testing-library/jest-dom');
require('whatwg-fetch');

jest.setTimeout(20000);

(function failTestsOnConsoleError() {
  let consoleErrorSpy;

  beforeEach(() => {
    consoleErrorSpy = jest.spyOn(console, 'error');
  });
  afterEach(() => {
    expect(consoleErrorSpy).not.toBeCalled();
    consoleErrorSpy.mockClear();
  });
})();
