//"use client"
import AnimatedText from "@/components/common/AnimatedText";

const KurslarHero = () => {
    return (
        <div className="container position-relative pt-lg-50 pt-sm-10 pb-100 pb-sm-20">
            {/* Section Content */}
            <div className="text-center">
                <div className="row">
                    {/* Page Title */}
                    <div className="mt-50">
                        <h1 className="hs-title-1 mb-50 mt-70 mb-sm-20">
                            <span className=" charsAnimIn-2" data-splitting="chars">
                                Birebir <span className="font-alt">Kurslar</span>
                            </span>
                        </h1>
                        <div className="row">
                            <div className="  col-lg-8 offset-lg-2 pb-sm-30">
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