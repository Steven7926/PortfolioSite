import Window from "../components/Window";
import CrtImage from "../components/CrtImage";
import Rise from "../components/Rise";
import { PageIntro } from "../components/Prompt";
import { education, leadership } from "../data/resume";
import ucfSeal from "../assets/UCFlogo.png";
import graduation from "../assets/fam.jpg";
import acmLogo from "../assets/ACM.png";

function Education() {
  return (
    <>
      <PageIntro cwd="~/education" command="cat ucf.txt leadership.txt" title="education">
        Computer Engineering at UCF — and the places I've ended up leading people.
      </PageIntro>

      <div className="grid gap-6 lg:grid-cols-5">
        <Rise className="lg:col-span-3">
          <Window title="~/education/ucf.txt" className="h-full">
            <div className="flex flex-col phone:flex-row gap-5">
              <a href={education.url} target="_blank" rel="noreferrer" className="shrink-0 self-start">
                <img src={ucfSeal} alt="University of Central Florida seal" className="w-24 h-24 rounded-full" />
              </a>
              <div className="min-w-0">
                <h2 className="m-0 font-display text-4xl leading-none text-gold glow-gold">{education.school}</h2>
                <div className="text-dim text-sm mt-1">
                  {education.location} · {education.period}
                </div>
                <dl className="m-0 mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                  <dt className="text-gold">degree</dt>
                  <dd className="m-0">{education.degree}</dd>
                  <dt className="text-gold">minor</dt>
                  <dd className="m-0">{education.minor}</dd>
                </dl>
              </div>
            </div>
            <h3 className="mt-6 mb-2 text-sm font-semibold text-phosphor">
              <span className="text-dim">## </span>coursework
            </h3>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </Window>
        </Rise>

        <Rise className="lg:col-span-2" delay={120}>
          <Window title="~/education/graduation.jpg" className="h-full" bodyClassName="p-3">
            <CrtImage
              src={graduation}
              alt="Steven in cap and gown at UCF graduation with family under a balloon arch"
              caption="graduation day, 2021 — the people who got me there. the masks really show a sign of the times."
              imgClassName="aspect-[4/3] object-[center_80%]"
            />
          </Window>
        </Rise>
      </div>

      <Rise>
        <Window title="~/education/leadership.txt" className="mt-6">
          <div className="flex flex-col md:flex-row gap-8">
            <ol className="m-0 p-0 list-none grid gap-5 sm:grid-cols-2 flex-1">
              {leadership.map((l) => (
                <li key={l.role} className="border-l-2 border-sage pl-4">
                  <div className="font-semibold text-gold">{l.role}</div>
                  <div className="text-dim text-sm">
                    {l.org}
                    {l.period && ` · ${l.period}`}
                  </div>
                  <p className="m-0 mt-1">{l.detail}</p>
                </li>
              ))}
            </ol>
            <img src={acmLogo} alt="UCF ACM & ACM-W 2020–2021 logo" className="w-32 h-32 rounded-md self-center md:self-start opacity-90" />
          </div>
        </Window>
      </Rise>
    </>
  );
}

export default Education;
