"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className='header'>
      <Link href='/' className="w-20 h-10 rounded-lg bg-white flex items-center justify-center font-bold">
        <p className="blue-gradient_text">ANKIT</p>
      </Link>
      <nav className='flex text-lg gap-7 font-medium'>
        <Link href='/about' className={pathname === "/about" ? "text-blue-600" : "text-black"}>
          About
        </Link>
        <Link href='/projects' className={pathname === "/projects" ? "text-blue-600" : "text-black"}>
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
