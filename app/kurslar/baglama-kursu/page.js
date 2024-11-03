import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
    () => import("@/components/common/ParallaxContainer"),
    {
        ssr: false, // Disable server-side rendering
    }
);
import { featuresData } from "@/data/features";
import Faq from "@/components/common/Faq";
import Link from "next/link";
import Image from "next/image";
import BaglamaFaq from "./baglama-faq";


const KurslarBaglama = () => {
    const dark = false;
    return (
        <>
            <ParallaxContainer
                className="page-section bg-dark-alpha-30 light-content parallax-5"
                style={{
                    backgroundImage:
                        "url(/assets/images/section-bg-2.jpg)",
                }}
                id="home"
            >
                <div className="container position-relative pt-sm-30">
                    {/* Home Section Content */}
                    <div className="home-content text-center">
                        <h1 className="hs-title-7 mb-10">
                            <span className="wow charsAnimIn-2" data-splitting="chars">
                                Bağlama <span className="font-alt">Kursları</span>
                            </span>
                        </h1>
                        <h4>
                            İster Hobi, İsterseniz Sınava Hazırlık için Black Music Sanat Okuluna bekliyoruz.
                        </h4>
                    </div>
                    {/* End Home Section Content */}
                </div>
            </ParallaxContainer>
            <BaglamaFaq />

            <section className="page-section overflow-hidden  ">
                <div className="container" style={{ minHeight: 400 }}>
                    <p>Black Music Sanat Okulun da bağlama derslerinde öncelikle duruş, oturuş, temel nota aktarımları ile başlanıp ilk aydan itibaren basit parçalar çalınmaya başlanmaktadır. Nota bilgileri akort ayarları, farklı bağlama düzenleri değişik yörelere ait eserler, popüler türküler, klasik halk türküleri çalınmaktadır.</p>
                    <p>
                        Genel ders içeriğimiz sağlıklı bir şekilde devam edildiğinde 1. Dersten itibaren öğrencinin çalma becerileri algılama süresini göz önünde bulundurarak nota okuma mızrap tutuşu bağlama duruşu gibi bilgiler içermektedir. ilk 1 aylık süreç içerisinde öğrenci günlük 15dk- 30dk derslerini aksatmadan devam ettiğinde almış olduğu haftalık dersleri düzenli bir şekilde tekrar yaparak parmak kas hafızası yükselterek bağlama üzerinde bir üstünlük kurmaya başlayacaktır. Devam eden derslerde bağlamadaki nota düzeni  (uzun sap- kısa sap ) ve öğreneceği teknikler ile basit türküleri çıkartmaya başlayacaktır.Ortalama olarak 3. Ayı bitirdiğinde bağlama üzerinde temel notaları ve başlangıç akorları ile alakalı genel bilgiyi almış 5 ve daha fazla türküyü çalıyor hale gelecektir.Sonrasındaki derslerde öğrenciyi ileri seviyelere atacak olan akorlar bağlama çalım tavırları mızrap vuruşları ile var olan kültürümüzü kendine özgü bir şekilde yansıtmayı öğrenecektir.
                    </p>
                    <p>
                        Bağlama tüm ezgilere sahip çok sesli bir enstrüamandır.Tüm kurslardaki ilk genel amacımız müzik sevgisini aşılayabilmektir.Müzik hem aklımıza hem kalbimize seslenmektedir.Hiç bir insan yoktur ki  müziksiz durabilsin. Hepimizin hayatında önemli bir etkiye ve yere sahiptir.Bağlama da diğer hiçbir enstrümana benzemez ve bizim kendi coğrafyamızda kültürümüz de olan türk halk müziğinin vazgeçilmez bir parçasıdır ve çok eski tarihlerden buyana hayatımızdadır.Türkülerimiz yarım kalan aşklarımızı hasretimizi özlemimizi en iyi şekilde bize yansıtan en önemli türlerden bir tanesidir.
                    </p>
                </div>
            </section>
        </>
    )
}

export default KurslarBaglama;