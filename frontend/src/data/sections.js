
export const sections = [
  { id: "about", path: "/", blurb: "who I am, at a glance" },
  { id: "work", path: "/work", blurb: "Iron EagleX, TheraPlan" },
  { id: "projects", path: "/projects", blurb: "things I've built on my own time" },
  { id: "skills", path: "/skills", blurb: "languages, frameworks, platforms" },
  { id: "education", path: "/education", blurb: "UCF + leadership roles" },
  { id: "resume", path: "/resume", blurb: "printable resume", file: "resume.txt" },
];

export const cwdFor = (pathname) => {
  const match = sections.find((s) => s.path !== "/" && pathname.startsWith(s.path));
  if (!match || match.file) return "~";
  return `~/${match.id}`;
};
