export function formatTimeInput(rawValue: string): string {
  let numbers = rawValue.replace(/\D/g, "");

  numbers = numbers.slice(0, 4);

  let hours = numbers.slice(0, 2);
  let minutes = numbers.slice(2, 4);

  if (hours.length === 2 && Number(hours) > 23) {
    hours = "23";
  }
  if (minutes.length === 2 && Number(minutes) > 59) {
    minutes = "59";
  }

  let formatted = hours;

  if (numbers.length > 2) {
    formatted += ":" + minutes;
  }

  return formatted;
}
