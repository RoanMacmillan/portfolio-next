import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import HomeBtn from "@/components/HomeBtn";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-1 w-full bg-customBlack"></div>
      {/* <button className="fixed m-6 bottom-0">12:37 PM</button> */}
      <HomeBtn />
      <ScrollToTop />
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </main>
  ); 
}
