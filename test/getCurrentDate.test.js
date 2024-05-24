// getCurrentDate.test.js

const getCurrentDate = require('../getCurrentDate');

test('should return current date in YYYY-MM-DD format', () => {
  const currentDate = getCurrentDate();
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  expect(currentDate).toMatch(regex);
});
