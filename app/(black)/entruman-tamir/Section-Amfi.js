const BlackTamirSectionAmfi = () => {

    return (
        <section className="page-section bg-dark-1 light-content">
        <div className="container position-relative">
          {/* Grid */}
          <div className="row">
            {/* Text */}
            <div className="col-md-12 col-lg-3 mb-md-50">
              <h2 className="section-caption mb-xs-10">
                Primary Benefits
              </h2>
              <h3 className="section-title-small mb-40">
                Why choose Resonance?
              </h3>
              <div className="section-line" />
            </div>
            {/* End Text */}
            {/* Feature Item */}
            {features5.slice(0, 3).map((elm, i) => (
              <div
                key={i}
                className="col-md-4 col-lg-3 d-flex align-items-stretch mb-sm-30"
              >
                <div className="alt-features-item border-left mt-0">
                  <div className="alt-features-icon">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d={elm.svgPath} />
                    </svg>
                  </div>
                  <h4 className="alt-features-title">{elm.title}</h4>
                  <div className="alt-features-descr">
                    {elm.description}
                  </div>
                </div>
              </div>
            ))}
            {/* End Feature Item */}

            {/* End Feature Item */}
          </div>
          {/* End Grid */}
        </div>
      </section>   
    )
}

export default BlackTamirSectionAmfi;