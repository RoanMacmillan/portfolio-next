import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import LoadingModal from "@/components/LoadingModal";

export default function App({ Component, pageProps }: AppProps) {


  return (
    <main className="relative overflow-hidden">
      <Header />
      <Component {...pageProps} />
    </main>
  ); 
}

