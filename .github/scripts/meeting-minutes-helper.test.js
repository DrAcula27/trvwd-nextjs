import { getFourthTuesday } from './meeting-minutes-helper';

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

  it('returns null if no 4th Tuesday exists', () => {
    // Should never happen, but test anyway
    expect(getFourthTuesday(2023, 0)).toBeNull();
  });
});
