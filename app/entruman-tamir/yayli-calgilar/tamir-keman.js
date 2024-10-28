import AnimatedText from "@/components/common/AnimatedText";

const TamirKeman = () => {
    return (<>
        <section className="pt-80 pb-80">
            <div className="container position-relative">
                <div className="row mb-40 mb-sm-30">
                    <div className="col">
                        <h2 className="section-title mb-0">
                            <AnimatedText text="Keman Tamiri" />

                        </h2>
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <p className="mb-1">
                            Keman kendi grubunun en küçük üyesidir. Viyola ve Viyolonsel ailesine aittir. Arşe (yay)ile çalınır. Kemandan ses alına bilmesi için arşeye reçine sürülmelidir. Reçine bala benzeyen sert bir maddedir. Keman perdesiz bir müzik aletidir. Keman çalan kişi notayı kendi müzik kulağıyla bulur.
                        </p>
                        <p className="mb-1">
                            Kemanında diğer müzik aletleri gibi bakıma ihtiyacı vardır. Düzel periyotlarda bakımının ve tel değişiminin yapılması gerekmektedir. Gerekli bakımlar yapılmadığında kemandan dilediğiniz performansı almanız mümkün olmayacaktır.
                        </p>

                    </div>
                </div>

                <div className="row">
                    <p className="mb-3 mt-4">
                        <strong>Keman bakım tamir için yaptığımız bazı işlemler şu şekildedir;</strong>
                    </p>
                    <div className="col">

                        <ul>
                            <li>Kırık çatlak tamiri</li>
                            <li>Tel değişimi</li>
                            <li>Burgu değişim ve onarımı</li>
                            <li>Çenelik değişim ve onarım</li>
                            <li>Köprü değişim ve onarım</li>
                            <li>Can direği değişim ve onarım </li>
                        </ul>

                    </div>
                    <div className="col">

                        <ul>
                            <li>Tesviye</li>
                            <li>Klavye değişim ve onarım</li>
                            <li>Klavye bakımı</li>
                            <li>Fix değişim ve onarım</li>
                            <li>Kuyruk bağı değişimi</li>
                            <li>Kuyruk pimi değişimi</li>
                        </ul>

                    </div>
                    <div className="col">

                        <ul>
                            <li>Cila ve temizlik</li>
                            <li>Kapak değişimi</li>
                            <li>Manyetik takımı</li>
                            <li>Eşik altı takımı</li>
                            <li>Elektronik bakım</li>
                        </ul>

                    </div>
                </div>
            </div>

        </section>
    </>)
}
export default TamirKeman;