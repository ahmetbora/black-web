import AnimatedText from "@/components/common/AnimatedText";

const TamirSaz = () => {
    const dark = false;
    return (
        <>
            <section
                className={`page-section  bg-gray-light-1`}>
                <div className="container position-relative">
                    <div className="row mb-40 mb-sm-30">
                        <div className="col">
                            <h2 className="section-title mb-0">
                                <AnimatedText text="Bağlama Tamiri" />
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="mb-1">
                                Bağlama, ya da saz Türk Halk Müziğinde yaygın olarak kullanılan
                                telli tezeneli bir çalgı türüdür. Yörelere ve boyutlarına göre
                                kopuz, cura, saz, çöğür, dombra, ikitelli, tambura, tar gibi
                                değişik isimlerle tanınır.
                            </p>
                            <p className="mb-1">
                                Kullanılan tekniğe göre mızrap veya parmaklar ile çalınır.
                                Parmaklarla çalma tekniğine şelpe ve dövme denir.
                            </p>
                            <p className="mb-4">
                                Genellikle altta iki çelik ile bir sırma bam, ortada iki çelik ve üstte bir çelik ile bir sırma bam teli olmak üzere toplam 7 tellidir. Tezene ile çalınır.
                            </p>


                        </div>

                        <div className="row">
                            <p className="mb-3 mt-4">
                                <strong>Yapmış olduğumuz hizmetlerimizin bazıları şunlardır;</strong>
                            </p>
                            <div className="col">

                                <ul>
                                    <li>Kırık ve çatlak onarımı</li>
                                    <li>Al orta ve üst eşik bakım ve onarım</li>
                                    <li>Burgu değişim </li>
                                    <li>Perde değişim</li>
                                    <li>Çila ve polyester yenileme</li>
                                    <li>Yön değiştirme(sağdan sola)</li>
                                </ul>

                            </div>
                            <div className="col">

                                <ul>


                                    <li>Burgu yuva açma</li>
                                    <li>Kapak onarım ve değişim</li>
                                    <li>Tesviye</li>
                                    <li>Sap değişimi</li>
                                    <li>Ekolayzer takımı </li>
                                </ul>

                            </div>
                            <div className="col">

                                <ul>


                                    <li>Elektronik bakım ve onarım</li>
                                    <li>Eşik altı takımı</li>
                                    <li>Manyetik takım ve bakım</li>
                                    <li>Kafes açma</li>
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

export default TamirSaz;