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
        <div className=' bg-gradient-to-r from-emerald-300 to-blue-500   w-full   '>
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

