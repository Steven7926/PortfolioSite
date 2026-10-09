const KEY = "phosphor";
export const PHOSPHORS = ["green", "amber"];

export function getPhosphor() {
  return document.documentElement.dataset.phosphor === "amber" ? "amber" : "green";
}

export function setPhosphor(name) {
  if (name === "amber") document.documentElement.dataset.phosphor = "amber";
  else delete document.documentElement.dataset.phosphor;
  try {
    localStorage.setItem(KEY, name);
  } catch {
    console.error("storage blocked")
  }
}

export function restorePhosphor() {
  try {
    if (localStorage.getItem(KEY) === "amber") document.documentElement.dataset.phosphor = "amber";
  } catch {
    console.error("could not restore phospher")
  }
}
