import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faPlay } from "@fortawesome/free-solid-svg-icons";
import Window from "../components/Window";
import CrtImage from "../components/CrtImage";
import Rise from "../components/Rise";
import { PageIntro } from "../components/Prompt";
import { archive, projects } from "../data/resume";

const external = { target: "_blank", rel: "noreferrer" };

function Links({ links }) {
  if (!links.length) return <span className="text-dim text-sm">this ones just for me ;)</span>;
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <a key={l.href} href={l.href} className="btn !py-1 !px-2.5 text-xs" {...external}>
          {l.label} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[0.65rem]" />
        </a>
      ))}
    </div>
  );
}

function Stack({ items }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <span key={s} className="chip">
          {s}
        </span>
      ))}
    </div>
  );
}

function Title({ p }) {
  return (
    <div className="flex items-center gap-3">
      {p.icon && <img src={p.icon} alt="" className="w-8 h-8 object-contain" />}
      <h2 className="m-0 font-display text-4xl leading-none text-gold glow-gold">{p.name}</h2>
    </div>
  );
}

function Video({ id, n }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      {...external}
      className="relative block"
      aria-label={`Watch MagicMeds demo ${n} on YouTube`}
    >
      <CrtImage src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} alt="" imgClassName="aspect-video" />
      <span className="pointer-events-none absolute inset-0 z-10 grid place-items-center">
        <span className="chip !bg-ground/80 !border-phosphor/50 !text-phosphor">
          <FontAwesomeIcon icon={faPlay} className="text-[0.65rem]" /> demo {n}
        </span>
      </span>
    </a>
  );
}

function WideProject({ p }) {
  return (
    <Window title={`~/projects/${p.id}`} className="h-full">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-4 min-w-0">
          <Title p={p} />
          <p className="m-0 text-dim">{p.tagline}</p>
          <ul className="diff">
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <Stack items={p.stack} />
          <div className="mt-auto pt-2">
            <Links links={p.links} />
          </div>
        </div>
        <div className="flex gap-4 min-w-0">
          <CrtImage src={p.image.src} alt={p.image.alt} className="w-28 phone:w-36 shrink-0 self-start" imgClassName="aspect-[1/2] object-top" />
          <div className="grid gap-3 content-start flex-1 min-w-0">
            {p.videos.map((id, i) => (
              <Video key={id} id={id} n={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

function Project({ p }) {
  const portrait = p.image?.portrait;
  return (
    <Window title={`~/projects/${p.id}`} className="h-full flex flex-col" bodyClassName="p-4 phone:p-6 flex-1 flex flex-col gap-4">
      <Title p={p} />
      <p className="m-0 text-dim">{p.tagline}</p>
      {p.image && !portrait && (
        <CrtImage src={p.image.src} alt={p.image.alt} imgClassName="aspect-[16/9] object-top" />
      )}
      <div className="flex gap-4">
        {portrait && (
          <CrtImage src={p.image.src} alt={p.image.alt} className="w-24 phone:w-28 shrink-0 self-start" imgClassName="aspect-[1/2] object-top" />
        )}
        <ul className="diff min-w-0">
          {p.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
      <Stack items={p.stack} />
      <div className="mt-auto pt-2">
        <Links links={p.links} />
      </div>
    </Window>
  );
}

function Projects() {
  return (
    <>
      <PageIntro cwd="~/projects" command="ls -la" title="projects">
        My day job isn't public, so these are side projects and school builds — mostly made to learn something new.
      </PageIntro>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <Rise key={p.id} className={p.wide ? "lg:col-span-2" : ""}>
            {p.wide ? <WideProject p={p} /> : <Project p={p} />}
          </Rise>
        ))}
        <Rise>
          <Window title="~/projects/archive — ls" className="h-full">
            <h2 className="m-0 mb-1 font-display text-4xl leading-none text-gold glow-gold">archive</h2>
            <p className="m-0 mb-4 text-dim">Older school projects, kept for posterity.</p>
            <ul className="m-0 p-0 list-none space-y-3">
              {archive.map((a) => (
                <li key={a.name}>
                  <a href={a.href} className="link" {...external}>
                    {a.name}/
                  </a>
                  <div className="text-dim text-sm">{a.note}</div>
                </li>
              ))}
            </ul>
          </Window>
        </Rise>
      </div>
    </>
  );
}

export default Projects;
