import "./globals.css";
import { Inter } from "next/font/google";
import { HeadEn } from "@/components/HeadEn";
import { NavbarOrigin } from "@/components/NavbarOrigin";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio",
  description: "Joan Corporan Hernandez, Portafolio Joan Corporan Hernandez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=' bg-[url(https://res.cloudinary.com/dfxpgwzls/image/upload/v1696695706/sun-tornado_n0ksaq.png)] bg-cover bg-no-repet  w-full   '>
          <div className="h-full" >
          
            <div className="h-full"  >
              
              <HeadEn />
              <NavbarOrigin />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

