"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Warning from "./component/Warning";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {

 const [isAdult, setIsAdult] = useState(null);

  useEffect(() => {
    const raw = window.localStorage.getItem("kys");
    try {
      setIsAdult(raw ? JSON.parse(raw) : null);
    } catch {
      setIsAdult(null);
    }
  }, []);


  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}
         {!isAdult && <Warning setIsAdult={setIsAdult}/>}
      </body>
     
    </html>
  );
}
