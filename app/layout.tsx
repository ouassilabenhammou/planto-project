import type { Metadata } from "next";

import "./globals.css";

import Header from "./components/Header";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Ouassila - Planto Project",
  description: "Planto project by Ouassila",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} antialiased min-h-screen bg-grey-50 flex flex-col text-white`} style={{backgroundColor: '#1B2316'}}>
      
        <Header />

        
        <main >{children}
       
        </main>
      </body>
    </html>
  );
}
