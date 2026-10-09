import { profile } from "../data/resume";
import Typed from "./Typed";

export function Prompt({ cwd = "~", children, className = "" }) {
  return (
    <div className={`whitespace-pre-wrap break-words ${className}`}>
      <span className="text-phosphor glow">{profile.handle}</span>
      <span className="text-dim">:</span>
      <span className="text-link">{cwd}</span>
      <span className="text-dim">$ </span>
      {children}
    </div>
  );
}

export function PageIntro({ cwd, command, title, children }) {
  return (
    <header className="mb-8">
      <Prompt cwd={cwd} className="text-sm phone:text-base">
        <Typed text={command} msPerChar={32} />
      </Prompt>
      <h1 className="font-display text-gold glow-gold text-5xl phone:text-6xl leading-none mt-4">{title}</h1>
      {children && <div className="text-dim mt-2 max-w-3xl">{children}</div>}
    </header>
  );
}
