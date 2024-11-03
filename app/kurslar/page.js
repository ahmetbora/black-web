"use client"
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
import Image from "next/image";
import KurslarHero from "./kurslarHero";
import Link from "next/link";

export const featuresData = [
  {
    parentClass: "mb-100 mb-md-60",
    number: "01",
    title1: "Gitar",
    url: '/kurslar/gitar-kursu',
    title2: "Dersleri",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem dolor, rhoncus eleifend fermentum vel, bibendum vel neque. Cras eu elementum enim. Curabitur elit leo, fringilla in velit at, fermentum semper augue. Vestibulum sit amet venenatis metus. Aenean a arcu sed augue consequat sagittis.`,
    image: '/assets/black/gitar-16-9.jpg'
  },
  {
    parentClass: "mt-n140 mt-sm-0 mb-100 mb-md-60",
    number: "02",
    title1: "Piyano",
    url: '/kurslar/piyano-kursu',
    title2: "Dersleri",
    desc: `Praesent nec tempus dui. Curabitur molestie, sapien semper dictum porttitor, odio ipsum hendrerit urna, quis rutrum mi tortor quis velit. Nulla scelerisque eu nisi id volutpat. Nullam fringilla, eros ut semper tincidunt, massa ante congue erat, in vestibulum nibh urna vitae lorem aliquet ornare.`,
    image: '/assets/black/piyano-16-9.jpg'
  },
  {
    parentClass: "mb-md-60",
    number: "03",
    title1: "Bağlama",
    title2: "Dersleri",
    url: '/kurslar/baglama-kursu',
    desc: `Integer sit amet nunc sem. Quisque scelerisque dui id fermentum venenatis. Cras non tempor nisi. Aliquam lobortis ligula id efficitur iaculis ipum. Curabitur elit leo, fringilla in velit at, fermentum semper augue. Vestibulum sit amet venenatis metus. Aenean a arcu sed augue consequat sagittis.`,
    image: '/assets/black/baglama-16-9.webp'
  },
  {
    parentClass: "mt-n140 mt-sm-0 mb-0",
    number: "04",
    title1: "Keman",
    title2: "Dersleri",
    url: '/kurslar/keman-kursu',
    desc: `Aliquam nec erat eleifend, volutpat dolor eu, ultrices erat. Etiam et arcu nec quam laoreet hendrerit eget sed velit. Nullam dapibus magna odio. Fusce convallis elit at ex sodales, quis maximus augue hendrerit. Phasellus eget turpis vel nibh convallis vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    image: '/assets/black/keman-16-9.webp'
  },

  {
    parentClass: "mb-md-60",
    number: "03",
    title1: "Şan & Vokal",
    title2: "Koçluğu",
    url: '/kurslar/san-vokal-kursu',
    desc: `Integer sit amet nunc sem. Quisque scelerisque dui id fermentum venenatis. Cras non tempor nisi. Aliquam lobortis ligula id efficitur iaculis ipum. Curabitur elit leo, fringilla in velit at, fermentum semper augue. Vestibulum sit amet venenatis metus. Aenean a arcu sed augue consequat sagittis.`,
    image: '/assets/black/san-16-9.jpg'
  },
  {
    parentClass: "mt-n150 mt-sm-0 mb-0",
    number: "04",
    title1: "Konservatuar ve Güzel Sanatlar",
    title2: "Hazırlık",
    url: '/kurslar/sanat-okullari-hazirlik-kursu',
    desc: `Aliquam nec erat eleifend, volutpat dolor eu, ultrices erat. Etiam et arcu nec quam laoreet hendrerit eget sed velit. Nullam dapibus magna odio. Fusce convallis elit at ex sodales, quis maximus augue hendrerit. Phasellus eget turpis vel nibh convallis vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    image: '/assets/black/hazirlik-16-9.webp'
  },

];

const BlackKurslar = () => {
  return (
    <>


      <ParallaxContainer
        className="home-section bg-dark-alpha-30 light-content parallax-5 scrollSpysection" style={
          {
            backgroundImage:
              "url(/assets/images/section-bg-2.jpg)",
          }
        }
        id="home"
      >
        <KurslarHero />
      </ParallaxContainer>




      <div className="container pt-100">

        {/* Features Grid */}
        <div className="row">
          <div className="col-11 col-lg-10 offset-1 px-md-4">
            <div className="row">
              {/* Features Item */}
              {featuresData.map((item, index) => (
                <div key={index} className={`col-md-4 mb-60`}>
                  <div className="position-relative">
                    <div className="post-prev-2-img">
                      <Link href={`${item.url}`}>
                        <Image
                          src={item.image}
                          width={400}
                          height={225}

                        />
                      </Link>
                    </div>
                    <div className="features-2-title mb-40">
                      <a href={`${item.url}`} className="text-decoration-none">
                        {item.title1} {" "}
                        <span className="font-alt">{item.title2}</span>
                      </a>
                    </div>


                  </div>
                </div>
              ))}
              {/* End Features Item */}
            </div>
          </div>
        </div>
        {/* End Features Grid */}
      </div>



    </>
  );
};

export default BlackKurslar;
