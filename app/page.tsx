import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar/Navbar";
import { AtomIcon, CircleIcon, CirclePlayIcon, GithubIcon } from "lucide-react";
import ButtonHref from "./components/ButtonHref/ButtonHref";
import Project001 from "./components/Project001/Project001";
import LoaderPage from "./components/LoaderPage/LoaderPage";

export default function Home() {
  return (
    <>
      <Analytics />
      <LoaderPage />
      <section className="relative w-full h-screen">
        <Project001 />
        <div className="absolute inset-0 z-20 flex flex-col px-6 sm:px-16 py-8">
          <Navbar />
          <div className="flex flex-col max-sm:mt-52 sm:flex-row justify-between items-center h-full select-none">
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-white text-xl sm:text-4xl mono tracking-tighter">
                <b>{"//"}</b> project <b>001</b>
              </h1>
              <div className="flex flex-col">
                <span className="text-[3rem] sm:text-[5.2rem] mono tracking-tighter">
                  let&#39;s know
                </span>
                <span className="font-bold text-[6rem] sm:text-[10rem] sm:mt-[-4rem] mt-[-2rem] tracking-tighter">
                  Lucy?
                </span>
                <div className="flex flex-row items-center gap-2">
                  <ButtonHref
                    href="https://lucy.l1ma.com"
                    title="Getting Started"
                  />
                  <button className="hover:bg-white hover:text-black text-white p-4 rounded-full font-bold mono px-6 text-sm sm:text-xl bg-green-900 bg-opacity-15 transition-all flex flex-row items-center gap-3 border-2 border-white">
                    <CirclePlayIcon size={24} />
                    Showcase
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-fit bg-black p-4 sm:pl-16 pl-4 border-t border-neutral-700">
        <div className="flex max-sm:justify-between items-center h-full gap-4">
          <div className="flex flex-row gap-4 items-center">
            <AtomIcon size={24} />
            <span className="mono">@ 2024</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="relative flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2C911A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
            </span>
            <p className="font-mono">All systems operational</p>
          </div>
        </div>
      </section>
    </>
  );
}
