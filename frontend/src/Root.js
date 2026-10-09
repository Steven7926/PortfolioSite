import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShellDrawer from "./components/ShellDrawer";
import { ShellProvider, useShell } from "./components/ShellSession";

const Root = () => (
  <ShellProvider>
    <Layout />
  </ShellProvider>
);

function Layout() {
  const { openShell, mounted } = useShell();

  return (
    <div className="crt-ground min-h-screen">
      <a href="#main" className="skip-link no-print">
        skip to content
      </a>
      <div className="crt-boot min-h-screen flex flex-col" style={{ paddingBottom: "var(--shell-h, 0px)" }}>
        <Header onOpenShell={openShell} />
        <main id="main" className="flex-1 w-full max-w-6xl mx-auto px-4 phone:px-6 md:px-8 pt-8 phone:pt-10">
          <Outlet />
        </main>
        <Footer />
      </div>
      {mounted && <ShellDrawer />}
      <div className="crt-overlay" aria-hidden="true" />
      <ScrollRestoration />
    </div>
  );
}

export default Root;
