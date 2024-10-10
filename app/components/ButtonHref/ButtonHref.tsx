"use client";
export default function ButtonHref({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  function goToProject(url: string) {
    window.open(url, "_blank");
  }
  return (
    <button
      onClick={() => goToProject(href)}
      className="hover:bg-[#2C9A11] text-white p-4 h-full rounded-full font-bold mono px-6 sm:px-6 text-sm sm:text-xl backdrop-filter backdrop-blur-xl bg-green-900 bg-opacity-15 transition-all flex flex-row items-center gap-3 border-2 border-transparent"
    >
      {title}
    </button>
  );
}
