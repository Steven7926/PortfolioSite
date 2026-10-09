import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

function Typed({ text, delay = 0, msPerChar = 28, onDone, className = "" }) {
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) onDone?.();
    // fire once on mount; onDone identity changes don't matter here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <>
      <span className="sr-only">{text}</span>
      <TypeAnimation
        aria-hidden="true"
        className={className}
        sequence={[delay, text, () => onDone?.()]}
        speed={{ type: "keyStrokeDelayInMs", value: msPerChar }}
        cursor={false}
        wrapper="span"
      />
    </>
  );
}

export default Typed;
