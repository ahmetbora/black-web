import AnimatedText from "@/components/common/AnimatedText";

const TamirHero = () => {
    return (
        <div className="container d-flex align-items-center pt-10 pb-100 pt-sm-120 pb-sm-120">
            {/* Section Content */}
            <div className="text-center">
                <div className="row">
                    {/* Page Title */}
                    <div className="col-md-12 mt-50">
                        <h1 className="hs-title-1 mb-30 mt-100">
                            <span
                                className="wow charsAnimIn"
                                data-splitting="chars"
                            >
                                <AnimatedText text="Enstrüman Tamir & Bakımı" />
                            </span>
                        </h1>
                    </div>
                    <div className="col-md-10 offset-1  mt-10">

                        <p
                            className="section-descr mb-0 wow fadeIn"
                            data-wow-delay="0.2s"
                            data-wow-duration="1.2s"
                        >
                            Enstrümanınız için ihtiyaç duyduğunuz Tamir & Bakım işlemlerini uzman kadromüz ile gerçekleştirmekteyiz.
                        </p>

                    </div>
                    {/* End Page Title */}
                </div>
            </div>
            {/* End Section Content */}
        </div>
    )
}

export default TamirHero;