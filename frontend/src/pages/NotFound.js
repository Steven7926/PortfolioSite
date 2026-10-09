import { Link, useLocation } from "react-router-dom";
import Window from "../components/Window";
import Typed from "../components/Typed";
import { Prompt } from "../components/Prompt";
import { sections } from "../data/sections";

const ERROR_BLOCK = 'return {\n  error: "Nothing Here :(",\n}';

function NotFound() {
  const { pathname } = useLocation();

  return (
    <Window title="bash — 404" bodyClassName="p-5 phone:p-8 space-y-4">
      <Prompt>cd {pathname}</Prompt>
      <div className="text-red">bash: cd: {pathname}: No such file or directory</div>
      <pre className="m-0 text-amber whitespace-pre-wrap">
        <Typed text={ERROR_BLOCK} msPerChar={30} />
      </pre>
      <div className="pt-2">
        <Prompt>ls ~</Prompt>
        <div className="flex flex-wrap gap-x-5 mt-1">
          {sections.map((s) => (
            <Link key={s.id} to={s.path} className={`${s.file ? "text-fg" : "text-link"} hover:underline underline-offset-2`}>
              {s.file ?? `${s.id}/`}
            </Link>
          ))}
        </div>
      </div>
    </Window>
  );
}

export default NotFound;
