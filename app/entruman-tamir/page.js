"use client"

import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);


import AnimatedText from "@/components/common/AnimatedText";

import BlackTamirSectionCalgilar from "./Section-Calgilar";
import BlackTamirSectionAmfi from "./Section-Amfi";
import BlackTamirSectionCalgilar2 from "./Section-Calgilar-2";
import FooterBefeoreLight from "../tools/FooterBefore-Light";
import TamirHero from "./tamirHero";
import KurslarHero from "../kurslar/kurslarHero";

const BlackEnstrumanTamirMain = () => {
  {/*Enstrümanınız için ihtiyaç duyduğunuz Tamir & Bakım işlemlerini uzman kadromüz ile gerçekleştirmekteyiz.*/ }
  return (
    <>


      <ParallaxContainer
        className="home-section bg-dark-alpha-30 
        light-content parallax-5 scrollSpysection"
        style={{
          backgroundImage:
            "url(/assets/images/section-bg-2.jpg)",
        }}
        id="home"
      >
        <TamirHero />
      </ParallaxContainer>
      <BlackTamirSectionCalgilar />


    </>
  )
}

export default BlackEnstrumanTamirMain;

