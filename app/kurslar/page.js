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

export const featuresData = [
  {
    parentClass: "mb-100 mb-md-60",
    number: "01",
    title1: "Gitar",
    url: '/kurslar/gitar-kursu',
    title2: "Dersleri",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem dolor, rhoncus eleifend fermentum vel, bibendum vel neque. Cras eu elementum enim. Curabitur elit leo, fringilla in velit at, fermentum semper augue. Vestibulum sit amet venenatis metus. Aenean a arcu sed augue consequat sagittis.`,
    iconPath:
      "M24 26.5c0 0 1-0.625 2.5-0.875 2.625-0.5 4.875-0.625 5.875 1.125 1.25 2.125 2.375 6.625 2.125 10.625-0.125 2.125-0.625 2.75-0.625 2.75s-1.875 1.25-5.875 0.875c-4.375-0.375-5-1.875-5-1.875s0.625-1.5 1-5.375 0-7.25 0-7.25zM19 35.625c-2.125 0.5-4.75 1.25-4.75 1.25s5.625-0.5 8-1.125c-0.5 2.625-1.25 4.25-1.25 4.25s-10.375 10-14.5 10c-3.5 0-6.5-8.5-6.5-18s3.25-18 6.5-18c4.375 0 13.25 7.125 16 12.125 0 0 0.375 2 0.25 4-1.25-0.625-3-1.25-5.5-1.75-3.5-0.75-5.25-0.375-5.25-0.375s2.25 0.5 7.125 2.125c1.875 0.625 2.75 1 3.625 1.25 0 0.375-0.125 0.875-0.125 1.25 0 0.625 0 1.25-0.125 1.875-0.625 0.25-1.875 0.75-3.5 1.125zM49.5 14c3.25 0 6.5 8.5 6.5 18s-3 18-6.5 18c-4.625 0-13-8.5-14-9.875 0 0 0.5-0.625 0.625-2.75v-1.125c2 0.875 8.75 1.625 8.75 1.625s-2.625-0.75-5-1.375c-1.625-0.5-3.125-1-3.75-1.25-0.125-1.375-0.25-2.875-0.5-4.125 2.125-1.375 8.625-4.25 8.625-4.25s-1.875 0.25-4.375 1.125c-1.75 0.625-3.625 1.375-4.625 1.75-0.375-1.25-0.875-2.25-1.25-3 0-0.125-0.125-0.5-0.125-0.5v-0.125c2.75-5 11.125-12.125 15.625-12.125z",
  },
  {
    parentClass: "mt-n140 mt-sm-0 mb-100 mb-md-60",
    number: "02",
    title1: "Piyano",
    url: '/kurslar/piyano-kursu',
    title2: "Dersleri",
    desc: `Praesent nec tempus dui. Curabitur molestie, sapien semper dictum porttitor, odio ipsum hendrerit urna, quis rutrum mi tortor quis velit. Nulla scelerisque eu nisi id volutpat. Nullam fringilla, eros ut semper tincidunt, massa ante congue erat, in vestibulum nibh urna vitae lorem aliquet ornare.`,
    iconPath:
      "M0 46l29.5-29.5 10 10-29.5 29.5h-10v-10zM47.25 18.75l-5 5-10-10 5-5c1.125-1.125 2.5-1.125 3.625 0l6.375 6.375c1.125 1.125 1.125 2.5 0 3.625z",
  },
  {
    parentClass: "mb-md-60",
    number: "03",
    title1: "Bağlama",
    title2: "Dersleri",
    url: '/kurslar/baglama-kursu',
    desc: `Integer sit amet nunc sem. Quisque scelerisque dui id fermentum venenatis. Cras non tempor nisi. Aliquam lobortis ligula id efficitur iaculis ipum. Curabitur elit leo, fringilla in velit at, fermentum semper augue. Vestibulum sit amet venenatis metus. Aenean a arcu sed augue consequat sagittis.`,
    iconPath:
      "M24 8c13.25 0 24 9.625 24 21.375 0 7.375-6 13.25-13.375 13.25h-4.75c-2.25 0-4 1.75-4 4 0 1.125 0.375 2.125 1 2.75s1.125 1.5 1.125 2.625c0 2.25-1.75 4-4 4-13.25 0-24-10.75-24-24s10.75-24 24-24zM9.375 32c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM17.375 21.375c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM30.625 21.375c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM38.625 32c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4z",
  },
  {
    parentClass: "mt-n140 mt-sm-0 mb-0",
    number: "04",
    title1: "Keman",
    title2: "Dersleri",
    url: '/kurslar/keman-kursu',
    desc: `Aliquam nec erat eleifend, volutpat dolor eu, ultrices erat. Etiam et arcu nec quam laoreet hendrerit eget sed velit. Nullam dapibus magna odio. Fusce convallis elit at ex sodales, quis maximus augue hendrerit. Phasellus eget turpis vel nibh convallis vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    iconPath:
      "M25.25 46.625l-15.625 9.375 4.125-17.75-13.75-12 18.125-1.5 7.125-16.75 7.125 16.75 18.125 1.5-13.75 12 4.125 17.75z",
  },

  {
    parentClass: "mb-md-60",
    number: "03",
    title1: "Şan & Vokal",
    title2: "Koçluğu",
    url: '/kurslar/san-vokal-kursu',
    desc: `Integer sit amet nunc sem. Quisque scelerisque dui id fermentum venenatis. Cras non tempor nisi. Aliquam lobortis ligula id efficitur iaculis ipum. Curabitur elit leo, fringilla in velit at, fermentum semper augue. Vestibulum sit amet venenatis metus. Aenean a arcu sed augue consequat sagittis.`,
    iconPath:
      "M24 8c13.25 0 24 9.625 24 21.375 0 7.375-6 13.25-13.375 13.25h-4.75c-2.25 0-4 1.75-4 4 0 1.125 0.375 2.125 1 2.75s1.125 1.5 1.125 2.625c0 2.25-1.75 4-4 4-13.25 0-24-10.75-24-24s10.75-24 24-24zM9.375 32c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM17.375 21.375c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM30.625 21.375c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4zM38.625 32c2.25 0 4-1.75 4-4s-1.75-4-4-4-4 1.75-4 4 1.75 4 4 4z",
  },
  {
    parentClass: "mt-n150 mt-sm-0 mb-0",
    number: "04",
    title1: "Hazırlık",
    title2: "Dersleri",
    desc: `Aliquam nec erat eleifend, volutpat dolor eu, ultrices erat. Etiam et arcu nec quam laoreet hendrerit eget sed velit. Nullam dapibus magna odio. Fusce convallis elit at ex sodales, quis maximus augue hendrerit. Phasellus eget turpis vel nibh convallis vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    iconPath:
      "M25.25 46.625l-15.625 9.375 4.125-17.75-13.75-12 18.125-1.5 7.125-16.75 7.125 16.75 18.125 1.5-13.75 12 4.125 17.75z",
  },

];

const BlackKurslar = () => {
  return (
    <>

      <div style={{ height: 438 }} className="home-section bg-dark">
        <ParallaxContainer
          className="home-section bg-dark-alpha-30 
        light-content parallax-5 scrollSpysection"
          style={{
            height: 438,
            backgroundImage:
              "url(/assets/images/section-bg-2.jpg)",
          }}
          id="home"
        >
          <KurslarHero />
        </ParallaxContainer>
      </div>



      <div className="container pt-100">

        {/* Features Grid */}
        <div className="row">
          <div className="col-11 col-lg-10 offset-1 px-md-4">
            <div className="row">
              {/* Features Item */}
              {featuresData.map((item, index) => (
                <div key={index} className={`col-md-4 mb-60`}>
                  <div className="position-relative">

                    <div className="features-1-title mb-40">
                      <a href={`${item.url}`} className="text-decoration-none">
                        {item.title1} <br />
                        <span className="font-alt">{item.title2}</span>
                      </a>
                    </div>
                    <hr className="mt-0 mb-30 black" />
                    <p className="features-1-descr mb-0">{item.desc}</p>
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
