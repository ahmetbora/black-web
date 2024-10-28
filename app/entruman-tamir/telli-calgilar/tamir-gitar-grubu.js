import AnimatedText from "@/components/common/AnimatedText";

const TamirGitarGrubu = () => {
    const dark = false;
    return (
        <>
            <section className={`page-section  scrollSpysection`}>
                <div className="container position-relative">
                    <div className="row mb-40 mb-sm-30">
                        <div className="">
                            <h2 className="section-title mb-0">

                                <AnimatedText text="Klasik gitar, Akustik Gitar, Elektro ve Bas Gitar" />
                            </h2>
                        </div>

                    </div>
                    <div className="row mb-40 mb-sm-30">
                        <div className="col">
                            <p className="mb-4">
                                Klasik, Akustik, Elektro ve Bas gitarlarınızın  tüm onarım ve
                                bakım işlemlerini yaparak ilk gün ki performansına geri
                                getiriyoruz. Enstrümanlarımız  bizim birer parçamız gibidir.
                                Çoğu zaman enstrüman çalan kişiler var olan müzik aletleri ile
                                duygusal bir bağ kurmaktadırlar.
                                Kimisi için enstrümanı kendini ifade etme yolu kimisi için
                                psikolojik bir destek kimisi içinse hayatta var olduğunu
                                hissetmenin yollarından biri. Bu kıymetli müzik aletlerimizi
                                10 yıllık tecrübe ile sizlere en iyi durumda kalmaları için
                                yardımcı oluyoruz.
                            </p>
                            <p>
                                Gitarlarımız ağaçtan yapılmış birer müzik aletidir. Her ne kadar ağaç kesilmiş bile olsa o enstrümanda yaşamaya devam etmektedir. Klavyemizin nefes alması gitarımızın gövde sap kapak gibi bölümlerinin çürümemesi ve zarar görmemesi için belirli periyotlarda bakımını yaptırmamız gerekmektedir.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mb-3 mt-4">
                            <strong>Yapmış olduğumuz hizmetlerimizin bazıları şunlardır;</strong>
                        </p>
                        <div className="col">

                            <ul>
                                <li>Kırık çatlak onarımı</li>
                                <li>Boya cila vernik yenileme </li>
                                <li>Burgu değişimi ve onarımı</li>
                                <li>Üst ve alt eşik değişim ve onarımı</li>
                                <li>Fret değişimi </li>
                                <li>Klavye değişimi</li>
                                <li>Sap ayarı</li>
                                <li>Entonasyon ayarı</li>
                                <li>Klavye temizliği</li>
                            </ul>

                        </div>
                        <div className="col">
                            <ul>

                                <li>Tesviye</li>
                                <li>Tel değişimi</li>
                                <li>Sap değişimi</li>
                                <li>Vida ve somun yenileme</li>
                                <li>Elektronik bakım ve yenileme</li>
                                <li>Manyetik bakım ve değişim</li>
                                <li>Vintage yapımı</li>
                                <li>Pickguard yenileme</li>
                                <li>Switch tamir ve değişim</li>
                            </ul>
                        </div>

                        <div className="col">
                            <ul>

                                <li>Jak tamir ve değişim</li>
                                <li>Pot tamir ve değişim</li>
                                <li>Köprü bakım ve değişim</li>
                                <li>Köprü plakası bakım değişim</li>
                                <li>Saddle bakım ve değişim</li>
                                <li>Tremolo yay değişim</li>
                                <li>Yükseklik ayarları</li>
                                <li>Kapak değişim</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default TamirGitarGrubu;