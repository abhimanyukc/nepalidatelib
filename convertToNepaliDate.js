// convertToNepaliDate.js

/**
 * Convert Gregorian date to Nepali date.
 * This is a simplified version and may not be accurate for all dates.
 * @param {string} gregorianDate The Gregorian date in the format YYYY-MM-DD.
 * @returns {string} The corresponding Nepali date in the format YYYY-MM-DD.
 */
function convertToNepaliDate(gregorianDate) {
    // For demonstration purposes, use a simple offset
    // Real-world conversion requires complex logic or lookup tables.
    const offset = 56;
    const [year, month, day] = gregorianDate.split('-').map(Number);
  
    const nepaliYear = year + offset;
    const nepaliMonth = month;
    const nepaliDay = day;
  
    return `${nepaliYear}-${String(nepaliMonth).padStart(2, '0')}-${String(nepaliDay).padStart(2, '0')}`;
  }
  
  module.exports = convertToNepaliDate;
  