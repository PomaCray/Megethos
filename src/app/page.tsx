import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Slide from "@/components/Slide";
import Features from "@/components/Features";
import Plan from "@/components/Plan";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <>
  <Header/>
  <Hero/>
  <Slide/>
  <Features/>
  <Plan/>
  <FAQ/>
  <Contact/>
  <Footer/>
  </>
  );
}
