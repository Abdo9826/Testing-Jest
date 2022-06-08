const stringLength = require('./task1');
test('it should return the string length', () =>
  expect(stringLength('Abdo')).toBe(4));

test('it should not be greater that 10', () => {
  expect(() => stringLength('string is empty or too long')).toThrow(
    'string is empty or too long'
  );
});

test('it should be lower than 1', () => {
  expect(() => stringLength('').toThrow('string is empty or too long'));
});
