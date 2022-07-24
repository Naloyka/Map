import ErrorRepository from '../js/ErrorRepository';

test('error in base', () => {
  const errorCodes = new ErrorRepository();
  expect(errorCodes.translate(404)).toBe('Ресурс не найден');
});

test('no error in base', () => {
  const errorCodes = new ErrorRepository();
  expect(errorCodes.translate(1000)).toBe('Unknown error');
});
