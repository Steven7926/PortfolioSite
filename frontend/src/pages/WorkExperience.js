import Window from "../components/Window";
import Rise from "../components/Rise";
import { PageIntro } from "../components/Prompt";
import { experience, profile } from "../data/resume";
import { yearsSince } from "../utils/time";

function Job({ job }) {
  return (
    <Window title={`~/work/${job.file}`} meta={<span className="hidden sm:inline">{job.period}</span>}>
      <div className="flex flex-col sm:flex-row gap-5">
        <a
          href={job.url}
          target="_blank"
          rel="noreferrer"
          className={`shrink-0 w-24 h-24 rounded-md grid place-items-center p-2.5 border border-line transition-shadow hover:shadow-[0_0_20px_-4px_rgb(var(--c-phosphor)/0.6)] ${
            job.logoTile === "light" ? "bg-[#eef3ec]" : "bg-black"
          }`}
        >
          <img src={job.logo} alt={`${job.company} website`} className="max-w-full max-h-full object-contain" />
        </a>
        <div className="min-w-0">
          <h2 className="m-0 font-display text-4xl leading-none text-gold glow-gold">{job.company}</h2>
          <div className="mt-1 font-semibold">
            {job.role}
            {job.roleNote && <span className="text-dim font-normal"> — {job.roleNote}</span>}
          </div>
          <div className="text-dim text-sm">
            {job.location} · {job.period}
          </div>
          {job.badge && (
            <span className="chip mt-2 !text-phosphor !border-phosphor/40">
              <span aria-hidden="true">●</span> {job.badge}
            </span>
          )}
          <p className="text-dim mt-3 mb-0 max-w-3xl">{job.summary}</p>
        </div>
      </div>

      <div className="mt-7 grid gap-x-10 gap-y-6 lg:grid-cols-2">
        {job.groups.map((g) => (
          <section key={g.label}>
            <h3 className="m-0 text-sm font-semibold text-phosphor">
              <span className="text-dim">## </span>
              {g.label}
            </h3>
            <ul className="diff mt-2">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-7 pt-4 border-t border-line border-dashed flex flex-wrap items-center gap-2">
        <span className="text-dim text-sm mr-1">stack:</span>
        {job.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
    </Window>
  );
}

function WorkExperience() {
  const total = yearsSince(profile.careerStart);
  const current = yearsSince(experience[0].start);

  return (
    <>
      <PageIntro cwd="~/work" command="cat *.log" title="work">
        {total}+ years shipping software, the last {current} as a full-time engineer at {experience[0].company}.
      </PageIntro>

      <Rise>
        <ol className="relative m-0 p-0 list-none space-y-10 md:pl-12 md:before:content-[''] md:before:absolute md:before:left-[0.95rem] md:before:top-3 md:before:bottom-3 md:before:w-px md:before:bg-line">
          {experience.map((job) => (
            <li key={job.id} className="relative">
              <span
                aria-hidden="true"
                className="hidden md:block absolute -left-12 top-2.5 w-[1.95rem] text-center text-phosphor glow font-semibold bg-ground"
              >
                *
              </span>
              <Job job={job} />
            </li>
          ))}
        </ol>
      </Rise>
    </>
  );
}

export default WorkExperience;
