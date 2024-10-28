import AnimatedText from "@/components/common/AnimatedText";

const TamirViyolensel = () => {
    return (<>
        <section className="pt-80 pb-80 bg-gray-light-1">
            <div className="container position-relative">
                <div className="row mb-40 mb-sm-30">
                    <div className="col">
                        <h2 className="section-title mb-0">
                            <AnimatedText text="Viyolonsel Tamiri" />

                        </h2>
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <p className="mb-3">
                            Viyolonsel ya da çello yaylı çalgıların bir türüdür. Viyolonsel, yaylı ailesinden dört telli ve tenor sesli bir çalgıdır. Viyolonsel; keman, viyola ve kontrbas ile aynı ailedendir. Viyolonsel genellikle akustik olarak kullanılan her ortamda çalına bilen bir müzik aletidir. 5 sınıf olarak buyutlandırılır. Boyutlar çalacak olan kişinin yaş ve fiziksel özelliklerine göre değişmektedir.
                        </p>
                        <p className="mb-1">
                            Çello da diğer müzik aletleri gibi belirli aralıklarla bakımlarının ve tel değişimlerinin yapılması gereken bir müzik aletidir. Bakımı aksatılan müzik aletlerinde istenilen performansı alamazsınız. Enstrüman direk gün ışığı ve nemden  korunmalıdır. Her çalımdan sonra arşeden dökülen reçineleri pamuklu bir bezle temizlemeniz gerekmektedir.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <p className="mb-3 mt-4">
                        <strong>Çello tamir ve bakım içim yaptığımız bazı işlemler şu şekildedir;</strong>
                    </p>
                    <div className="col">

                        <ul>
                            <li>Kırık çatlak tamiri</li>
                            <li>Tel değişimi</li>
                            <li>Burgu değişim ve onarımı</li>
                            <li>Çenelik değişim ve onarım</li>
                            <li>Köprü değişim ve onarım</li>
                            <li>Can direği değişim ve onarım</li>
                            <li>Tesviye</li>
                        </ul>

                    </div>
                    <div className="col">

                        <ul>
                            <li>Klavye değişim ve onarım</li>
                            <li>Klavye bakımı</li>
                            <li>Fix değişim ve onarım</li>
                            <li>Kuyruk bağı değişimi</li>
                            <li>Kuyruk pimi değişimi</li>
                            <li>Cila ve temizlik</li>
                            <li>Kapak değişimi</li>
                        </ul>

                    </div>
                    <div className="col">

                        <ul>

                            <li>Manyetik takımı</li>
                            <li>Eşik altı takımı</li>
                            <li>Elektronik bakım</li>
                            <li>Pick bakım ve değişim</li>
                            <li>Eşik bakım ve değişim</li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default TamirViyolensel;