import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";

import { Footer, Navbar } from "@/components/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["400", "500", "700"], // Add weights you need
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Sherife Franca",
  description:
    "Sherife Franca is a leading fitness platform offering expert trainers, personalized programs, state-of-the-art equipment, and a supportive community. Achieve your health and wellness goals with our comprehensive classes and professional guidance. Perfect for all fitness levels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}>
        <Navbar />
        <main className=" flex flex-col items-center justify-center md:block">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}
