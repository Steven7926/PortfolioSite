import { profile } from "../data/resume";
import { LOGO, NeofetchInfo } from "./Neofetch";

export const HELP = [
  ["help", "show this list"],
  ["ls [dir]", "list directories and files"],
  ["cd <dir>", "go to a section — about, work, projects, skills, education"],
  ["cat <file>", "read about.md, contact.txt, or resume"],
  ["whoami", "the one-line version"],
  ["neofetch", "system info, except the system is me"],
  ["open <target>", "github · linkedin · email · resume"],
  ["theme <name>", "phosphor color: green · amber"],
  ["history", "what you've typed"],
  ["clear", "clear the screen (ctrl+l)"],
  ["exit", "close the shell"],
];

export function PromptText({ cwd }) {
  return (
    <>
      <span className="text-phosphor glow">{profile.handle}</span>
      <span className="text-dim">:</span>
      <span className="text-link">{cwd}</span>
      <span className="text-dim">$&nbsp;</span>
    </>
  );
}

export const Echo = ({ cwd, text }) => (
  <div>
    <PromptText cwd={cwd} />
    {text}
  </div>
);

export const Err = ({ children }) => <span className="text-red">{children}</span>;
export const Dim = ({ children }) => <span className="text-dim">{children}</span>;

export const Cmd = ({ onClick, children, className = "text-phosphor" }) => (
  <button type="button" className={`${className} text-left hover:underline underline-offset-2`} onClick={onClick}>
    {children}
  </button>
);

export function Welcome({ exec }) {
  return (
    <div className="text-dim">
      SH-OS rev.11001 (tty1) — type <Cmd onClick={() => exec("help")}>help</Cmd> to see commands · tab
      completes · ↑↓ history · <Cmd onClick={() => exec("exit")}>exit</Cmd> or esc to close
    </div>
  );
}

export function Help({ exec, fill }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-4 my-1">
      {HELP.map(([usage, desc]) => {
        const cmd = usage.split(" ")[0];
        const needsArg = usage.includes("<");
        return (
          <div key={usage} className="contents">
            <Cmd onClick={() => (needsArg ? fill(`${cmd} `) : exec(cmd))}>{usage}</Cmd>
            <span className="text-dim">{desc}</span>
          </div>
        );
      })}
    </div>
  );
}

export function About() {
  return (
    <div className="space-y-2 my-1 max-w-3xl">
      {profile.about.map((p) => (
        <p key={p.slice(0, 24)} className="m-0">
          {p}
        </p>
      ))}
    </div>
  );
}

export function Contact() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-4 my-1">
      <span className="text-gold">email</span>
      <a className="link" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <span className="text-gold">linkedin</span>
      <a className="link break-all" href={profile.linkedin} target="_blank" rel="noreferrer">
        {profile.linkedin.replace("https://www.", "")}
      </a>
      <span className="text-gold">github</span>
      <a className="link" href={profile.github} target="_blank" rel="noreferrer">
        {profile.github.replace("https://", "")}
      </a>
    </div>
  );
}

export function Fetch() {
  return (
    <div className="flex flex-col phone:flex-row gap-x-6 gap-y-2 my-2">
      <pre className="m-0 text-phosphor glow leading-tight" aria-hidden="true">
        {LOGO}
      </pre>
      <NeofetchInfo compact />
    </div>
  );
}
