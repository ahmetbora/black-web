import Image from "next/image";
import Link from "next/link";

const FooterBefeoreLight = (props) => {
    const {dark} = props;

    return (
        <section
        className={`page-section  ${
          dark ? "bg-gray-light-1 z-index-1" : ""
        }`}
      >
        <div className="container position-relative">
          {/* Decorative Waves */}
          <div
            className="decoration-21 d-none d-lg-block"
            data-rellax-y
            data-rellax-speed="0.7"
            data-rellax-percentage="0.5"
          >
            <Image
              width={148}
              height={148}
              className="svg-shape"
              src="/assets/images/decoration-3.svg"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
          <div className="row text-center wow fadeInUp">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <p className="section-descr mb-50 mb-sm-30">
                The power of design help us to solve complex problems
                and cultivate business solutions.
              </p>
              <div className="local-scroll">
                <Link
                  href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                  className="btn btn-mod btn-large btn-round btn-hover-anim"
                >
                  <span>Contact us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
            )
}

export default FooterBefeoreLight;