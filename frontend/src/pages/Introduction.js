import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileLines, faTerminal } from "@fortawesome/free-solid-svg-icons";
import Window from "../components/Window";
import { Prompt } from "../components/Prompt";
import Typed from "../components/Typed";
import { useShell } from "../components/ShellSession";
import CrtImage from "../components/CrtImage";
import Rise from "../components/Rise";
import { LOGO, NeofetchInfo } from "../components/Neofetch";
import { profile } from "../data/resume";
import { sections } from "../data/sections";
import photo from "../assets/stevenphoto.jpg";

const card = {
  name: profile.name,
  occupation: profile.title,
  focus: ["DevSecOps", "Distributed Systems", "AI Engineering"],
  degree: "BS in Computer Engineering",
  degree_minor: "Mathematics",
  hobbies: profile.hobbies,
};
const entries = Object.entries(card);
const literal = (v) => (Array.isArray(v) ? `[${v.map((x) => `"${x}"`).join(", ")}]` : `"${v}"`);
const comma = (i) => (i < entries.length - 1 ? "," : "");
const CARD_TEXT = ["return {", ...entries.map(([k, v], i) => `  ${k}: ${literal(v)}${comma(i)}`), "}"].join("\n");

function CardHighlighted() {
  const str = (s) => <span className="text-amber">"{s}"</span>;
  return (
    <>
      <div>
        <span className="text-link">return</span> {"{"}
      </div>
      {entries.map(([k, v], i) => (
        <div key={k} style={{ paddingLeft: "4ch", textIndent: "-2ch" }}>
          <span className="text-phosphor">{k}</span>
          <span className="text-dim">: </span>
          {Array.isArray(v)
            ? ["[", ...v.flatMap((x, j) => [j ? ", " : "", str(x)]), "]"].map((part, j) => <span key={j}>{part}</span>)
            : str(v)}
          {comma(i)}
        </div>
      ))}
      <div>{"}"}</div>
    </>
  );
}

const external = { target: "_blank", rel: "noreferrer" };

function Introduction() {
  const [typed, setTyped] = useState(false);
  const { openShell } = useShell();

  return (
    <div className="space-y-8 phone:space-y-10">
      <Window title={`${profile.handle}: ~ — bash`} meta="tty1" bodyClassName="p-5 phone:p-8">
        <div className="text-dim text-xs phone:text-sm mb-6" aria-hidden="true">
          <div>SH-BIOS rev.11001 · memory check 640K OK</div>
          <div>
            mounting ~/portfolio ........ <span className="text-phosphor">done</span>
          </div>
        </div>

        <h1 className="m-0 font-display uppercase text-phosphor glow leading-[0.85] tracking-wide text-[clamp(3.25rem,13vw,8rem)]">
          {profile.name}
        </h1>
        <p className="text-gold glow-gold text-lg phone:text-xl mt-4 mb-1">{profile.title}</p>
        <p className="text-dim m-0">{profile.focus.join(" · ")}</p>
        <div className="flex flex-wrap items-center gap-2 mt-3 text-sm text-dim">
          <span>{profile.location}</span>
          <span aria-hidden="true">·</span>
          <span className="chip !text-phosphor !border-phosphor/40">
            <span aria-hidden="true">●</span> {profile.clearance}
          </span>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
          <CrtImage
            src={photo}
            alt="Steven Hudson smiling, in a grey polo against a textured wall"
            className="w-36 phone:w-44 lg:w-56 shrink-0 lg:order-last"
            imgClassName="aspect-[3/4]"
          />
          <div className="min-w-0 flex-1">
            <Prompt>
              <Typed text="cat profile.js" msPerChar={45} />
            </Prompt>
            <pre className="m-0 mt-2 text-sm phone:text-base font-mono whitespace-pre-wrap break-words">
              {typed ? <CardHighlighted /> : <Typed text={CARD_TEXT} delay={750} msPerChar={8} onDone={() => setTyped(true)} />}
            </pre>
          </div>
        </div>

        <div className={`transition-opacity duration-500 ${typed ? "opacity-100" : "opacity-0 invisible"}`}>
          <div className="flex flex-wrap gap-3 mt-6">
            <a className="btn" href={profile.github} {...external}>
              <FontAwesomeIcon icon={faGithub} /> github
            </a>
            <a className="btn" href={profile.linkedin} {...external}>
              <FontAwesomeIcon icon={faLinkedin} /> linkedin
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              <FontAwesomeIcon icon={faEnvelope} /> email
            </a>
            <Link className="btn" to="/resume">
              <FontAwesomeIcon icon={faFileLines} /> resume
            </Link>
            <button type="button" className="btn" onClick={openShell} title="Open a shell (press ` )">
              <FontAwesomeIcon icon={faTerminal} /> shell
            </button>
          </div>
        </div>
      </Window>

      <Rise>
        <Window title="~ — neofetch && cat about.md">
          <Prompt className="text-sm mb-4">neofetch</Prompt>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
            <pre className="m-0 text-phosphor glow leading-tight text-lg sm:text-2xl shrink-0" aria-hidden="true">
              {LOGO}
            </pre>
            <NeofetchInfo />
          </div>
          <Prompt className="text-sm mt-8 mb-3">cat about.md</Prompt>
          <div className="space-y-4 max-w-[68ch]">
            {profile.about.map((p) => (
              <p key={p.slice(0, 24)} className="m-0">
                {p}
              </p>
            ))}
          </div>
        </Window>
      </Rise>

      <Rise>
        <Window title="~ — ls -l">
          <ul className="m-0 p-0 list-none">
            {sections
              .filter((s) => s.path !== "/")
              .map((s) => (
                <li key={s.id}>
                  <Link
                    to={s.path}
                    className="group grid grid-cols-[auto_1fr] sm:grid-cols-[7.5rem_9rem_1fr_auto] gap-x-4 items-baseline px-2 py-2 -mx-2 rounded hover:bg-raised"
                  >
                    <span className="text-dim text-xs hidden sm:inline" aria-hidden="true">
                      {s.file ? "-rw-r--r--" : "drwxr-xr-x"}
                    </span>
                    <span className={s.file ? "text-fg" : "text-link"}>{s.file ?? `${s.id}/`}</span>
                    <span className="text-dim col-span-2 sm:col-span-1">{s.blurb}</span>
                    <span className="hidden sm:inline text-phosphor opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </Window>
      </Rise>
    </div>
  );
}

export default Introduction;
