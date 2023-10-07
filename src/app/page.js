import { AnimateTextJB } from "@/components/AnimateTextJB";
import { AnimatedImage } from "@/components/AnimatedImage";
import { Download } from "@/components/Icons";
import { ProjectsBtn } from "@/components/ProjectsBtn";
import { TextHome } from "@/components/TextHome";
import Link from "next/link";
export const metadata ={
  title:'Joan Corporan',
  description:'Joan Corporan Hernandez, Portafolio Joan Corporan Hernandez'
}

export default function Home() {
  
  const textHp = "Transformar ideas en realidad digital implica convertir conceptos, proyectos o visiones en aplicaciones, sitios web, software, contenido multimedia u otras formas de contenido digital. "
  
  return (
    <div className="xl:flex flex justify-center md:flex md:items-start h-max h-screen w-full items-center ">
     <div className="xl:w-1/3 md:w-1/3  flex justify-center hidden md:block xl:block ">
      <AnimatedImage  src='https://res.cloudinary.com/dfxpgwzls/image/upload/v1696093296/3D_Animation_Style_hombre_de_pelo_corto_ondulado_piel_negra_se_0_piroz7.jpg'/>
      </div> 
      <div className="w-full  xl:w-1/2 md:w-1/2  h-full flex justify-center  mb-[100px]" >
        <div className="w-full text-center  flex flex-col    md:items-center  xl:pt-20  h-full container ">
        
          
            <TextHome text={'Transformando ideas en'}/>
          
          
          <div className="text-center    max-wsm xl:max-w-xl  text-white xl:mx-0 rounded  ">

          <AnimateTextJB className=" xl:text-left text-center px-3 text-white mb-[50px] text-2xl" text={textHp }/>
          </div>
          <Link
            href="/image-bg/flat-mountains.png"
            className=" bg-slate-100/5 xl:max-w-xl mx-auto text-gray-400 xl:mx-0 rounded w-1/3  flex  rounded-lg text-slate-100 items-center justify-around p-2 hover:bg-slate-100/40 hover:text-slate-800 hover:scale-110 transition ease-in-out "
            target={"_blank"}
            download={true}
          >
            <p className="w-full flex justify-center items-center ">

            <span className="text-lg font-medium p-2 ">Curriculum</span>  <span>
              <Download/>
            </span>
            </p>
          </Link>
          <div className="flex justify-center items-start md:items-center xl:items-center relative z-10 ">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      
    </div>
  );
}
