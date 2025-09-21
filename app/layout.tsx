import type { Metadata } from "next";

import "./globals.css";

import Header from "./components/Header";
import { inter } from "./fonts";
import Footer from "./components/Footer";

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
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col text-white mx-auto max-w-8xl justify-between `}
        style={{ backgroundColor: "#1B2316" }}
      >
        <Header />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
