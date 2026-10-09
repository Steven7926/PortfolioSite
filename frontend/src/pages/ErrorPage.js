import { Link, useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Window from "../components/Window";

function ErrorPage() {
  const error = useRouteError();
  const message = error?.statusText || error?.message || String(error);

  return (
    <div className="crt-ground min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 phone:px-6 md:px-8 pt-10">
        <Window title="tty1 — kernel panic" bodyClassName="p-5 phone:p-8 space-y-3">
          <div className="text-red font-semibold">Kernel panic - not syncing: {message}</div>
          <div className="text-dim">Something broke while rendering this page. It's not you, it's me.</div>
          <div className="flex flex-wrap gap-3 pt-3">
            <button type="button" className="btn" onClick={() => window.location.reload()}>
              reboot
            </button>
            <Link className="btn" to="/">
              cd ~
            </Link>
          </div>
        </Window>
      </main>
      <div className="crt-overlay" aria-hidden="true" />
    </div>
  );
}

export default ErrorPage;
