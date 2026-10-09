import { useEffect, useRef } from "react";
import Window from "./Window";
import Shell from "./Shell";
import { useShell } from "./ShellSession";

// console docked to the bottom of the screen. It stays open across
// page changes and stays mounted while hidden, so the session survives both.
function ShellDrawer() {
  const { open, closeShell } = useShell();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const root = document.documentElement;
    let frame = 0;
    let last = -1;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const height = el.offsetHeight;
        if (height === last) return;
        last = height;
        root.style.setProperty("--shell-h", `${height}px`);
      });
    });
    ro.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      root.style.removeProperty("--shell-h");
    };
  }, []);

  return (
    <section
      ref={ref}
      hidden={!open}
      aria-label="Interactive shell"
      className="fixed inset-x-0 bottom-0 z-50 no-print animate-slideUp"
    >
      <div className="max-w-6xl mx-auto px-2 phone:px-4 pb-2 phone:pb-4">
        <Window
          as="div"
          title="bash — steven@hudson"
          meta={
            <button type="button" onClick={closeShell} className="hover:text-red" aria-label="Close shell">
              esc [x]
            </button>
          }
          bodyClassName="p-3 phone:p-4"
        >
          <Shell active={open} />
        </Window>
      </div>
    </section>
  );
}

export default ShellDrawer;
