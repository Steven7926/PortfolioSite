import Window from "../components/Window";
import Rise from "../components/Rise";
import { PageIntro } from "../components/Prompt";
import { skills } from "../data/resume";

const TIER_NOTE = {
  production: "what I ship with today",
  working: "used on the job before",
  academic: "learned in school",
};

function Chips({ items, tone = "" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <span key={s} className={`chip ${tone}`}>
          {s}
        </span>
      ))}
    </div>
  );
}

function Group({ group }) {
  const count = group.tiers ? group.tiers.reduce((n, t) => n + t.items.length, 0) : group.items.length;
  return (
    <Window
      id={group.id}
      title={`~/skills/${group.id}`}
      meta={<span className="text-xs">{count} items</span>}
      className="h-full scroll-mt-24"
    >
      <h2 className="m-0 mb-4 text-phosphor font-semibold">
        <span className="text-dim">$ ls </span>
        {group.label}/
      </h2>
      {group.tiers ? (
        <div className="space-y-4">
          {group.tiers.map((t) => (
            <div key={t.level}>
              <div className="text-sm mb-2">
                <span className="text-gold">--{t.level}</span>
                <span className="text-dim"> # {TIER_NOTE[t.level]}</span>
              </div>
              <Chips
                items={t.items}
                tone={t.level === "production" ? "!border-phosphor/50 !text-phosphor" : t.level === "academic" ? "!text-dim" : ""}
              />
            </div>
          ))}
        </div>
      ) : (
        <Chips items={group.items} />
      )}
    </Window>
  );
}

function Skills() {
  return (
    <>
      <PageIntro cwd="~/skills" command="ls" title="skills">
        Grouped the way I use them. Jump to:{" "}
        {skills.map((g, i) => (
          <span key={g.id}>
            <a href={`#${g.id}`} className="text-link hover:underline underline-offset-2">
              {g.id}/
            </a>
            {i < skills.length - 1 ? " " : ""}
          </span>
        ))}
      </PageIntro>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((g, i) => (
          <Rise key={g.id} className={i === 0 ? "md:col-span-2" : ""}>
            <Group group={g} />
          </Rise>
        ))}
      </div>
    </>
  );
}

export default Skills;
