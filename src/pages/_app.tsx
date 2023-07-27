import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="relative overflow-hidden">
      <ScrollToTop />
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </main>
  ); 
}
