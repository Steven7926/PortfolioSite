import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { sections } from "../data/sections";
import "../css/nav.css";

const label = (s) => (s.file ? s.file : `~/${s.id}`);

function NavItem({ section, vertical = false }) {
  return (
    <NavLink
      to={section.path}
      end={section.path === "/"}
      className={({ isActive }) =>
        `flex items-center rounded px-2 py-1 transition-colors ${
          isActive ? "text-gold glow-gold" : "text-dim hover:text-phosphor"
        } ${vertical ? "py-2" : ""}`
      }
    >
      {({ isActive }) => (
        <>
          <span className={`mr-1 text-phosphor ${isActive ? "" : "invisible"}`} aria-hidden="true">
            ›
          </span>
          {label(section)}
        </>
      )}
    </NavLink>
  );
}

function Header({ onOpenShell }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const toggled = useRef(false);
  const menuRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onPointer = (e) => !menuRef.current?.contains(e.target) && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const toggle = () => {
    toggled.current = true;
    setOpen((o) => !o);
  };

  const spin = toggled.current ? (open ? "animate-spinRight" : "animate-spinLeft") : "";
  const pointDir = `${open ? "point-right" : "point-left"} ${spin}`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ground/85 backdrop-blur no-print">
      <div className="max-w-6xl mx-auto px-4 phone:px-6 md:px-8 h-14 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2 text-sm phone:text-base shrink-0" aria-label="Steven Hudson — home">
          <span className="text-dim hidden phone:inline">11001</span>
          <span>
            <span className="text-phosphor glow">steven</span>
            <span className="text-dim">@</span>
            <span className="text-phosphor glow">hudson</span>
          </span>
          <span className="cursor !h-[1em]" aria-hidden="true" />
        </Link>

        {onOpenShell && (
          <button type="button" onClick={onOpenShell} className="kbd-hint items-center gap-1.5 shrink-0 whitespace-nowrap text-xs text-dim hover:text-phosphor transition-colors">
            press <kbd className="kbd">`</kbd> for a shell
          </button>
        )}

        <nav aria-label="Main" className="hidden md:flex items-center ml-auto text-sm">
          {sections.map((s) => (
            <NavItem key={s.id} section={s} />
          ))}
        </nav>

        <div className="ml-auto md:ml-2 flex items-center gap-2" ref={menuRef}>
          {onOpenShell && (
            <button
              type="button"
              onClick={onOpenShell}
              className="btn !px-2.5 !py-1 text-xs"
              title="Open a shell (press ` )"
              aria-label="Open interactive shell"
            >
              <FontAwesomeIcon icon={faTerminal} />
              <span className="hidden phone:inline">shell</span>
            </button>
          )}

          <button
            type="button"
            className="md:hidden nav-wrapper nav-open"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="nav-menu block">
              <span className={`${pointDir} lines bg-fg before:bg-fg after:bg-fg`} />
            </span>
          </button>

          {open && (
            <nav
              id="mobile-nav"
              aria-label="Main"
              className="md:hidden absolute right-4 top-full mt-2 w-60 term p-2 animate-dropIn"
            >
              {sections.map((s) => (
                <NavItem key={s.id} section={s} vertical />
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
