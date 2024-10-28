

import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

import GirisHero from "./giris/girisHero";
import GirisKurslar from "./giris/giris_kurslar";
import GirisTamir from "./giris/giris_tamir";

export const metadata = {
  title:
    "Black Music Kurtköy",
  description:
    "Black Music Kurtköy - Giriş",
};
export default function Home1MainDemoMultiPage() {
  return (
    <>

      <ParallaxContainer
        className="home-section bg-dark-alpha-30 light-content parallax-5 scrollSpysection"
        style={{
          backgroundImage:
            "url(/assets/black/main-t-4.jpg)",
        }}
        id="home"
      >
        <GirisHero />
      </ParallaxContainer>

      <GirisKurslar />

      <GirisTamir />



    </>
  );
}
