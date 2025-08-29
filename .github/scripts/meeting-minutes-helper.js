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
  if (
    typeof year !== 'number' ||
    typeof month !== 'number' ||
    year < 1 ||
    month < 1 ||
    month > 12
  ) {
    return null;
  }

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
  if (!(today instanceof Date) || isNaN(today)) {
    return { create: false, reason: 'Invalid date.' };
  }

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
  if (!(date instanceof Date) || isNaN(date)) {
    return { title: '', body: '' };
  }

  // find the 4th Tuesday of the month
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const fourthTuesday = getFourthTuesday(year, month);
  if (!fourthTuesday) {
    return { title: '', body: '' };
  }

  // create date object for the 4th Tuesday
  const meetingDate = new Date(year, month - 1, fourthTuesday);

  const monthName = meetingDate.toLocaleString('default', {
    month: 'long',
  });
  const monthNum = String(meetingDate.getMonth() + 1).padStart(
    2,
    '0'
  );
  const day = String(meetingDate.getDate()).padStart(2, '0');
  const formattedDate = `${monthName} ${day}, ${year}`;
  const filename = `${year}.${monthNum}.${day}_Meeting_Minutes.pdf`;
  const directory = `/Meetings/${year}/`;
  const dataPath = `/data/meeting-minutes.json`;

  const title = `Add Monthly Meeting Minutes for ${formattedDate}`;
  const body = `
### Meeting Details
- **Date**: ${formattedDate}
- **In TRVWD Google Drive**:
  - **Expected Filename**: \`${filename}\`
  - **Target Directory**: \`${directory}\`
- **In Project**:
  - **Data to Add**: metadata in JSON format
  - **Target Location**: \`${dataPath}\`

### Tasks
- [ ] Verify accuracy of Meeting Minutes for ${formattedDate}
- [ ] Convert Meeting Minutes to PDF format
- [ ] Ensure Meeting Minutes PDF follows the naming convention: \`${filename}\`
- [ ] Add the Meeting Minutes metadata to the correct file:
  - [ ] Path: \`${dataPath}\`
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
  - [ ] Check deployment
  - [ ] Verify is viewable via 'View PDF' button on website
  - [ ] Confirm download functionality via 'Download PDF' button on website works
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
  if (!(fromDate instanceof Date) || isNaN(fromDate)) return null;

  let searchDate = new Date(fromDate);

  // first check if current month has a 4th Tuesday after fromDate
  let year = searchDate.getFullYear();
  let month = searchDate.getMonth() + 1;
  let fourthTuesday = getFourthTuesday(year, month);

  if (fourthTuesday) {
    const candidate = new Date(year, month - 1, fourthTuesday);
    if (candidate > fromDate) {
      return candidate;
    }
  }

  // search up to 12 months ahead for next 4th Tuesday
  for (let i = 0; i < 12; i++) {
    // move to next month
    searchDate.setMonth(searchDate.getMonth() + 1);
    searchDate.setDate(1);

    year = searchDate.getFullYear();
    month = searchDate.getMonth() + 1;
    fourthTuesday = getFourthTuesday(year, month);

    if (fourthTuesday) {
      const candidate = new Date(year, month - 1, fourthTuesday);
      return candidate;
    }
  }

  return null;
}

module.exports = {
  getFourthTuesday,
  shouldCreateIssueToday,
  generateIssueData,
  getNext4thTuesday,
};
