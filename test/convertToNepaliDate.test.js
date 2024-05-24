// convertToNepaliDate.test.js

const convertToNepaliDate = require('../convertToNepaliDate');

test('should convert Gregorian date to Nepali date', () => {
  const gregorianDate = '2024-05-24';
  const nepaliDate = convertToNepaliDate(gregorianDate);
  expect(nepaliDate).toBe('2080-05-24'); // Example expected Nepali date
});
