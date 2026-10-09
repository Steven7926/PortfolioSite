import { useEffect, useRef, useState } from "react";
import { ARG_POOL, COMMANDS, useShell } from "./ShellSession";
import { Echo, PromptText } from "./ShellOutput";

const commonPrefix = (words) =>
  words.reduce((acc, w) => {
    let i = 0;
    while (i < acc.length && acc[i] === w[i]) i++;
    return acc.slice(0, i);
  });


function Shell({ active = false }) {
  const { lines, history, cwd, run, print, clear, closeShell, attachPrompt } = useShell();
  const [input, setInput] = useState("");
  const [browse, setBrowse] = useState(null); // index into history while using ↑/↓
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(
    () =>
      attachPrompt({
        fill: (text) => {
          setInput(text);
          inputRef.current?.focus({ preventScroll: true });
        },
      }),
    [attachPrompt]
  );

  useEffect(() => {
    if (active) inputRef.current?.focus({ preventScroll: true });
  }, [active]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, active]);

  const complete = () => {
    const [head = "", ...rest] = input.replace(/^\s+/, "").split(" ");
    const completingArg = rest.length > 0;
    const partial = completingArg ? rest.join(" ") : head;
    const pool = completingArg ? ARG_POOL[head.toLowerCase()] ?? [] : COMMANDS;
    const matches = [...new Set(pool.filter((w) => w.startsWith(partial.toLowerCase())))];

    if (matches.length === 0) return;
    const filled = matches.length === 1 ? `${matches[0]} ` : commonPrefix(matches);
    setInput(completingArg ? `${head} ${filled}` : filled);
    if (matches.length > 1 && filled.length === partial.length) {
      print(
        <Echo cwd={cwd} text={input} />,
        <div className="flex flex-wrap gap-x-5 text-dim">
          {matches.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      );
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      complete();
    } else if (e.key === "ArrowUp") {
      if (!history.length) return;
      e.preventDefault();
      const i = browse === null ? history.length - 1 : Math.max(0, browse - 1);
      setBrowse(i);
      setInput(history[i]);
    } else if (e.key === "ArrowDown") {
      if (browse === null) return;
      e.preventDefault();
      const i = browse + 1;
      if (i >= history.length) {
        setBrowse(null);
        setInput("");
      } else {
        setBrowse(i);
        setInput(history[i]);
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      clear();
    } else if (e.key === "c" && e.ctrlKey && !window.getSelection()?.toString()) {
      e.preventDefault();
      print(<Echo cwd={cwd} text={`${input}^C`} />);
      setInput("");
      setBrowse(null);
    } else if (e.key === "Escape") {
      e.preventDefault();
      closeShell();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    run(input);
    setInput("");
    setBrowse(null);
  };

  const focusInput = (e) => {
    if (e.target.closest("button, a") || window.getSelection()?.toString()) return;
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <div className="text-sm phone:text-[0.9rem] overflow-y-auto max-h-[min(52vh,30rem)]" ref={scrollRef} onClick={focusInput}>
      <div role="log" aria-live="polite" aria-label="Shell output" className="space-y-1">
        {lines.map((l) => (
          <div key={l.id} className="whitespace-pre-wrap break-words">
            {l.node}
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit} className="flex items-center mt-1">
        <label htmlFor="shell-input" className="shrink-0">
          <PromptText cwd={cwd} />
        </label>
        <input
          id="shell-input"
          ref={inputRef}
          aria-label="Shell command"
          className="shell-input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setBrowse(null);
          }}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="go"
          aria-describedby="shell-hint"
        />
        <span id="shell-hint" className="sr-only">
          Type help and press enter for a list of commands. Type exit or press Escape to close.
        </span>
      </form>
    </div>
  );
}

export default Shell;
