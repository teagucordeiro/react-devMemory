export function formatTimeElapsed(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minutesString = String(minutes).padStart(2, '0');
  const secondsString = String(seconds).padStart(2, '0');

  return `${minutesString}:${secondsString}`;
}
