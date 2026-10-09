import { experience, profile } from "../data/resume";
import { uptime, yearsSince } from "../utils/time";

const current = experience[0];

export const facts = [
  ["role", profile.title],
  ["host", `${current.company} · ${profile.location}`],
  ["uptime", `${uptime(current.start)} (${yearsSince(profile.careerStart)}+ yrs in software)`],
  ["clearance", profile.clearance],
  ["shell", "TypeScript · Python · Go · Java"],
  ["infra", "Kubernetes · Helm · ArgoCD · AWS"],
  ["edu", "BS Computer Engineering · UCF"],
  ["hobbies", profile.hobbies.join(" · ")],
];

export const LOGO = [
  " ____  _   _ ",
  "/ ___|| | | |",
  "\\___ \\| |_| |",
  " ___) |  _  |",
  "|____/|_| |_|",
].join("\n");

const SWATCHES = ["bg-ground", "bg-red", "bg-phosphor", "bg-gold", "bg-link", "bg-amber", "bg-sage", "bg-fg"];

export function NeofetchInfo({ compact = false }) {
  return (
    <div className="min-w-0">
      <div>
        <span className="text-phosphor glow font-semibold">steven</span>
        <span className="text-dim">@</span>
        <span className="text-phosphor glow font-semibold">hudson</span>
      </div>
      <div className="text-dim" aria-hidden="true">-------------</div>
      <dl className={`m-0 grid grid-cols-[auto_1fr] gap-x-3 ${compact ? "" : "gap-y-0.5"}`}>
        {facts.map(([key, value]) => (
          <div key={key} className="contents">
            <dt className="text-gold font-semibold">{key}</dt>
            <dd className="m-0 min-w-0 break-words">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex mt-3" aria-hidden="true">
        {SWATCHES.map((c) => (
          <span key={c} className={`inline-block w-6 h-3 ${c}`} />
        ))}
      </div>
    </div>
  );
}
