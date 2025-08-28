/**
 * Helper functions for managing monthly meeting notes automation
 */

/**
 * Find the 4th Tuesday of a given month
 * @param {number} year - The year (e.g., 2024)
 * @param {number} month - The month (1-12)
 * @returns {number | null} The date of the 4th Tuesday, or null if none exists
 */
function getFourthTuesday(year, month) {
  const firstDay = new Date(year, month - 1, 1);
  let tuesdayCount = 0;
  let currentDate = new Date(firstDay);

  while (currentDate.getMonth() === month - 1) {
    if (currentDate.getDay() === 2) {
      // Tuesday = 2
      tuesdayCount++;
      if (tuesdayCount === 4) {
        return currentDate.getDate();
      }
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return null; // No 4th Tuesday in this month
}

/**
 * Check if an issue should be created today
 * @param {Date} today - Current date
 * @returns {Object} Object with 'create' boolean and 'reason' string
 */
function shouldCreateIssueToday(today) {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const todayDate = today.getDate();

  const fourthTuesday = getFourthTuesday(year, month);

  if (!fourthTuesday) {
    return {
      create: false,
      reason: `No 4th Tuesday exists in ${today.toLocaleString(
        'en-US',
        { month: 'long', year: 'numeric' }
      )}. Skipping issue creation.`,
    };
  }

  if (todayDate < fourthTuesday) {
    return {
      create: false,
      reason: `Today (${todayDate}) is before the 4th Tuesday (${fourthTuesday}) of ${today.toLocaleString(
        'en-US',
        { month: 'long', year: 'numeric' }
      )}. Skipping issue creation.`,
    };
  }

  return {
    create: true,
    reason: `Creating issue for the 4th Tuesday (${fourthTuesday}) of ${today.toLocaleString(
      'en-US',
      { month: 'long', year: 'numeric' }
    )}.`,
  };
}

/**
 * Generate issue data (title and body) for the meeting notes
 * @param {Date} date - The date to generate the issue for
 * @returns {Object} Object with 'title' and 'body' strings
 */
function generateIssueData(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const monthName = date.toLocaleString('en-US', { month: 'long' });

  const fourthTuesday = getFourthTuesday(year, month);
  const day = String(fourthTuesday).padStart(2, '0');
  const monthPadded = String(month).padStart(2, '0');

  const title = `Add Monthly Meeting Minutes - ${monthName} ${year}`;

  const body = `
### Overview
Track the addition of monthly Meeting Minutes to the website.

### Meeting Details
- **Date**: ${monthName} ${fourthTuesday}, ${year}
- **In TRVWD Google Drive**:
  - **Expected Filename**: \`${year}.${monthPadded}.${day}_Meeting_Minutes.pdf\`
  - **Target Directory**: \`/Meetings/${year}/\`
- **In Project**:
  - **Data to Add**: metadata in JSON format
  - **Target Location**: \`/data/meeting-minutes.json\`

### Tasks
- [ ] Verify accuracy of Meeting Minutes for ${monthName} ${year}
- [ ] Convert Meeting Minutes to PDF format
- [ ] Ensure Meeting Minutes PDF follows the naming convention:
  - [ ] Filename: \`${year}.${monthPadded}.${day}_Meeting_Minutes.pdf\`
  - [ ] Format: PDF document
  - [ ] Content: Complete and accurate meeting notes
- [ ] Add the Meeting Minutes metadata to the correct file:
  - [ ] Path: \`/data/meeting-minutes.json\`
  - [ ] Data schema:
        ,
          {
            "id": "YYYY-MM-DD",
            "title": "MONTH YYYY Meeting Minutes",
            "date": "YYYY-MM-DD",
            "googleDriveId": "GOOGLEDRIVEIDSTRING",
            "directUrl": "https://drive.google.com/file/d/GOOGLEDRIVEIDSTRING/view"
          }
- [ ] Test deployment and accessibility:
  - [ ] Check deployment on Netlify
  - [ ] Verify is viewable via 'View PDF' button on website
  - [ ] Confirm download functionality via 'Download PDF' button on website works

---
*This issue was automatically generated on ${date.toLocaleDateString(
    'en-US',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  )} by GitHub Actions.*
`.trim();

  return { title, body };
}

/**
 * Get the next 4th Tuesday from a given date
 * Useful for testing or planning ahead
 * @param {Date} fromDate - Starting date
 * @returns {Date | null} Next 4th Tuesday date, or null if none in next 12 months
 */
function getNext4thTuesday(fromDate) {
  const searchDate = new Date(fromDate);

  // Search up to 12 months ahead
  for (let i = 0; i < 12; i++) {
    const year = searchDate.getFullYear();
    const month = searchDate.getMonth() + 1;

    const fourthTuesday = getFourthTuesday(year, month);

    if (
      fourthTuesday &&
      (searchDate.getMonth() !== fromDate.getMonth() ||
        searchDate.getFullYear() !== fromDate.getFullYear() ||
        fourthTuesday > fromDate.getDate())
    ) {
      return new Date(year, month - 1, fourthTuesday);
    }

    // Move to next month
    searchDate.setMonth(searchDate.getMonth() + 1);
    searchDate.setDate(1);
  }

  return null;
}

module.exports = {
  getFourthTuesday,
  shouldCreateIssueToday,
  generateIssueData,
  getNext4thTuesday,
};
