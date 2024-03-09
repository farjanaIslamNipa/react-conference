"use client"
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import hamburgerIcon from '../../assets/hamburger.svg'
import logo from '../../assets/react-logo.svg'
import cn from "@/utils/cn";
import closeIcon from '../../assets/close.svg'

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="px-4 pt-[35px] md:pt-10 md:bg-transparent relative z-50">
      <div className="w-full max-w-[1320px] mx-auto">
        <nav className="flex justify-between items-center">
          {/* Brand Logo */}
          <div>
            <Link href="/">
              <Image src={logo} alt="Logo" className="h-8" />
            </Link>
          </div>

          {/* Nav Items */}
          <div className={cn(
                "w-0 md:w-auto small-device-collapse-nav bg-secondary md:bg-transparent bg-opacity-50 md:bg-opacity-100",
                { "w-full": expand }
              )}
            >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 pt-4 md:pt-0 w-[70%] md:w-full bg-white md:bg-transparent h-screen md:h-auto">
                {expand && (
                  <div className="absolute right-4 top-[30px] block md:hidden">
                    <button
                      onClick={() => setExpand(!expand)}
                      className="bg-white transition-all duration-150 hover:bg-opacity-100 rounded p-[8px]"
                    >
                      <Image src={closeIcon} alt="Close" height={10} width={10} />
                    </button>
                  </div>
                )}
                <div className="pl-5 pb-6 block md:hidden">
                  <Image src={logo} alt="Logo" className="" height={100} width={100} />
                </div>
                <div className="pl-5 md:pl-0 space-y-5 md:space-y-0 space-x-0 md:space-x-[58px] flex flex-col md:flex-row">
                  <Link href="#" className='nav-item'>
                    About us
                  </Link>
                  <Link href="#" className="nav-item">
                    What We do
                  </Link>
                  <Link href="#" className="nav-item">
                    Our work
                  </Link>
                  <Link href="#" className="nav-item">
                    Blog
                  </Link>
                  <Link href="#" className="nav-item">
                    Say hi
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <button onClick={() => setExpand(!expand)} >
                <Image src={hamburgerIcon} alt="Menu" className="h-6" />
              </button>
            </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;