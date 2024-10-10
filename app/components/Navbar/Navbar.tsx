import Image from "next/image";
import logo from "../../assets/icons/Logo.svg";
export default function Navbar() {
  return (
    <div className="flex fixed left-0 flex-row items-center w-full p-4 rounded-full px-8 backdrop-filter backdrop-blur-xl bg-neutral-900 bg-opacity-25 z-20">
      <Image src={logo} width={100} height={100} alt="Picture of the author" />
    </div>
  );
}
