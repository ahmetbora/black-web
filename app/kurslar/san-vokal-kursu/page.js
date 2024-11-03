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
import SanVokalFaq from "./san-faq";


const KurslarVokal = () => {
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
                                Şan & Vokal <span className="font-alt">Kursları</span>
                            </span>
                        </h1>

                    </div>
                    {/* End Home Section Content */}
                </div>
            </ParallaxContainer>
            <SanVokalFaq />
            <section className="page-section overflow-hidden  ">
                <div className="container" style={{ minHeight: 400 }}>

                    <p>
                        Şan eğitimi ses eğitimi demektir. İlk olarak diyafram kullanımı nefesin doğru kullanımısesin doğru ayarlanması öğretilmektedir. Müziğe ve seslendirme sanatçılığına ilgiduyan ve bu işleri yapmak isteyen herkes şan eğitimi almalıdır.
                    </p>
                    <p>
                        Şan eğitiminin temelinde ses tellerini eğitmek yatar. Ses tellerimiz göremediğimiz ve dokunamadığımız bir şey olduğundan doğru kullanımı yapmak için uzman bir kişiden eğitim almak önemlidir. Gerekli eğitimi doğru süre içinde alan kişiler seslerini düzgün ve doğru tonlamada kullanabilirler. Ses gürlüğünü ayarlayabilmek, diyafram, karın ve ağız boşluğu gibi alanları bu sayede doğru kullanmak mümkündür. Şan eğitimi alan kişiler günlük hayatlarında da nefesi doğru alma ve kontrol edebilme yetkisine sahip olurlar.
                    </p>
                    <p>
                        Vokal koçluğu genellikle bir piyano eşliğinde kişinin performanslarına hazırlamak ve yardımcı olmak için alınan derslerdir. Vokal koçluğu dersinde kişinin tarzına göre söyleyeceği şarkıları daha rahat ve daha doğru söylemeleri için bir çok teknikle verilir. Derslerin içerisinde şarkı söyleme tekniklerinin yanı sıra nefes alma teknikleri diksiyon ve doğru telaffuz gibi içeriklerde yer almaktadır. Black Music Sanat olarak gerekli donanıma sahip uzman kadromuz ve tecrübemizle siz değerli öğrencilerimize en doğru şekilde ders vermeye devam etmekteyiz.
                    </p>
                </div>
            </section>
        </>
    )
}

export default KurslarVokal;