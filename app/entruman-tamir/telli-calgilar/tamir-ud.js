import AnimatedText from "@/components/common/AnimatedText";

const TamirUd = () => {
    return (
        <>
            <section id="portfolio"
                className={`page-section `}>
                <div className="container position-relative">
                    <div className="row mb-40 mb-sm-30">
                        <div className="col-md-6 col-lg-4">
                            <h2 className="section-title mb-0">
                                <AnimatedText text="Ud Tamiri" />
                            </h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col wow fadeIn"
                            data-wow-delay="0.2s"
                            data-wow-duration="1.2s">
                            <p
                                className=" mb-3 "
                            >
                                Ud kelimesi arapça kökenli bir kelimedir. Ud telli çalgıların önemli bir parçasıdır. Ud diğer telli çalgılara nazaran daha eski müzik aletlerinin başında gelmektedir.3 çeşitten fazla ud bulunmaktadır. Eski saray dönemlerinde sıkça kullanılan ud günümüz de eğlenmek ve fasıl yapmakta sıkça kullanılmaktardır.
                            </p>


                        </div>
                        <div className="row">
                            <p className="mb-3 mt-4">
                                <strong>Yapmış olduğumuz hizmetlerimizin bazıları şunlardır;</strong>
                            </p>
                            <div className="col">

                                <ul>
                                    <li>Kırık ve çatlak onarımı</li>
                                    <li>Al ve üst eşik bakım ve onarım</li>
                                    <li>Burgu değişim</li>
                                    <li>Çila ve polyester yenileme</li>
                                    <li>Yön değiştirme(sağdan sola)</li>
                                    <li>Burgu yuva açma</li>
                                    <li>Kapak onarım ve değişim</li>
                                </ul>

                            </div>
                            <div className="col">

                                <ul>
                                    <li>Tesviye</li>
                                    <li>Sap değişimi</li>
                                    <li>Ekolayzer takımı</li>
                                    <li>Elektronik bakım ve onarım</li>
                                    <li>Eşik altı takımı</li>
                                    <li>Manyetik takım ve bakım</li>
                                </ul>

                            </div>
                            <div className="col">

                                <ul>
                                    <li>Mızraklık bakım ve değişim</li>
                                    <li>Kafes bakım ve değişim</li>
                                    <li>Balkon çıta bakım ve değişim</li>
                                    <li>Gaga onarım ve değişim</li>
                                    <li>Kaplama işçiliği</li>
                                    <li>Tel değişimi</li>

                                </ul>

                            </div>
                        </div>




                    </div>

                </div>
            </section>
        </>
    )
}

export default TamirUd;