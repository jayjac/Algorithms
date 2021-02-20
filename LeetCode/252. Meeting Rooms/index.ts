function canAttendMeetings(intervals: number[][]): boolean {
  if(intervals.length < 2) return true;

  intervals.sort((a, b) => {
    if(a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let currentInterval = intervals[0];

  for(let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if(interval[0] < currentInterval[1]) return false;

    currentInterval = interval;
  }
  return true;
};