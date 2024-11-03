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


const KurslarHazirlik = () => {
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
                                Hazırlık <span className="font-alt">Kursları</span>
                            </span>
                        </h1>
                        <h4>

                        </h4>
                    </div>
                    {/* End Home Section Content */}
                </div>



            </ParallaxContainer>
            <section className="page-section overflow-hidden  ">
                <div className="container" style={{ minHeight: 400 }}>

                    <p>
                        Konservatuar ve Güzel sanatlara hazırlık için deneyimli ve uzman kadromuzla hazırlamış olduğumuz eğitim programında sınav stresiyle en doğru şekilde baş etmek için bir çok konuyu içinde kapsamaktadır.
                    </p>
                    <p>
                        Konservatuar ve Güzel sanatlara hazırlık derslerimiz tamamen kişiye özel ve öğrencinin gitmek istediği lise veya üniversiteye göre hazırlanmaktadır. Öğrencilerin gitmek istedikleri okulun sınav süreçlerine göre tek ses iki ses üç ve dört ses verme ritim ve melodi tekrarları solfej ve nota okuma şan eğitimi ve yazılı süreç enstrüman çalacaklar için eser seçimleri ve çalım konuları gibi içerisinde bir çok konuyu barındıran detaylı ve zaman isteyen bir süreci kapsamaktadır.Öğrencilerimize bu süreç içerisinde detaylı tüm adımları ilerletip gerekli tüm donanımı almalarını sağlıyoruz keza bugünün öğrencileri yarının meslektaşları demek.Var olan tüm öğrencilermizle bu teknik ve teorik derslerin yanı sıra hepsiyle bir arkadaş gibi yaklaşıp psikolojik olarak da yanlarında olduğumuzu her zaman göstermekteyiz .Bir öğrenci bizim için yapmak istediklerini yaptıktan ve  başarıya ulaştıktan sonrada onun başarısıyla mutlu olabileceğimiz ve her zaman ihtiyacı olduğunda yanında olabileceğimiz kardeşlerimiz ve arkadaşlarımız demektir.
                    </p>
                </div>
            </section>
        </>
    )
}

export default KurslarHazirlik;