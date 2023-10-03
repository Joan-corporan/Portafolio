import Link from "next/link";
import React from "react";
import { HomeRN, ProjectsNav, UserAboutme } from "./Icons";

export const NavbarOrigin = () => {
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-100 top-0 w-full xl:w-[80px] xl:max-w-md xl:h-screen bg-[#FAD051] ">

      <div className=" flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 text-xl text-xl xl:rounded-full  ">
        <Link href="/"
          className="hover:scale-110 transition ease-in-out p-3 rounded-lg flex w-full flex-col items-center justify-center  hover:bg-slate-100/30"
          
        >
          <div className="w-7 ">
            <HomeRN className="w-full h-8 " />
          </div>
          <div>
            <p className="text-white ">Home</p>
          </div>
        </Link>
        <Link href="/about"
          className="hover:scale-110 transition ease-in-out  rounded-lg  flex w-full flex-col items-center justify-center py-3 hover:bg-slate-100/30"
          
        >
          <div className="w-7 ">
            <UserAboutme className="h-8" />
          </div>
          <div>
            <p className="text-white text-center ">About me</p>
          </div>
        </Link>
        <Link href="/projects "
          className="hover:scale-110 transition ease-in-out p-3 rounded-lg flex w-full flex-col items-center justify-center my-3 hover:bg-slate-100/30"
          
        >
          <div className="w-7 p-0 ">
            <ProjectsNav className="h-8 " />
          </div>
          <div>
            <p className="text-white ">Projects</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};
