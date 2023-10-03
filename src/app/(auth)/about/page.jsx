import React from "react";
import { AboutMe } from "@/components/AboutMe";
export const metadata = {
  title: "About me",
  description: "Joan Corporan Hernandez",
};

const page = () => {
  return (
    <>
      <div className="md:mx-16   mt-5  ">
        <AboutMe/>
      </div>
    </>
  );
};

export default page;
