import Footer1 from "@/components/footers/Footer1";
import Home1 from "@/components/homes/home-1";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Hero1 from "@/components/homes/home-1/heros/Hero1";
//import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems, blackMenu } from "@/data/menuBlack";
import Header1Black from "@/components/headers/Header1Black";
import BlackFooter from "../tools/BlackFooter";
import HeaderBlack from "../tools/HeaderBlack";
export const metadata = {
  title:
    "Black Music Kurtköy",
  description:
    "Black Music Kurtköy - Giriş",
};
export default function Home1MainDemoMultiPage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <HeaderBlack links={blackMenu} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/full-width-images/section-bg-1.jpg)",
              }}
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>
            <Home1 />
          </main>
          <BlackFooter />
        </div>{" "}
      </div>
    </>
  );
}
