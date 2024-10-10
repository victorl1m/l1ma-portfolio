import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Video from "next-video";
import { CirclePlayIcon } from "lucide-react";
import ButtonHref from "./components/ButtonHref/ButtonHref";
import Project001 from "./components/Project001/Project001";
import LoaderPage from "./components/LoaderPage/LoaderPage";

export default function Home() {
  return (
    <>
      <LoaderPage />
      {/* First section with video and Navbar */}
      <section className="relative w-full h-screen">
        <Project001 />
        <div className="absolute inset-0 z-20 flex flex-col px-6 sm:px-16 py-8">
          <Navbar />
          <div className="flex flex-col max-sm:mt-52 sm:flex-row justify-between items-center h-full select-none">
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-white text-xl sm:text-4xl mono tracking-tighter">
                <b>//</b> project <b>001</b>
              </h1>
              <div className="flex flex-col">
                <span className="text-[3rem] sm:text-[5.2rem] mono tracking-tighter">
                  let's know
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
            {/* Contêiner com altura fixa e rolagem interna */}
            <div
              className="flex flex-col items-end backdrop-filter backdrop-blur-xl p-4"
              style={{ height: "200px", overflowY: "auto" }}
            ></div>
          </div>
        </div>
      </section>

      {/* New section (second section) */}
      <section className="w-full h-screen bg-gray-800">
        <div className="flex justify-center items-center h-full">
          <h2 className="text-white text-3xl">This is the second section</h2>
        </div>
      </section>
    </>
  );
}
