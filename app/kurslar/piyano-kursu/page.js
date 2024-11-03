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
import PiyanoFaq from "./piyano-faq";


const KurslarPiyano = () => {
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
                                Piyano <span className="font-alt">Kursları</span>
                            </span>
                        </h1>
                        <h4>
                            İster Hobi, İsterseniz Sınava Hazırlık için Black Music Sanat Okuluna bekliyoruz.
                        </h4>
                    </div>
                    {/* End Home Section Content */}
                </div>
            </ParallaxContainer>
            <PiyanoFaq />

            <section className="page-section overflow-hidden  ">
                <div className="container" style={{ minHeight: 400 }}>

                    <p>
                        Piyano derslerimiz ilk olarak piyanonun ve pedallarının tanıtımını yapmakla başlayıp hangi konular işlenecek neler öğrenilecek gibi konulara değinilerek devam edilir. Piyano çalacak olan öğrenci sağ ve sol el için ayrı ayrı nota anahtarları kullanmak zorunda olduğundan öncelikle sağ elde kullanılacak olan sol anahtarı üzerindeki notalar öğretilip bu notalar ile alakalı parmak kas hafızamızın yükselmesi için gerekli egzersizler ve şarkılar verilir.Bu süreç doğru yürütüldüğünde 3-4 hafta alacaktır.Devam eden derslerimizde sol elimiz için olan fa anahtarı üzerindeki notalara geçilir ve yine bu eldeki parmak kas hafızamızın yükselmesi için gerekli çalışmalar yapılır.
                    </p>
                    <p>
                        Genel ders işleyişimiz bu süreçleri geçtikten sonra nota ve solfej okumalarını hızlandırmakla devam etmektedir. Öğrencinin karakterine anlama seviyesine dersler haricinde ki disiplin ve çalışma süresi de göz önünde bulundurularak öğrenciye göre bir müfredat çizilir ve bir çok kaynak üzerinden öğrenci eğitimine devam eder. Sağlıklı bir şekilde devam ettirilen derslerimizin 3. Ayından sonra öğrenci sağ  sol el notalarını solfej okuma ve nota takip edebilme yeteneğini oturtmuş olacaktır.8 ve daha fazla şarkıyı çalabiliyor ve öğrendiği tekniklerle benzeri şarkıları kendisi çıkartabiliyor hale gelmiş olacaktır.
                    </p>
                    <p>
                        Son 20 yılın en rövanşta enstrümanlarının başında gelen piyanonun  azımsanmayacak bir talebi bulunmaktadır. Piyanoyu hem çalmak hem dinlemek insana büyük keyif vermektedir. Piyano çalmanın beyni olumlu etkilediği stresi azalttığı , koordinasyon ve dikkat eksikliklerini azalttığı , sayısal zekayı geliştirdiği  gibi daha birçok olumlu etkisi bulunmaktadır. Sizde hayatınızdaki rolünüzü daha doğru ve daha iyi hissedebilir hale getirmek  için bir enstrüman çalmanın keyfine varın
                    </p>
                </div>
            </section>
        </>
    )
}

export default KurslarPiyano;