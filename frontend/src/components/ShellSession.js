import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { profile, experience, projects, skills } from "../data/resume";
import { sections, cwdFor } from "../data/sections";
import { getPhosphor, setPhosphor, PHOSPHORS } from "../utils/theme";
import { About, Cmd, Contact, Dim, Echo, Err, Fetch, Help, Welcome } from "./ShellOutput";

const DIRS = sections.filter((s) => !s.file).map((s) => s.id);
const FILES = ["about.md", "contact.txt", "resume.txt"];
const OPENABLE = ["github", "linkedin", "email", "resume"];

const LISTINGS = {
  about: ["about.md", "contact.txt"],
  work: experience.map((e) => e.file),
  projects: projects.map((p) => `${p.id}/`),
  skills: skills.map((s) => `${s.id}/`),
  education: ["ucf.txt", "leadership.txt"],
};

export const COMMANDS = [
  "help", "ls", "cd", "cat", "touch", "whoami", "neofetch", "open", "theme", "history", "clear",
  "contact", "date", "echo", "pwd", "exit", ...DIRS, "resume",
];

export const ARG_POOL = {
  cd: DIRS,
  ls: DIRS,
  cat: FILES,
  touch: ["resume.txt"],
  open: OPENABLE,
  theme: PHOSPHORS,
};

const isResume = (target) => target === "resume" || target === "resume.txt";

// strip prefixes and trailing slashes
const normalize = (p) =>
  p.trim().toLowerCase().replace(/^~\/?/, "").replace(/^(\.\.?\/)+/, "").replace(/^\/+/, "").replace(/\/+$/, "");

const isTyping = (el) => el?.closest?.("input, textarea, select, [contenteditable='true']");

let nextId = 0;
const entry = (node) => ({ id: nextId++, node });

const ShellContext = createContext(null);
export const useShell = () => useContext(ShellContext);

