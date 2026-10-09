export function monthsSince(isoMonth, now = new Date()) {
  const [year, month] = isoMonth.split("-").map(Number);
  return (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
}

export function yearsSince(isoMonth, now = new Date()) {
  return Math.floor(monthsSince(isoMonth, now) / 12);
}

// "2021-09" -> "5 yrs, 1 mo"
export function uptime(isoMonth, now = new Date()) {
  const total = monthsSince(isoMonth, now);
  const yrs = Math.floor(total / 12);
  const mos = total % 12;
  const y = `${yrs} yr${yrs === 1 ? "" : "s"}`;
  return mos ? `${y}, ${mos} mo${mos === 1 ? "" : "s"}` : y;
}

const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
export const spelled = (n) => WORDS[n] ?? String(n);
