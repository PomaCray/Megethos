import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore: allow side-effect import of global css without type declarations
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Megethos",
  description: "Content Creator Platform",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {props.children}
      </body>
    </html>
  );
}
