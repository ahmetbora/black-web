"use client"
import AnimatedText from "@/components/common/AnimatedText";

const KurslarHero = () => {
    return (
        <div className="container d-flex align-items-center pt-10 pb-100 pt-sm-120 pb-sm-120">
            {/* Section Content */}
            <div className="text-center">
                <div className="row">
                    {/* Page Title */}
                    <div className="col-md-12 offset-md-2 mt-50">
                        <h1 className="hs-title-1 mb-50 mt-100">
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
    )

}
export default KurslarHero;