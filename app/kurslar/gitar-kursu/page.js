import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
    () => import("@/components/common/ParallaxContainer"),
    {
        ssr: false, // Disable server-side rendering
    }
);
import Link from "next/link";
import Image from "next/image";
import GitarFaq from "./gitar-faq";

const KurslarGitar = () => {
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
                                Gitar <span className="font-alt">Kursları</span>
                            </span>
                        </h1>
                        <h4>
                            İster Hobi, İsterseniz Sınava Hazırlık için Black Music Sanat Okuluna bekliyoruz.
                        </h4>
                    </div>
                    {/* End Home Section Content */}
                </div>
            </ParallaxContainer>



            <GitarFaq />


            <section className="page-section overflow-hidden  ">
                <div className="container" style={{ minHeight: 400 }}>





                    <div className="row">
                        <div className="col">
                            <p>
                                Gitar derslerimiz birinci derste parmak egzersizi gitar tanıma pena ve parmak vuruşları gibi temel bilgilerle başlayıp tab sistemi notalar ile devam etmektedir. Devam eden derslerde öğretmen derse gelen öğrenciyi tanıyarak öğrencinin sevdiği yapmak istediği ve sevebileceği içerikleri var olan öğrencinin karakterine göre öğrencinin öğrenme seviyesi çalışma sitillerine ne kadar vakit ayırdığına göre tek bir kitaptan değil bir çok kaynaktan derleme yaparak vermektedir.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>
                                Genel ders içeriğimiz sağlıklı bir şekilde devam edildiğin de 1. Dersten itibaren öğrencinin çalma becerileri algılama süresini göz önünde bulundurarak gitarda tab sistemine uygun şarkılar çalına bilmektedir.İlk 1 aylık süreç içerisinde öğrenci günlük 15dk – 30dk çalışarak dersleri aksatmadan devam ettiğinde almış olduğu haftalık dersleri düzenli tekrar yaparak parmak kas hafızasını yükselterek tab sistemini tam anlamıyla bitirmiş olacaktır. Devam eden aylarda alacağı derslerde nota eğitimi akorlar gam sistemi gibi süreçlerden geçecektir. Yine dersleri aksatmadan ve genel tekrarlarını yaparak 2. Ayın sonunda temel akorları öğrenmiş olaraktır. Akor sistemini öğrendikten sonra öğrenci ritim arpej gibi çalma sitilleri öğretilir ve 3. Ayın sonrasında bir öğreci çalıp söylemekle beraber en düşük 5 parça ifade edebilir hale geliyor.
                            </p>

                            <p>

                                Enstrüman çalmanın kanıtlanmış bir çok faydası vardır.Bu olumlu etkiler yetişkinler ve çocuklar için ayrı ayrı özellikler taşımaktadır.Çocuk ve ergenlik dönemindeki gençler için enstrüman çalmak çaldığını sergilemek kişiyi sosyalleştirir beynin bir çok bölümünü çalıştıracağı için beyin gelişimine olumlu etki eder . Enstrüman çalmak zaman ve meşakkat gerektirir bu iş için adım attığınızda belirli bir düzende pratik yapmak için ona özel zaman ayırmanız gerekmektedir buda disiplini gerektirir ve disiplinli olmayı öğretir.Enstrüman çalmak kişinin kendini eleştirmesini ve dışarıdan gelen eleştirileri kabul etmesini sağlar buda özgüven kazandırır.Kişinin içerisinde bulunan duygularını sevgi mutluluk öfke vb. daşavurum imkanı sağlar.Kişinin karakterine olumlu bir etki sağladığından dolayı stresten uzaklaşmayı öğrenir.Belirli aralıklarda disiplinle yapacağınız çalışmalar odaklanma problemlerini yavaş yavaş ortadan kaybeder.Devamlı bir gelişim süreci içerisinde olurlar ve çalacakları enstrüman la beraber duygularını dışa vurarak ince düşünmesini ve davranmasını sağlayacaktır.
                            </p>
                            <p>
                                Yukarıda bahsettiğimiz durumlar yetişkinler içinde geçerlidir tabi ki fakat bunların yanısıra yetişkinler gündelik hayatlarında yoğun çalışma temposu çocuk büyütmek geçinme zorlukları arkadaş ve akraba ortamları gibi yaşayabilecekleri bir çok stresli ortamda bulunmaktadırlar.Gündelik hayatımızda her zaman başkalarını farketmeden ön planda tutmaktayız. Yetişkinler Enstrüman çalmaya başladıktan sonra tekrardan kendilerine vakit ayırmayı öğreniyorlar ve buda aile arasındaki iletimden iş hayatına kadar tüm alanlarda psikolojik olarak devam eden olumlu bir süreci başlatmış oluyor.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}
export default KurslarGitar;