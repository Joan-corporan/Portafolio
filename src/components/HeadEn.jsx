import React from "react";
import  {Facebook, GitHubB, Instagram, LinkedinB,  } from "./Icons";
import Link from "next/link";

export const HeadEn = () => {
  return (
    <>
      <div className="w-full    xl:flex  xl:justify-around   xl:items-center   pt-4  top-0">
        <div className=" my-2 flex justify-center items-center">
          <Link href={'/'}>
          <h1 className=" justify-between font-bold text-3xl text-white">
            Joan
          </h1>
          </Link>
          <span className="text-transparent">B</span>
            <p className="text-3xl font-light text-white" >
              Corporán <span className="font-bold text-amber-400">.</span>
            </p>
        </div>
        <div  className=" my-2 flex justify-center items-center">
          <nav className="flex w-full  my-2 gap-x-5 justify-center  items-center"> 
          <a target={"_blank"} href="https://github.com/Joan-corporan?tab=repositories">
              <GitHubB />
            </a>
            <a target={"_blank"} href="/">
              <Facebook />
            </a>
           
            <a target={"_blank"} href="/">
              <Instagram/>
            </a>
            <a target={"_blank"} href="https://www.linkedin.com/in/joan-corporan-hern%C3%A1ndez-a16992268/">
              <LinkedinB/>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};
