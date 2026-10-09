import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Window from "../components/Window";
import { PageIntro } from "../components/Prompt";
import { education, experience, leadership, profile, projects, skills } from "../data/resume";

const bare = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function Section({ title, children }) {
  return (
    <section className="mt-8">
      <h2 className="m-0 mb-3 pb-1 border-b border-line text-sm font-semibold uppercase tracking-widest text-phosphor">
        <span className="text-dim no-print"># </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

const skillLine = (g) =>
  g.tiers
    ? g.tiers.map((t, i) => (i === 0 ? t.items.join(", ") : `${t.level}: ${t.items.join(", ")}`)).join(" · ")
    : g.items.join(", ");

function Resume() {
  const contact = [
    profile.location,
    profile.email,
    bare(profile.linkedin),
    bare(profile.github),
    bare(profile.site),
  ];

  return (
    <>
      <div className="no-print">
        <PageIntro cwd="~" command="cat resume.txt" title="resume">
          Everything on this site, in one printable page. Use print → “Save as PDF” for a clean copy.
        </PageIntro>
        <div className="flex flex-wrap gap-3 mb-6">
          <button type="button" className="btn" onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} /> print / save as pdf
          </button>
          <a className="btn" href={`mailto:${profile.email}`}>
            <FontAwesomeIcon icon={faEnvelope} /> {profile.email}
          </a>
        </div>
      </div>

      <Window as="article" title="~/resume.txt" className="resume-doc" bodyClassName="resume-body p-5 phone:p-10">
        <header>
          <h1 className="m-0 font-display uppercase tracking-wide text-5xl phone:text-6xl leading-none text-phosphor glow">
            {profile.name}
          </h1>
          <div className="mt-2 font-semibold text-gold">
            {profile.title} <span className="font-normal text-dim resume-muted">· {profile.focus.join(" · ")}</span>
          </div>
          <div className="mt-1 text-sm text-dim resume-muted">
            <strong className="text-phosphor">{profile.clearance}</strong>
            {"  ·  "}
            {contact.join("  ·  ")}
          </div>
        </header>

        <Section title="summary">
          <p className="m-0">{profile.summary}</p>
        </Section>

        <Section title="experience">
          <div className="space-y-6">
            {experience.map((job) => (
              <article key={job.id}>
                <div className="flex flex-wrap justify-between gap-x-4">
                  <div>
                    <strong className="text-gold">{job.role}</strong> — {job.company}, {job.location}
                  </div>
                  <div className="text-dim resume-muted">{job.period}</div>
                </div>
                {job.roleNote && <div className="text-sm text-dim resume-muted italic">{job.roleNote}</div>}
                {job.groups.map((g) => (
                  <div key={g.label} className="mt-2">
                    <div className="text-xs uppercase tracking-wider text-dim resume-muted">{g.label}</div>
                    <ul className="diff">
                      {g.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </Section>

        <Section title="skills">
          <dl className="m-0 grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-x-4 gap-y-1">
            {skills.map((g) => (
              <div key={g.id} className="contents">
                <dt className="font-semibold text-gold">{g.title}</dt>
                <dd className="m-0 mb-1 sm:mb-0">{skillLine(g)}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="selected projects">
          <div className="space-y-3">
            {projects
              .filter((p) => p.onResume)
              .map((p) => (
                <article key={p.id} className="break-inside-avoid">
                  <div>
                    <strong className="text-gold">{p.name}</strong>
                    <span className="text-dim resume-muted"> — {p.stack.join(", ")}</span>
                    {p.links[0] && (
                      <span className="text-dim resume-muted text-sm"> · {bare(p.links[0].href.split("/tree/")[0])}</span>
                    )}
                  </div>
                  <ul className="diff">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
          </div>
        </Section>

        <Section title="leadership">
          <ul className="diff">
            {leadership.map((l) => (
              <li key={l.role}>
                <strong>{l.role}</strong>, {l.org}
                {l.period && ` (${l.period})`} — {l.detail}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="education">
          <div className="flex flex-wrap justify-between gap-x-4">
            <div>
              <strong className="text-gold">{education.degree}</strong>, minor in {education.minor} — {education.school},{" "}
              {education.location}
            </div>
            <div className="text-dim resume-muted">{education.period}</div>
          </div>
        </Section>
      </Window>
    </>
  );
}

export default Resume;
