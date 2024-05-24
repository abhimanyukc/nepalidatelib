// getCurrentDate.js

/**
 * Get the current date in the format YYYY-MM-DD.
 * @returns {string} The current date.
 */
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // months are 0-based
    const day = now.getDate();
  
    // use ternary operator to add leading zero if necessary
    const monthStr = month < 10 ? '0' + month : month;
    const dayStr = day < 10 ? '0' + day : day;
  
    return `${year}-${monthStr}-${dayStr}`;
  }
  
  module.exports = getCurrentDate;
  