import { blackMenu } from "@/data/menuBlack";
import BlackFooter from "../tools/BlackFooter";
import AnimatedText from "@/components/common/AnimatedText";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import HeaderBlack from "../tools/HeaderBlack";

const BlackKurslar = () => {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <HeaderBlack links={blackMenu} />
          </nav>
          <main id="main" style={{ minHeight: 500 }}>
          <section className="page-section pt-0 pb-0" id="home">
              <ParallaxContainer
                className="page-section bg-gray-light-1 bg-light-alpha-90 parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1.jpg)",
                }}
              >
                <div className="container position-relative pt-30 pt-sm-50">
                  {/* Section Content */}
                  <div className="text-center">
                    <div className="row">
                      {/* Page Title */}
                      <div className="col-md-8 offset-md-2">
                        <h1 className="hs-title-1 mb-20">
                          <span
                            className="wow charsAnimIn"
                            data-splitting="chars"
                          >
                            <AnimatedText text="Birebir Kurslar" />
                          </span>
                        </h1>
                        <div className="row">
                          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <p
                              className="section-descr mb-0 wow fadeIn"
                              data-wow-delay="0.2s"
                              data-wow-duration="1.2s"
                            >
                              Enstrüman çalmada en iyi eğitim yöneti olarak kabul edilen birebir dersler ile eğitim veriyoruz.
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Page Title */}
                    </div>
                  </div>
                  {/* End Section Content */}
                </div>
              </ParallaxContainer>
            </section>
          </main>
          <BlackFooter />

        </div> 
      </div>
    </>
  );
};

export default BlackKurslar;
