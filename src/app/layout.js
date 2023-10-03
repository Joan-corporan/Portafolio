import "./globals.css";
import { Inter } from "next/font/google";
import { HeadEn } from "@/components/HeadEn";
import { NavbarOrigin } from "@/components/NavbarOrigin";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio",
  description: "Joan Corporan Hernandez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=' bg-gradient-to-r from-emerald-300 to-blue-500   w-full   '>
          {/* bg-[url("/image-bg/rose-petals.png")] h-screen w-full bg-no-repeat bg-cover bg-center */}
          <div className="h-full" >
           {/* className="flex flex-col bottom-0 fixed w-full  sm:flex  " */}
            <div className="h-full"  >
              
              <HeadEn />
              <NavbarOrigin />
              {children}
            </div>
           {/*  <div className="  col-center w-1/6 justify-center items-end ">
            </div> */}
          </div>
        </div>
      </body>
    </html>
  );
}

