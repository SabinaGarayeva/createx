import "@/app/_styles/globals.css";

import type { Metadata } from "next";

import Footer from "./_components/Footer";

import Header from "./_components/Header";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Createx",
  description:
    "Shop with ease and enjoy worldwide shipping, ensuring you stay fashionable wherever you go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <header>
          <Header />
        </header>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
