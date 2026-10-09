/** @type {import('tailwindcss').Config} */

// Colors live as RGB triplets in src/index.css so the shell's `theme` command
// can swap the phosphor at runtime while keeping Tailwind's /opacity modifiers.
const v = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      ground: v("ground"),
      panel: v("panel"),
      raised: v("raised"),
      line: v("line"),
      sage: v("sage"),
      fg: v("fg"),
      dim: v("dim"),
      phosphor: v("phosphor"),
      gold: v("gold"),
      link: v("link"),
      amber: v("amber"),
      red: v("red"),
    },

    screens: {
      phone: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
        display: ["VT323", '"IBM Plex Mono"', "ui-monospace", "monospace"],
      },

      keyframes: {
        spinRight: {
          "0%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        spinLeft: {
          "0%": { transform: "rotate(-180deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        dropIn: {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },

      animation: {
        spinRight: "spinRight .4s",
        spinLeft: "spinLeft .4s",
        dropIn: "dropIn .18s ease-out",
        slideUp: "slideUp .22s cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
  plugins: [],
};
