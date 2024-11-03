"use client"
import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
    () => import("@/components/common/ParallaxContainer"),
    {
        ssr: false, // Disable server-side rendering
    }
);
const BlackHakkimizda = () => {
    return (
        <>
            <ParallaxContainer
                className="home-section bg-dark-alpha-30 light-content parallax-5 scrollSpysection" style={
                    {
                        backgroundImage:
                            "url(/assets/images/section-bg-2.jpg)",
                    }
                }
                id="home"
            >
                <div className="container position-relative pt-100 pb-100 pb-sm-20 pt-sm-80">
                    {/* Home Section Content */}
                    <div className="home-content text-center">
                        <h1 className="hs-title-2 mb-0">
                            <span className="wow charsAnimIn-2" data-splitting="chars">
                                Hakkımızda
                            </span>
                        </h1>
                    </div>
                    {/* End Home Section Content */}
                </div>
            </ParallaxContainer>
            <section className="page-section overflow-hidden  ">
                <div className="container" style={{ minHeight: 400 }}>
                </div>
            </section>

        </>
    )
}


export default BlackHakkimizda;