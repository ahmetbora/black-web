"use client"
import AnimatedText from "@/components/common/AnimatedText";

import Image from "next/image";
import Link from "next/link";

const GirisTamir = ({ onePage = false, dark = false }) => {

  return (
    <section
      className={`page-section scrollSpysection ${dark ? "bg-dark-1 light-content" : ""
        }`}
      id="about"
    >
      <div className="container position-relative">
        <div className="row mb-60 mb-xs-30">
          <div className="col-md-6">
            <h2 className="section-caption mb-xs-10">Black Music</h2>
            <h3 className="section-title mb-0">
              <AnimatedText text="Enstrüman Tamir ve Bakım Hizmetlerimiz" />
            </h3>
          </div>
          <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
            {/* Decorative Dots */}
            <div
              className="decoration-2 d-none d-md-block"
              data-rellax-y=""
              data-rellax-speed="0.7"
              data-rellax-percentage="-0.2"
            >
              <Image
                width="103"
                height="223"
                src="/assets/images/decoration-2.svg"
                alt=""
              />
            </div>
            {/* End Decorative Dots */}


            <Link
              href={`/entruman-tamir`}
              className="link-hover-anim underline align-middle"
              data-link-animate="y"
            >
              <span className="link-strong link-strong-unhovered">
                Tamir hizmetlerimiz{" "}
                <i
                  className="mi-arrow-right size-18"
                  aria-hidden="true"
                ></i>
              </span>
              <span
                className="link-strong link-strong-hovered"
                aria-hidden="true"
              >
                Tamir hizmetlerimiz{" "}
                <i
                  className="mi-arrow-right size-18"
                  aria-hidden="true"
                ></i>
              </span>
            </Link>

          </div>
        </div>

        <div className="row wow fadeInUp" data-wow-delay="0.5s">
          <div className="col-lg-6 mb-md-60">
            <div className="position-relative">
              {/* Image */}
              <div className="position-relative overflow-hidden">
                <Image
                  width={960}
                  height={539}
                  src="/assets/black/main-tamir.jpg"
                  className="image-fullwidth relative"
                  alt="Image Description"
                />
              </div>
              {/* End Image */}
              {/* Decorative Waves */}
              <div
                className="decoration-1 d-none d-sm-block"
                data-rellax-y=""
                data-rellax-speed={1}
                data-rellax-percentage="0.1"
              >
                <Image
                  width="159"
                  height="74"
                  src="/assets/images/decoration-1.svg"
                  className="svg-shape"
                  alt=""
                />
              </div>
              {/* End Decorative Waves */}
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <h4 className="h5">Tamir İşlemleri</h4>
            <p className="text-gray">
              Zarar göreren Enstrümanınızın tamir işlemini 10 yıllık tecrubemizle ilk günkü performansına döndürüyoruz.<br />
              Telli, Üflemeli, Vurmalı Enstümanlarınızın; Kırık, Çatlak kaynaklı tamir işlemlerini
              ve tel değişimlerini yapmaktayız.
            </p>
            <h4 className="h5">Bakım işlemleri</h4>
            <p className="text-gray">
              Enstrümanınızın uzun ömürlü olması için belirli zamanlarda kontrollerinin yapılması
              gerkebilmektedir. <br></br>
              Sap ayarı, Entonasyon, klavye bakımı, Manyetik ve elektronik bakım, Güderi bakım,
              Mantar değişimi
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GirisTamir;