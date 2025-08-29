import {
  getFourthTuesday,
  shouldCreateIssueToday,
  generateIssueData,
  getNext4thTuesday,
} from './meeting-minutes-helper';

describe('getFourthTuesday', () => {
  it('finds the correct fourth Tuesday for a typical month', () => {
    // March 2024: 4th Tuesday is the 26th
    expect(getFourthTuesday(2024, 3)).toBe(26);
  });

  it('handles February in a leap year', () => {
    // Feb 2024: 4th Tuesday is the 27th
    expect(getFourthTuesday(2024, 2)).toBe(27);
  });

  it('handles February in a non-leap year', () => {
    // Feb 2023: 4th Tuesday is the 28th
    expect(getFourthTuesday(2023, 2)).toBe(28);
  });

  it('handles months with 5 Tuesdays', () => {
    // August 2023: 4th Tuesday is the 22nd (29th is the 5th Tuesday)
    expect(getFourthTuesday(2023, 8)).toBe(22);
  });

  it('finds the correct fourth Tuesday when the 1st is a Tuesday', () => {
    // July 2025: 1st of month is a Tuesday, the 4th Tuesday is the 22nd (29th is the 5th Tuesday)
    expect(getFourthTuesday(2025, 7)).toBe(22);
  });

  it('returns null if no 4th Tuesday exists', () => {
    // Should never happen, but test anyway
    expect(getFourthTuesday(2023, 0)).toBeNull();
  });

  it('gracefully handles invalid month input', () => {
    // if month is invalid, should return null
    expect(getFourthTuesday(2021, -1)).toBeNull();
    expect(getFourthTuesday(2000, 13)).toBeNull();
  });

  it('gracefully handles invalid year input', () => {
    // if month is invalid, should return null
    expect(getFourthTuesday(-2000, 1)).toBeNull();
  });
});

describe('shouldCreateIssueToday', () => {
  //! use local timezone date constructor to avoid UTC issues (month is 0-indexed) using this constructor
  it('should not create issue before 4th Tuesday', () => {
    const date = new Date(2025, 6, 1); // July 1, 2025 (month is 0-indexed) - 4th Tuesday is 22nd
    const result = shouldCreateIssueToday(date);
    expect(result.create).toBe(false);
  });

  it('should create issue on 4th Tuesday', () => {
    // August 26, 2025 is the 4th Tuesday of August 2025
    const date = new Date(2025, 7, 26); // August 26, 2025 (month is 0-indexed)
    const result = shouldCreateIssueToday(date);
    expect(result.create).toBe(true);
  });

  it('should create issue after 4th Tuesday, before start of next month', () => {
    const date = new Date(2025, 7, 28); // August 28, 2025 - 4th Tuesday is 26th
    const result = shouldCreateIssueToday(date);
    expect(result.create).toBe(true);
  });

  it('should not create issue for month with no 4th Tuesday (or invalid date)', () => {
    // should not happen, but test anyway
    const date = new Date('invalid');
    const result = shouldCreateIssueToday(date);
    expect(result.create).toBe(false);
  });
});

describe('generateIssueData', () => {
  it('issue title and body contain correct year, month, and date', () => {
    // Pass any date in September 2025, should generate for 4th Tuesday (23rd)
    const date = new Date(2025, 8, 15); // September 15, 2025
    const { title, body } = generateIssueData(date);
    expect(title).toContain('September 23, 2025');
    expect(body).toContain('September 23, 2025');
    expect(body).toContain('2025.09.23_Meeting_Minutes.pdf');
    expect(body).toContain('/Meetings/2025/');
    expect(body).toContain('/data/meeting-minutes.json');
    expect(title).not.toBeUndefined();
    expect(body).not.toBeUndefined();
    expect(title).not.toBeNull();
    expect(body).not.toBeNull();
  });

  it('filename and directory are correct for various months', () => {
    // Pass any date in February 2024, should generate for 4th Tuesday (27th)
    const date = new Date(2024, 1, 15); // February 15, 2024
    const { body } = generateIssueData(date);
    expect(body).toContain('2024.02.27_Meeting_Minutes.pdf');
    expect(body).toContain('/Meetings/2024/');
  });

  it('formats correctly for leap years and year boundaries', () => {
    // February 2024 - 4th Tuesday is 27th
    const leapDate = new Date(2024, 1, 15); // February 15, 2024
    const { title: leapTitle, body: leapBody } =
      generateIssueData(leapDate);
    expect(leapTitle).toContain('February 27, 2024');
    expect(leapBody).toContain('February 27, 2024');

    // January 2025 - 4th Tuesday is 28th
    const yearBoundaryDate = new Date(2025, 0, 15); // January 15, 2025
    const { title: ybTitle, body: ybBody } =
      generateIssueData(yearBoundaryDate);
    expect(ybTitle).toContain('January 28, 2025');
    expect(ybBody).toContain('2025.01.28_Meeting_Minutes.pdf');
    expect(ybBody).toContain('/Meetings/2025/');
  });

  it('output is never undefined or null', () => {
    const date = new Date(2025, 8, 15); // September 15, 2025
    const result = generateIssueData(date);
    expect(result).toBeDefined();
    expect(result.title).toBeDefined();
    expect(result.body).toBeDefined();
    expect(result.title).not.toBeNull();
    expect(result.body).not.toBeNull();
  });
});

describe('getNext4thTuesday', () => {
  it('moves to the next month after meeting date/time for current month', () => {
    const fromDate = new Date(2025, 7, 26, 19, 1); // August 26, 2025 19:01
    const nextMeeting = getNext4thTuesday(fromDate);
    // format as YYYY-MM-DD for comparison
    const formatted = nextMeeting
      ? nextMeeting.toISOString().slice(0, 10)
      : null;
    expect(formatted).toBe('2025-09-23');
  });

  it('returns this months 4th Tuesday if fromDate is before it', () => {
    const fromDate = new Date(2025, 8, 1); // September 1, 2025
    const next = getNext4thTuesday(fromDate);
    expect(next.toISOString().slice(0, 10)).toBe('2025-09-23');
  });

  it('returns next months 4th Tuesday if fromDate is exactly on the 4th Tuesday', () => {
    const fromDate = new Date(2025, 8, 23); // September 23, 2025
    const next = getNext4thTuesday(fromDate);
    expect(next.toISOString().slice(0, 10)).toBe('2025-10-28');
  });

  it('handles December to January transition', () => {
    const fromDate = new Date(2025, 11, 24); // December 24, 2025 (after Dec 4th Tuesday)
    const next = getNext4thTuesday(fromDate);
    expect(next.toISOString().slice(0, 10)).toBe('2026-01-27');
  });

  it('skips months with no 4th Tuesday', () => {
    // Use a valid date but test the logic can handle searching multiple months
    const fromDate = new Date(2025, 8, 24); // September 24, 2025 (after Sep 4th Tuesday)
    const next = getNext4thTuesday(fromDate);
    expect(next).not.toBeNull();
    expect(next instanceof Date).toBe(true);
  });

  it('returns null for invalid input', () => {
    expect(getNext4thTuesday(null)).toBeNull();
    expect(getNext4thTuesday(undefined)).toBeNull();
    expect(getNext4thTuesday('not a date')).toBeNull();
  });
});
