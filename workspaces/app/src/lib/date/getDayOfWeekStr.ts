const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

export function getDayOfWeekStr(date: Date) {
  // 日本のタイムゾーンでの曜日を取得
  const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date).toLowerCase();
  if (!days.includes(dayOfWeek)) {
    throw new Error('dayOfWeek is invalid');
  }
  return dayOfWeek;
}