// The shell session (output, history, commands) and the drawer's open state.
// It lives above the routes, so the session survives page changes.
export function ShellProvider({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const cwd = cwdFor(pathname);

  const runRef = useRef(() => {});
  const prompt = useRef(null);
  const opener = useRef(null);

  const [exec] = useState(() => (cmd) => runRef.current(cmd));
  const [fill] = useState(() => (text) => prompt.current?.fill(text));

  const [lines, setLines] = useState(() => [entry(<Welcome exec={exec} />)]);
  const [history, setHistory] = useState([]);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const print = useCallback((...nodes) => setLines((prev) => [...prev, ...nodes.map(entry)]), []);
  const clear = useCallback(() => setLines([]), []);

  const attachPrompt = useCallback((handle) => {
    prompt.current = handle;
    return () => {
      if (prompt.current === handle) prompt.current = null;
    };
  }, []);

  const openShell = useCallback(() => {
    opener.current = document.activeElement;
    setMounted(true);
    setOpen(true);
  }, []);

  const closeShell = useCallback(() => {
    setOpen(false);
    // hand focus back to whatever opened the shell. If that's gone or was the page
    // itself, blur the prompt otherwise focus lingers on the hidden input and the
    // hotkey thinks you're still typing.
    const el = opener.current;
    if (el && el !== document.body && el.isConnected) el.focus({ preventScroll: true });
    else document.activeElement?.blur?.();
  }, []);

  // ` toggles the drawer from anywhere (except while typing in a field).
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "`" || e.ctrlKey || e.metaKey || e.altKey || isTyping(e.target)) return;
      e.preventDefault();
      if (open) closeShell();
      else openShell();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, openShell, closeShell]);


  const goTo = (path) => {
    if (path !== pathname) navigate(path);
  };

  const ls = (arg) => {
    const target = normalize(arg);
    if (target && LISTINGS[target]) {
      return print(
        <div className="flex flex-wrap gap-x-5">
          {LISTINGS[target].map((f) => (
            <span key={f} className={f.endsWith("/") ? "text-link" : ""}>
              {f}
            </span>
          ))}
        </div>
      );
    }
    if (target) return print(<Err>ls: cannot access '{arg}': No such file or directory</Err>);
    print(
      <div className="flex flex-wrap gap-x-5">
        {DIRS.map((d) => (
          <Cmd key={d} onClick={() => exec(`cd ${d}`)} className="text-link">{`${d}/`}</Cmd>
        ))}
        {FILES.map((f) => (
          <Cmd key={f} onClick={() => exec(`cat ${f}`)} className="text-fg">
            {f}
          </Cmd>
        ))}
      </div>
    );
  };

  const cd = (arg) => {
    const target = normalize(arg);
    if (!target || arg.trim() === "..") return goTo("/");
    if (target === ".") return;
    const section = sections.find((s) => s.id === target && !s.file);
    if (section) return goTo(section.path);
    if (FILES.includes(target)) return print(<Err>cd: not a directory: {arg}</Err>);
    print(<Err>cd: no such file or directory: {arg}</Err>);
  };

  const cat = (arg) => {
    const target = normalize(arg);
    if (!target) return print(<Err>cat: missing file operand</Err>);
    if (target === "about.md") return print(<About />);
    if (target === "contact.txt") return print(<Contact />);
    if (isResume(target)) return goTo("/resume");
    if (DIRS.includes(target)) return print(<Err>cat: {arg}: Is a directory</Err>);

    const dir = target.split("/")[0];
    if (target.includes("/") && DIRS.includes(dir)) return goTo(sections.find((s) => s.id === dir).path);
    print(<Err>cat: {arg}: No such file or directory</Err>);
  };

  const touch = (arg) => {
    const target = normalize(arg);
    if (!target) return print(<Err>touch: missing file operand</Err>);
    if (isResume(target)) return goTo("/resume");
    print(<Err>touch: cannot touch '{arg}': Read-only file system</Err>);
  };

  const openTarget = (arg) => {
    const target = normalize(arg);
    const urls = { github: profile.github, linkedin: profile.linkedin };
    if (urls[target]) {
      window.open(urls[target], "_blank", "noopener,noreferrer");
      return print(<Dim>opening {urls[target]}</Dim>);
    }
    if (target === "email") {
      window.location.href = `mailto:${profile.email}`;
      return print(<Dim>opening mail client for {profile.email}</Dim>);
    }
    if (isResume(target)) return goTo("/resume");
    print(<Dim>usage: open {OPENABLE.join(" | ")}</Dim>);
  };

  const theme = (arg) => {
    const target = normalize(arg);
    if (!PHOSPHORS.includes(target)) {
      return print(<Dim>phosphor is {getPhosphor()} — usage: theme {PHOSPHORS.join(" | ")}</Dim>);
    }
    setPhosphor(target);
    print(<Dim>phosphor set to {target}.</Dim>);
  };

  const run = (raw) => {
    const line = raw.trim();
    print(<Echo cwd={cwd} text={raw} />);
    if (!line) return;

    const nextHistory = [...history, line];
    setHistory(nextHistory);

    const [name, ...rest] = line.split(/\s+/);
    const cmd = name.toLowerCase();
    const arg = rest.join(" ");

    const section = sections.find((s) => s.id === cmd);
    if (section) return goTo(section.path);

    switch (cmd) {
      case "help":
        return print(<Help exec={exec} fill={fill} />);
      case "ls":
      case "ll":
      case "dir":
        return ls(arg);
      case "cd":
        return cd(arg);
      case "cat":
      case "less":
      case "more":
        return cat(arg);
      case "touch":
        return touch(arg);
      case "whoami":
        return print(`${profile.name} — ${profile.title}. ${profile.focus.join(" · ")}.`);
      case "neofetch":
        return print(<Fetch />);
      case "contact":
        return print(<Contact />);
      case "open":
        return openTarget(arg);
      case "theme":
        return theme(arg);
      case "history":
        return print(
          <ol className="m-0 pl-0 list-none">
            {nextHistory.map((h, i) => (
              <li key={i}>
                <span className="text-dim inline-block w-8 text-right mr-3">{i + 1}</span>
                {h}
              </li>
            ))}
          </ol>
        );
      case "clear":
      case "cls":
        return clear();
      case "date":
        return print(new Date().toString());
      case "echo":
        return print(arg);
      case "pwd":
        return print(cwd.replace("~", "/home/steven"));
      case "sudo":
        return print(<Err>steven is not in the sudoers file. This incident will be reported.</Err>);
      case "rm":
        return print(<Dim>nice try.</Dim>);
      case "vim":
      case "vi":
      case "nano":
      case "emacs":
        return print(<Dim>you'd never get out. try `cat` instead.</Dim>);
      case "exit":
      case "logout":
      case "quit":
        return closeShell();
      default:
        return print(
          <span>
            <Err>command not found: {name}</Err> <Dim>— try</Dim>{" "}
            <Cmd onClick={() => exec("help")}>help</Cmd>
          </span>
        );
    }
  };
  runRef.current = run;

  const value = {
    lines, history, cwd, open, mounted,
    run, print, clear, openShell, closeShell, attachPrompt,
  };

  return <ShellContext.Provider value={value}>{children}</ShellContext.Provider>;
}
