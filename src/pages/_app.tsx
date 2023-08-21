import "@/styles/globals.css";
import type { AppProps } from "next/app";
import PageTransition from "@/components/PageTransition";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="relative overflow-hidden">
      <Component {...pageProps} />
    </main>
  );
}
