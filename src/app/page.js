/* import Image from "next/image";
import { ParticlesContainer } from "@/components/ParticlesContainer";
import { ProjectsBtn } from "@/components/ProjectsBtn";
import { Avatar } from "@/components/Avatar";
import { motion } from "framer-motion";*/

import { AnimateTextJB } from "@/components/AnimateTextJB";
import { AnimatedImage } from "@/components/AnimatedImage";
import { ProjectsBtn } from "@/components/ProjectsBtn";
import { TextHome } from "@/components/TextHome";
import Link from "next/link";

export default function Home() {
  
  const textHp = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, natuseaque ipsa sit ea soluta in. Saepe suscipit nihil expedita voluptatibusrerum nisi necessitatibus eveniet, sint cupiditate ex praesentium quo?"
  
  return (
    <div className="xl:flex flex justify-center md:flex h-full w-full items-center ">
     <div className="xl:w-1/3 md:w-1/3  flex justify-center hidden md:block xl:block ">
      <AnimatedImage  src='https://res.cloudinary.com/dfxpgwzls/image/upload/v1696093296/3D_Animation_Style_hombre_de_pelo_corto_ondulado_piel_negra_se_0_piroz7.jpg'/>
      </div> 
      <div className="w-full  xl:w-1/2 md:w-1/2  h-full flex justify-center " >
        <div className="w-full text-center  flex flex-col  md:justify-center md:items-center  xl:pt-20  h-full container ">
        
          
            <TextHome text={'Transformning Ideas into'}/>
          
          
          <div className="text-center   p-[10px] max-wsm xl:max-w-xl  text-gray-400 xl:mx-0 rounded  ">

          <AnimateTextJB text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, natuseaque ipsa sit ea soluta in. Saepe suscipit nihil expedita voluptatibusrerum nisi necessitatibus eveniet, sint cupiditate ex praesentium quo?"}/>
          </div>
          <Link
            href="/assets/images/Cv.pdf"
            className=" bg-slate-100/5 xl:max-w-xl mx-auto text-gray-400 xl:mx-0 rounded w-1/3  flex  rounded-lg text-slate-100 items-center justify-center p-2 hover:bg-slate-100/40 hover:text-slate-800 "
            target={"_blank"}
            download={true}
          >
            Curriculum
          </Link>
          <div className="flex justify-center items-center relative z-10">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      
    </div>
  );
}
