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
import KemanFaq from "./keman-faq";


const KurslarKeman = () => {
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
                                Keman <span className="font-alt">Kursları</span>
                            </span>
                        </h1>
                        <h4>
                            İster Hobi, İsterseniz Sınava Hazırlık için Black Music Sanat Okuluna bekliyoruz.
                        </h4>
                    </div>
                    {/* End Home Section Content */}
                </div>
            </ParallaxContainer>
            <KemanFaq />

            <section className="page-section overflow-hidden  ">
                <div className="container">
                    <p>
                        Keman ve çello enstrümanları yaylı grubuna bağlı perdesiz iki benzeri müzik aletidir.Perdesiz oluşundan dolayı batı ve türk müziği için uygunlardır. Bu iki enstrümana son 15-20 senedir yoğun bir ders talebi bulunmaktadır.
                    </p>
                    <p>
                        Keman ve Çello hem yaylı hem perdesiz bir müzik aleti olduğu için diğer enstrümanlara göre çalımı biraz daha zordur. Derslerimiz de öncelikli olarak enstrümanı tanıma ve anlama becerilerimiz için yol katetmemiz gerekmektedir.Enstümanımızı tanıdıktan sonra doğru çalım teknikleri yay çekme ve enstrüman tutuş konusunda gerekli donanımı verdikten sonra nota okuma ve solfej dersi olarak devam edilmektedir.Bu süreç 3-4 hafta sürmektedir.Devam eden derslerde tek tel üzerinden çıkartılabilecek basit şarkılar ve iki telle çalabileceğimiz parçalarla öğrendiklerimizin üzerine yenilerini ekliyoruz.Bu süreç toplamda 3 ay kadar sürmektedir.3. ayın sonuna geldiğimizde öğrencimiz çaldığı enstrümanı tanımış solfej ve nota okuma konusunda sorunu olmayan kesintisiz bir şekilde 5-6 parça çalabiliyor halde olacaktır.
                    </p>
                    <p>
                        Keman çalmak her enstrümanda olduğu gibi her yaş grubu için stresi azaltıcı bir etkisi vardır .Bunların yanı sıra daha iyi zihinsel işlev okuma ve konuşma becerilerinde gelişme duygusal gelişimde (öz disiplini arttırır – kendine güven ,öz saygı ve öz farkındalık) iyileşme unutkanlıkta azalmalar kendini daha iyi ifade etme gibi daha bir çok olumlu etkiye sahiptir.
                    </p>
                </div>
            </section>
            <KemanFaq />
        </>
    )
}

export default KurslarKeman;