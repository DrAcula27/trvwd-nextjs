'use client';

import { useMemo } from 'react';
import { getFourthTuesday } from '@/.github/scripts/meeting-minutes-helper';

function getNextMeetingDate(now: Date): Date {
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // helper function expects 1-based month, but js default is 0-based month, so need to add 1
  const fourthTuesdayDay = getFourthTuesday(year, month);

  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;
  const nextFourthTuesdayDay = getFourthTuesday(nextYear, nextMonth);

  // if there is no 4th Tuesday in the current month (should never happen),
  //  fallback to next month
  if (!fourthTuesdayDay) {
    return new Date(
      nextYear,
      nextMonth - 1,
      nextFourthTuesdayDay || 28,
      18,
      0,
      0
    );
  }

  const meetingDate = new Date(
    year,
    month - 1,
    fourthTuesdayDay,
    18,
    0,
    0
  );
  const meetingSwitchDate = new Date(
    year,
    month - 1,
    fourthTuesdayDay,
    19,
    0,
    0
  );

  if (now < meetingSwitchDate) {
    return meetingDate;
  } else {
    return new Date(
      nextYear,
      nextMonth - 1,
      nextFourthTuesdayDay || 28,
      18,
      0,
      0
    );
  }
}

export default function MeetingDate() {
  const now = useMemo(() => new Date(), []);
  const nextMeeting = useMemo(() => getNextMeetingDate(now), [now]);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <span>{nextMeeting.toLocaleDateString(undefined, options)}</span>
  );
}
