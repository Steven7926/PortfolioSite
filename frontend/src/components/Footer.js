import { Link, useLocation } from "react-router-dom";
import { sections, cwdFor } from "../data/sections";

const command = (s) => (s.file ? `cat ~/${s.file}` : s.path === "/" ? "cd ~" : `cd ~/${s.id}`);

function Footer() {
  const { pathname } = useLocation();
  const index = sections.findIndex((s) => s.path === pathname);
  const prev = index > 0 ? sections[index - 1] : null;
  const next = index >= 0 && index < sections.length - 1 ? sections[index + 1] : null;

  return (
    <footer className="mt-16 no-print">
      {(prev || next) && (
        <nav aria-label="Previous and next section" className="max-w-6xl mx-auto px-4 phone:px-6 md:px-8 pb-8 flex flex-wrap justify-between gap-3">
          {prev ? (
            <Link to={prev.path} className="btn">
              <span aria-hidden="true">←</span> {command(prev)}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link to={next.path} className="btn ml-auto">
              {command(next)} <span aria-hidden="true">→</span>
            </Link>
          )}
        </nav>
      )}

      <div className="border-t border-line bg-raised text-xs text-dim">
        <div className="max-w-6xl mx-auto px-4 phone:px-6 md:px-8 py-2 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="bg-phosphor text-ground px-2 font-semibold">[0] hudson</span>
          <span className="text-link">{cwdFor(pathname)}</span>
          <span className="hidden sm:inline">
            press <kbd className="kbd">`</kbd> for a shell
          </span>
          <span className="ml-auto">
            designed &amp; built by me ·{" "}
            <a className="link" href="https://github.com/Steven7926/PortfolioSite" target="_blank" rel="noreferrer">
              source
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
