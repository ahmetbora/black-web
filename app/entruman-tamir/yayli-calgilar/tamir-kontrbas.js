import AnimatedText from "@/components/common/AnimatedText";

const TamirKontrBas = () => {
    return (<>
        <section className="pt-80 pb-80">
            <div className="container position-relative">
                <div className="row mb-40 mb-sm-30">
                    <div className="col">
                        <h2 className="section-title mb-0">
                            <AnimatedText text="Kontrbas Tamiri" />

                        </h2>
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <p className="mb-3">
                            Kontrbas keman ailesinin en kalın sesli olanıdır. 4ve 5 telli olamk üzere 2 bölüme ayrılır. 5 telli olan genellikle senfonik orkestra eserlerini icra etmek için kullanılır. Aileden onu ayıran en büyük özellik iki çeşit yay modelinin olmasıdır bunlar Alman ve Fransız olarak adlandırılır.
                        </p>
                        <p className="mb-1">
                            Kontrbas genellikle caz müziğinin vazgeçilmez bir parçası olmuştur.180 cm boy 60 cm en ile büyük bir müzik aletidir. Her müzik aletinde olduğu gibi bunda da bakım onarım işlemleri önemlidir ve belirli periyotlarda yapılması gerekmektedir.
                        </p>

                    </div>
                </div>

                <div className="row">
                    <p className="mb-3 mt-4">
                        <strong>Kontrbas tamir ve bakım içim yaptığımız bazı işlemler şu şekildedir;</strong>
                    </p>
                    <div className="col">

                        <ul>
                            <li>Kırık çatlak tamiri</li>
                            <li>Tel değişimi</li>
                            <li>Burgu değişim ve onarımı</li>
                            <li>Çenelik değişim ve onarım</li>
                            <li>Köprü değişim ve onarım</li>
                            <li>Can direği değişim ve onarım </li>
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

export default TamirKontrBas;